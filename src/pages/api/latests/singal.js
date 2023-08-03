import { getDocuments } from "outstatic/server";

export default async function handler(req, res) {
  const posts = getDocuments("latests", [
    "title",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
    "author",
  ]);

  res.status(200).json(posts);
}
