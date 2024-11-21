const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OWNER = process.env.OWNER;
const REPO = process.env.REPO;

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

export const createIssue = async (title, body = "") => {
  const response = await apiFetch(`/repos/${OWNER}/${REPO}/issues`, {
    method: "POST",
    body: JSON.stringify({ title, body }),
  });
  return response;
};

export const closeIssue = async (issueNumber) => {
  const response = await apiFetch(
    `/repos/${OWNER}/${REPO}/issues/${issueNumber}`,
    {
      method: "PATCH",
      body: JSON.stringify({ state: "closed" }),
    }
  );
  return response;
};

export const listIssues = async () => {
  const response = await apiFetch(`/repos/${OWNER}/${REPO}/issues`, {
    params: { state: "open" },
  });
  return response;
};
