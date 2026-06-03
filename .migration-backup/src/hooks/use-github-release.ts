import { useQuery } from "@tanstack/react-query";

interface GitHubRelease {
  tag_name: string;
  assets: {
    name: string;
    browser_download_url: string;
  }[];
}

export function useGitHubRelease() {
  return useQuery({
    queryKey: ["github-latest-release"],
    queryFn: async () => {
      // Fetches the absolute latest release from your repository
      const response = await fetch(
        "https://api.github.com/repos/omtripathi52/ScreenSentinel/releases/latest"
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch latest release");
      }
      
      const data: GitHubRelease = await response.json();

      // Find the specific .exe and .zip files from the release assets
      const exeAsset = data.assets.find((asset) => asset.name.endsWith(".exe"));
      const zipAsset = data.assets.find((asset) => asset.name.endsWith(".zip"));

      // Fallback to the main releases page if specific assets aren't found
      const fallbackUrl = "https://github.com/omtripathi52/ScreenSentinel/releases/latest";

      return {
        version: data.tag_name, // e.g., "v1.0.0"
        exeUrl: exeAsset?.browser_download_url || fallbackUrl,
        zipUrl: zipAsset?.browser_download_url || fallbackUrl,
      };
    },
    // Cache the result for 1 hour so we don't spam the GitHub API and get rate-limited
    staleTime: 1000 * 60 * 60, 
  });
}