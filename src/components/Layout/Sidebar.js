import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 md:w-64  md:relative md:right-0">
      <div className="md:max-w-[300px]">
        <div className="md:max-w-[256px] md:px-7  shadow-gray-500 shadow-lg py-8 px-16 mx-auto my-8">
          search
          <div className="flex gap-3">
            <input type="text" className="border border-black w-[8rem] mr" />
            <button className="bg-black text-white py-1 px-3 rounded">
              Search
            </button>
          </div>
        </div>
        <div className="md:max-w-[256px] shadow-gray-500 shadow-lg py-8 px-5 mx-auto my-8">
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
        <div className="md:max-w-[256px] shadow-gray-500 shadow-lg py-8 px-5 mx-auto my-8">
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
