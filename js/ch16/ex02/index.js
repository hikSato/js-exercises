import { spawn } from "child_process";
import path from "path";

// ESMでこのファイルの絶対パスとして__dirnameを定義するイディオム
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// startChildで起動したプロセスの参照
let child = null;

// node ./child.js を起動し、このプロセスが終了したときに解決するPromiseを返す
// cf. https://nodejs.org/api/child_process.html#event-close
async function startChild() {
  const childPath = path.join(__dirname, "child.js");
  child = spawn("node", [childPath]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  return new Promise((res) => {
    child.on("close", (code, signal) => {
      res([code, signal]);
    });
  });
}

// TODO: ここに処理を書く
let isShuttingDown = false;
async function monitorChild() {
  const [code, signal] = await startChild();

  if (signal) {
    console.log(`Child process terminated by signal: ${signal}`);
    process.exit(0);
  }

  if (code !== 0 && !isShuttingDown) {
    console.log(`Child process exited with code ${code}. Restarting...`);
    monitorChild();
  } else if (isShuttingDown) {
    process.exit(0);
  }
}

function setupSignalHandling() {
  const signals = ["SIGINT", "SIGTERM"];

  signals.forEach((signal) => {
    process.on(signal, () => {
      console.log(`Received ${signal}. Sending to child process...`);
      if (child) {
        child.kill(signal);
      }
      child.on("exit", () => {
        console.log(
          `Child process exited with signal: ${signal}. Exiting parent.`
        );
        process.exit();
      });
    });
  });
}

(async () => {
  setupSignalHandling();
  await monitorChild();
})();
