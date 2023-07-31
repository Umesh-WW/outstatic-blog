import Image from "next/image";
import { getDocuments, getDocumentBySlug } from "outstatic/server";

const BlogSingle = ({ post }) => {
  return (
    <div>
      <div className="container">
        <Image
          width={100}
          height={100}
          className="card-img"
          src={post.coverImage}
          alt={post.title}
          style={{ maxHeight: "450px" }}
        />
        <div className="card-body">
          <h2 style={{ margin: "10px 0" }}>{post.title}</h2>
          <small className="author">By: {post.author.name}</small>
          <p style={{ marginTop: "5vh" }}>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;

export async function getStaticPaths() {
  const posts = getDocuments("posts", ["slug"]);

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const post = getDocumentBySlug("posts", slug, [
    "title",
    "slug",
    "coverImage",
    "author",
    "content",
  ]);
  return {
    props: { post },
  };
};
