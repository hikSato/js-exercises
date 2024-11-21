import { Polly } from "@pollyjs/core";
import nodeHttpAdapter from "@pollyjs/adapter-node-http";
import "@pollyjs/persister-local-storage";
import { createIssue, closeIssue, listIssues } from "./index";

Polly.register(nodeHttpAdapter);

describe("Polly.js", () => {
  let polly;

  beforeEach(() => {
    polly = new Polly("github-api", {
      adapters: ["node-http"],
      persister: "@pollyjs/persister-local-storage",
      recordIfMissing: true,
    });
  });

  afterEach(async () => {
    await polly.stop();
  });

  it("create", async () => {
    const title = "New issue";
    const body = "This is a test issue";
    const response = await createIssue(title, body);
    expect(response).toHaveProperty("title", title);
    expect(response).toHaveProperty("body", body);
  });

  it("close", async () => {
    const issueNumber = 1;
    const response = await closeIssue(issueNumber);
    expect(response.state).toBe("closed");
  });

  it("open", async () => {
    const issues = await listIssues();
    issues.forEach((issue) => {
      expect(issue).toHaveProperty("title");
    });
  });
});
