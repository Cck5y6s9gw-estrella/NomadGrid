const GITHUB_API = "https://api.github.com";

function repoInfo() {
  return {
    repo: process.env.GITHUB_REPO || "",
    branch: process.env.GITHUB_BRANCH || "main",
    token: process.env.GITHUB_TOKEN || "",
  };
}

export async function githubFileExists(path: string): Promise<boolean> {
  const { repo, branch, token } = repoInfo();
  const res = await fetch(
    `${GITHUB_API}/repos/${repo}/contents/${path}?ref=${branch}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    }
  );
  return res.status === 200;
}

export async function githubCommitFile(
  path: string,
  base64Content: string,
  message: string
): Promise<void> {
  const { repo, branch, token } = repoInfo();
  const res = await fetch(`${GITHUB_API}/repos/${repo}/contents/${path}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, content: base64Content, branch }),
  });
  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`GitHub API error (${res.status}): ${errorBody}`);
  }
}