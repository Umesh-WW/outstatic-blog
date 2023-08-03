import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the API route using 'fetch' or any other method
    fetch("/api/latests/singal")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);
  console.log("sidebar", blogPosts);
  const category = [
    ["AI Avtar Generator", "/category/ai-avatar-generator"],
    ["AI Chatbot", "/category/ai-chatbot"],
    ["AI Logo Maker", "/category/ai-logo-maker"],
    ["AI Transcriber", "/category/ai-transcriber"],
    ["AI Video Generator", "/category/ai-video-generator"],
    ["AI Video", "/category/ai-video"],
    ["AI Writer", "/category/ai-writer"],
    ["Text Generator", "/category/text-generator"],
  ];
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

          <div className="mt-6 border-b-2">
            <a href="#">
              <Image
                width={100}
                height={100}
                src="https://dragganaitool.com/wp-content/uploads/2023/07/Top-100-AI-Tools.png"
                alt=""
                layout="responsive"
              />
            </a>
            <div className="p-2">
              <a href="#">
                <h5 className="mb-1 font-bold tracking-tight text-black">
                  Fliki.ai: Best Free AI Video Generator (Convert Text to Video)
                </h5>
              </a>
              <div className="text-xs">28 July 2023</div>
            </div>
          </div>
          <div className="mt-6 border-b-2">
            <a href="#">
              <Image
                width={100}
                height={100}
                src="https://dragganaitool.com/wp-content/uploads/2023/06/Fliki-AI-video-.png"
                alt=""
                layout="responsive"
              />
            </a>
            <div className="p-2">
              <a href="#">
                <h5 className="mb-1 font-bold tracking-tight text-black">
                  Fliki.ai: Best Free AI Video Generator (Convert Text to Video)
                </h5>
              </a>
              <div className="text-xs">28 July 2023</div>
            </div>
          </div>
          <div className="mt-6 border-b-2">
            <a href="#">
              <Image
                width={100}
                height={100}
                src="https://dragganaitool.com/wp-content/uploads/2023/07/Midjourney-prompting-guide.png"
                alt=""
                layout="responsive"
              />
            </a>
            <div className="p-2">
              <a href="#">
                <h5 className="mb-1 font-bold tracking-tight text-black">
                  Top 100 AI Tools You Can not Ignore (Ultimate list 2023)
                </h5>
              </a>
              <div className="text-xs">28 July 2023</div>
            </div>
          </div>
          <div className="mt-6 border-b-2">
            <a href="#">
              <Image
                width={100}
                height={100}
                src="https://dragganaitool.com/wp-content/uploads/2023/07/ChatGPT-Prompt-Engineering-Mastery-Course.png"
                alt=""
                layout="responsive"
              />
            </a>
            <div className="p-2">
              <a href="#">
                <h5 className="mb-1 font-bold tracking-tight text-black">
                  Top 100 AI Tools You Can not Ignore (Ultimate list 2023)
                </h5>
              </a>
              <div className="text-xs">28 July 2023</div>
            </div>
          </div>
          <div className="mt-6 border-b-2">
            <a href="#">
              <Image
                width={100}
                height={100}
                src="https://dragganaitool.com/wp-content/uploads/2023/07/Canva-AI-Magic-edit-.png"
                alt=""
                layout="responsive"
              />
            </a>
            <div className="p-2">
              <a href="#">
                <h5 className="mb-1 font-bold tracking-tight text-black">
                  Top 100 AI Tools You Can not Ignore (Ultimate list 2023)
                </h5>
              </a>
              <div className="text-xs">28 July 2023</div>
            </div>
          </div>
        </div>
        <div className="md:max-w-[350px] shadow-gray-500 shadow-md py-8 px-5 mx-auto my-8">
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-lg font-bold px-2 py-1 shadow-lg rounded-xl mt-3">
            Select Your Category
          </div>
          <div>
            <ul
              id="dropdown"
              className="bg-white text-[#1b78e2] w-60"
            >
              {category.map(([label,href], i) => (
                <Link
                  href={href}
                  key={i}
                >
                  <li key={label} className={`hover:text-gray-900 text-base font-semibold ml-2 border-gray-900 p-2 border-b`}>
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
