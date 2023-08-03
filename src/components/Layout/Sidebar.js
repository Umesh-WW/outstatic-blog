import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the API route using 'fetch' or any other method
    fetch("/api/latests/singal")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <aside className="lg:w-[450px]  md:relative md:right-0">
      <div className="md:max-w-[450px]">
        <div className="md:max-w-[350px] md:px-7 text-xl shadow-gray-500 shadow-md py-8 px-16 mx-auto my-8">
          Search
          <div className="flex gap-3">
            <input type="text" className="border border-black w-[8rem] mr" />
            <button className="bg-black text-md text-white py-1 px-3 rounded">
              Search
            </button>
          </div>
        </div>
        <div className="md:max-w-[350px] shadow-gray-500 shadow-md py-8 px-8 mx-auto my-8">
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-xl font-bold px-4 py-1 shadow-lg rounded-xl mt-3">
            Latest AI Tutorials
          </div>

          {blogPosts.map((blogPost, i) => {
            const imageUrl = blogPost.coverImage;
            const publishedDate = new Date(blogPost.publishedAt);
            const day = publishedDate.getDate();
            const month = publishedDate.toLocaleString("default", {
              month: "short",
            });
            const year = publishedDate.getFullYear();

            return (
              <div className="mt-6 border-b-2" key={i}>
                <Link href={"/latests/" + blogPost.slug}>
                  <Image
                    width={100}
                    height={100}
                    src={imageUrl}
                    alt=""
                    layout="responsive"
                  />
                </Link>
                <div className="p-2">
                  <Link href={"/latests/" + blogPost.slug}>
                    <h5 className="mb-1 font-bold tracking-tight text-black">
                      {blogPost.title}
                    </h5>
                  </Link>
                  <div className="text-xs">
                    {<time>{`${day} ${month} ${year}`}</time>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:max-w-[350px] shadow-gray-500 shadow-md py-8 px-5 mx-auto my-8">
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-lg font-bold px-2 py-1 shadow-lg rounded-xl mt-3">
            Select Your Category
          </div>
          <div>
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              AI Avatar Generator
            </a>
            <br />
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              AI Chatbot
            </a>
            <br />
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              AI Course
            </a>
            <br />
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              AI Image Generator
            </a>
            <br />
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              AI Image Upscaler
            </a>
            <br />
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              AI Logo Maker
            </a>
            <br />
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              AI Tool
            </a>
            <br />
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              ChatGPT
            </a>
            <br />
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              Text Generator
            </a>
            <br />
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              Uncategorised
            </a>
            <br />
            <a
              href="#"
              className="text-blue-500 text-sm ml-2 border-b border-gray-900"
            >
              Working
            </a>
            <br />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
