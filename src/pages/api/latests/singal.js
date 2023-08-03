import { getDocuments } from "outstatic/server";

export default async function handler(req, res) {
  try {
    const posts = await getDocuments("latexes", [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
      "author",
    ]);

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
