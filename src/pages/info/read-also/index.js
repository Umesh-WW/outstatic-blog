import { getDocuments } from "outstatic/server";
import Image from "next/image";

const Index = ({ posts }) => {
      const handleLinkClick = (path) => {
        window.parent.postMessage({ type: "changePath", path }, "*");
      };
  return (
    <>
      <div className="md:max-w-[350px] shadow-gray-500 shadow-md py-8 px-8 mx-auto my-8">
        <div className="text-2xl font-bold ">
         Read Also:
        </div>
        {posts?.map((blogPost, i) => {
          const imageUrl = blogPost.coverImage;
          const publishedDate = new Date(blogPost.publishedAt);
          const day = publishedDate.getDate();
          const month = publishedDate.toLocaleString("default", {
            month: "short",
          });
          const year = publishedDate.getFullYear();
          return (
            <div className="mt-6 border-b-2" key={i}>
              <Image
                width={100}
                height={100}
                src={imageUrl}
                alt=""
                layout="responsive"
              />
              <div className="p-2">
                <h5
                  onClick={() =>
                    handleLinkClick("/category/latexes/" + blogPost.slug)
                  }
                  className="mb-1 font-bold tracking-tight text-black cursor-pointer"
                >
                  {blogPost.title}
                </h5>
                <div className="text-xs">
                  {<time>{`${day} ${month} ${year}`}</time>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};


export const getStaticProps = async () => {
  const posts = getDocuments("latexes", [
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
export default Index;