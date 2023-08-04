import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
 
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
    useEffect(() => {
      const handleMessage = (event) => {
        const { type, path } = event.data;
        if (type === "changePath") {
           router.push(path);

        }
      };

      // Add the event listener when the component mounts
      window.addEventListener("message", handleMessage);

      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("message", handleMessage);
      };
    }, []);


  return (
    <aside className="lg:w-[450px]  md:relative md:right-0">
      <div className="md:max-w-[450px]">
        {/* <div className="md:max-w-[350px] md:px-7 text-xl shadow-gray-500 shadow-md py-8 px-16 mx-auto my-8">
          Search
          <div className="flex gap-3">
            <input type="text" className="border border-black w-[8rem] mr" />
            <button className="bg-black text-md text-white py-1 px-3 rounded">
              Search
            </button>
          </div>
        </div> */}

        <div className="md:max-w-[350px] shadow-gray-500 shadow-md py-8 px-5 mx-auto my-8">
          <iframe
            src="/info/sidebar-menu" // Replace with the actual path to the component or page you want to render
            width="100%" // Set the desired width of the sidebar
            height="100%"
            // scrolling="no"
            style={{ border: "0px", overflow: "hidden",height: "100vh" }}
          />{" "}
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
