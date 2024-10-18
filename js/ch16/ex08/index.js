import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const GITHUB_TOKEN ="";
const OWNER = "";
const REPO = "";

const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(`https://api.github.com${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "github-issues-cli",
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error ${response.status}: ${errorData.message}`);
  }

  return response.json();
};

yargs(hideBin(process.argv))
  .command(
    "create <title> [body]",
    "Create a new GitHub issue",
    (yargs) => {
      yargs.positional("title", {
        describe: "Title of the issue",
        type: "string",
      });
      yargs.positional("body", {
        describe: "Body of the issue",
        type: "string",
      });
    },
    async (argv) => {
      try {
        const response = await apiFetch(`/repos/${OWNER}/${REPO}/issues`, {
          method: "POST",
          body: JSON.stringify({
            title: argv.title,
            body: argv.body || "",
          }),
        });
        console.log("Issue created:", response.html_url);
      } catch (error) {
        console.error("Error creating issue:", error.message);
      }
    }
  )
  .command(
    "close <issue_number>",
    "Close an existing GitHub issue",
    (yargs) => {
      yargs.positional("issue_number", {
        describe: "Issue number to close",
        type: "number",
      });
    },
    async (argv) => {
      try {
        await apiFetch(`/repos/${OWNER}/${REPO}/issues/${argv.issue_number}`, {
          method: "PATCH",
          body: JSON.stringify({ state: "closed" }),
        });
        console.log(`Issue #${argv.issue_number} closed.`);
      } catch (error) {
        console.error("Error closing issue:", error.message);
      }
    }
  )
  .command("list", "List all open issues", async () => {
    try {
      const response = await apiFetch(`/repos/${OWNER}/${REPO}/issues`, {
        params: { state: "open" },
      });
      if (response.length === 0) {
        console.log("No open issues.");
      } else {
        response.forEach((issue) => {
          console.log(`#${issue.number}: ${issue.title}`);
        });
      }
    } catch (error) {
      console.error("Error listing issues:", error.message);
    }
  })
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
    global: true,
  })
  .middleware((argv) => {
    if (argv.verbose) {
      const originalFetch = global.fetch;
      global.fetch = async (...args) => {
        console.log("Request:", args);
        return originalFetch(...args);
      };
    }
  })
  .help("h")
  .alias("h", "help").argv;
