import { createIssue, closeIssue, listIssues } from "./index.js";
import { expect, jest } from "@jest/globals";

global.fetch = jest.fn();

describe("GitHub Issues API", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("create", async () => {
    const mockResponse = { html_url: "https://github.com/owner/repo/issues/1" };
    fetch.mockResolvedValueOnce({ ok: true, json: () => mockResponse });

    const result = await createIssue("Test Issue", "Issue body");
    expect(result.html_url).toBe("https://github.com/owner/repo/issues/1");
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/issues"),
      expect.objectContaining({
        method: "POST",
        body: expect.any(String),
      })
    );
  });

  it("close", async () => {
    const mockResponse = { number: 1, state: "closed" };
    fetch.mockResolvedValueOnce({ ok: true, json: () => mockResponse });

    const result = await closeIssue(1);
    expect(result.state).toBe("closed");
  });

  it("open", async () => {
    const mockResponse = [{ number: 1, title: "Test Issue" }];
    fetch.mockResolvedValueOnce({ ok: true, json: () => mockResponse });

    const result = await listIssues();
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Test Issue");
  });
});
