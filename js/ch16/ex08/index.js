#!/usr/bin/env node

import axios from "axios";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const GITHUB_TOKEN = "";
const OWNER = "";
const REPO = "";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "User-Agent": "github-issues-cli",
    Accept: "application/vnd.github.v3+json",
  },
});

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
        const response = await api.post(`/repos/${OWNER}/${REPO}/issues`, {
          title: argv.title,
          body: argv.body || "",
        });
        console.log("Issue created:", response.data.html_url);
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
        const response = await api.patch(
          `/repos/${OWNER}/${REPO}/issues/${argv.issue_number}`,
          {
            state: "closed",
          }
        );
        console.log(`Issue #${argv.issue_number} closed.`);
      } catch (error) {
        console.error("Error closing issue:", error.message);
      }
    }
  )
  .command("list", "List all open issues", async () => {
    try {
      const response = await api.get(`/repos/${OWNER}/${REPO}/issues`, {
        params: { state: "open" },
      });
      if (response.data.length === 0) {
        console.log("No open issues.");
      } else {
        response.data.forEach((issue) => {
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
      api.interceptors.request.use((config) => {
        console.log("Request:", config);
        return config;
      });
    }
  })
  .help("h")
  .alias("h", "help").argv;
