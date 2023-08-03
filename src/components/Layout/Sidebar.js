import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { OutstaticApi } from "outstatic";
const category = [
   ["AI Avtar Generator", "/category/ai-avatar-generator"],
   ["AI Chatbot", "/category/ai-chatbot"],
   ["AI Logo Maker", "/category/ai-logo-maker"],
   ["AI Transcriber", "/category/ai-transcriber"],
   ["AI Video Generator", "/category/ai-video-generator"],
   ["AI Voice", "/category/ai-voice"],
   ["AI Writer", "/category/ai-writer"],
   ["Text Generator", "/category/text-generator"],
 ];

const Sidebar = () => {
  const [blogPosts, setBlogPosts] = useState([]);

    // useEffect(() => {
    //   // Create an instance of the Outstatic API
    //   const api = new OutstaticApi();

    //   // Call the API to fetch data
    //   api
    //     .getData()
    //     .then((response) => {
    //       // Assuming the API returns an array of data, set it in the state
    //       setData(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //     });
    // }, []);

   console.log('');
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
            <ul id="category" className="bg-white text-[#1b78e2] w-60">
              {category.map(([label, href], i) => (
                <Link href={href} key={i}>
                  <li
                    key={label}
                    className={`hover:text-gray-900 text-base font-semibold ml-2 border-gray-900 p-2 border-b`}
                  >
                    <span>{label}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
