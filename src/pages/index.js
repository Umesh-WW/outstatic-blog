import { getDocuments } from "outstatic/server";
import Link from "next/link";
import Image from "next/image";

const Index = ({ posts }) => {
  return (
    <>
      <div className="container">
        <h1>Welcome to my Blog!</h1>
        <div className="row">
          {posts.map((post) => (
            <Link href={"/blog/" + post.slug} key={post.publishedAt}>
              <div className="card">
                <Image
                  className="card-img"
                  width={100}
                  height={100}
                  src={post.coverImage}
                  alt={post.title}
                />
                <div className="card-body">
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <small className="author">By: {post.author.name}</small>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const posts = getDocuments("posts", [
    "title",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
    "author",
  ]);

  return {
    props: { posts },
  };
};
