import React, { useState } from "react";
const HomePage = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="md:flex w-[1020px] gap-[1rem] h-auto text-[17px]">
        <div className="container shadow-gray-500 shadow-lg p-12 my-5 md:h-auto text-[17px]">
          <header className="text-cyan-500 text-[40px] font-bold m-0 mb-6">
            <h1>DragGan AI Tool: Power of AI for Image Editing</h1>
          </header>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[15px] font-bold px-6 py-1 shadow-lg rounded-xl mb-6">
            DragGan AI Tool: Power of AI for Image Editing - DragGAN AI Tool
          </div>
          <div className="mb-6">
            DragGan AI Tool is an advanced and innovative photo editing tool
            that utilizes artificial intelligence to transform and modify images
            with ease.
          </div>
          <p className="mb-6">
            <strong>Price:</strong>Open Source
          </p>
          <p className="mb-6">
            <strong>Operating System:</strong>Windows and Linux
          </p>
          <p className="mb-6">
            <strong>Application Category:</strong>Image Editor
          </p>
          <p className="mb-6">
            <strong>Editor&apos;s Rating:</strong>
            <div className="flex">
              <p className="text-[25px]">
                <strong>4</strong>
              </p>
              <div className="flex mt-2 ml-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star0"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star1"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star2"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star3"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4">
                      <rect
                        height="150"
                        width="0"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star4"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
              </div>
            </div>
          </p>
          <p className="mb-6">
            <strong>DragGAN AI Tool</strong> is an advanced and innovative
            <a className="text-red-500 hover:text-black" href="#">
              photo editing tool
            </a>{" "}
            that utilizes artificial intelligence to transform and modify images
            with ease. Developed by the{" "}
            <a className="text-red-500 hover:text-black" href="#">
              Max Planck Institute
            </a>
            , this user-friendly tool allows users to make realistic alterations
            to photographs by simply dragging and placing points interactively.
          </p>
          <p className="mb-6">
            It goes beyond traditional pixel manipulation, enabling users to
            apply various modification effects to different object types within
            the image.
          </p>
          <p className="mb-6">
            With
            <strong>
              <a className="text-red-500 hover:text-black" href="#">
                DragGAN
              </a>
            </strong>
            <strong>AI Tool</strong>, you can regenerate, rotate, and transform
            elements within your photos, giving you complete control over the
            editing process.
          </p>
          <div className="border">
            <a>
              <img
                className="w-[400px] h-[500px] object-fill"
                src="../../public/images/img1.png"
                alt="bgimage"
              />
            </a>
          </div>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl mt-7 text-center mb-5">
            DragGAN AI Tool Details:
          </div>
          <table border="1" className="w-full border mb-6">
            <tbody>
              <tr className="border-b">
                <td className="p-2 ">
                  <strong>AI Tool</strong>
                </td>
                <td className="p-2 border-l">Drag Your GAN (DragGAN AI)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <strong>Supported OS</strong>
                </td>
                <td className="p-2 border-l">Linux and Windows</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <strong>System Requirement</strong>
                </td>
                <td className="p-2 border-l">
                  1–8 high-end NVIDIA GPUs with at least 12 GB of memory
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <strong>App Version</strong>
                </td>
                <td className="p-2 border-l">Latest Version</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <strong>Category</strong>
                </td>
                <td className="p-2 border-l">Image Editing</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <strong>All Features</strong>
                </td>
                <td className="p-2 border-l">
                  – Drag and Place Points for Precise Editing
                  <br />
                  – Flexible Picture Manipulation Techniques
                  <br />
                  – Efficient Editing Process
                  <br />– Accurate Results in Challenging Scenarios
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-red-500 p-2">
                  <strong>Offcial GitHub</strong>
                </td>
                <td className="p-2 border-l">
                  https://github.com/XingangPan/DragGAN
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <strong>Developers</strong>
                </td>
                <td className="p-2 border-l">Max planck institute</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <strong>Last Update</strong>
                </td>
                <td className="p-2 border-l">1 Day ago</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <strong>Join Telegram</strong>
                </td>
                <td className="text-red-500 p-2 border-l">
                  <a className=" hover:text-black">Click Here</a>
                </td>
              </tr>
            </tbody>
          </table>
          {show ? (
            <>
              <div className="border bg-[#fafafa] p-0 mt-5 mb-5 w-full">
                <div className="text-[17px] py-4 px-5 font-semibold flex justify-between">
                  <div>Table of Content</div>
                  <div className="ml-2">
                    &nbsp;[
                    <a
                      className="font-semibold text-red-500 hover:text-black"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      Hide
                    </a>
                    ]
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="border bg-[#fafafa] p-0 mt-5 mb-5 w-64">
                <div className="text-[17px] py-4 px-5 font-semibold flex">
                  <div>Table of Content</div>
                  <div className="ml-2">
                    &nbsp;[
                    <a
                      className="font-semibold text-red-500 hover:text-black"
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      Show
                    </a>
                    ]
                  </div>
                </div>
              </div>
            </>
          )}
          {show && (
            <>
              <div className="py-4 px-7">
                <div>
                  <ul className="list-disc marker:text-black text-red-500">
                    <li>
                      <a className=" hover:text-black">
                        DragGAN AI App Details:
                      </a>
                    </li>
                    <li>
                      <a className=" hover:text-black">DragGAN AI Features:</a>
                      <ul className="list-disc ml-6">
                        <li>
                          <a className=" hover:text-black">
                            1. Drag for Precise Control
                          </a>
                        </li>
                        <li>
                          <a className=" hover:text-black">
                            2. Unleash Creativity with Flexibility
                          </a>
                        </li>
                        <li>
                          <a className=" hover:text-black">
                            3. Efficient Editing Made Easy
                          </a>
                        </li>
                        <li>
                          <a className=" hover:text-black">
                            4. Accurate Results, Even in Challenging Situations
                          </a>
                        </li>
                        <li>
                          <a className=" hover:text-black">
                            5. Unlock the Potential of DragGAN AI
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className=" hover:text-black">
                        DragGan AI Tool: All You Need to Know
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] text-center font-bold px-6 py-1 shadow-lg rounded-xl mb-5">
            DragGAN AI Features:
          </div>
          <h3 className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[21px] font-bold px-6 py-1 shadow-lg rounded-xl mb-5">
            1. Drag for Precise Control
          </h3>
          <p className="mb-6">
            One of the standout features of <strong>DragGAN AI</strong> is its
            ability to provide users with fine control over image manipulation.
            By simply dragging specific points, users can achieve precise and
            accurate distortions in their photos.
          </p>
          <p className="mb-6">
            This sets DragGAN AI apart from traditional image editing methods
            that often require users to make significant and sometimes
            inaccurate modifications to achieve the desired effect.
          </p>
          <figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
          </figure>
          <h3 className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[21px] font-bold px-6 py-1 shadow-lg rounded-xl mb-5">
            2. Unleash Creativity with Flexibility
          </h3>
          <p className="mb-6">
            <strong>DragGAN AI</strong> is a tool that helps people change
            pictures in many different ways so they can make their own cool and
            creative art. You can change how things look, how they feel, and
            where they are in the picture. You can make big or small changes and
            make really amazing pictures that are special and unique.
          </p>
          <h3 className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[21px] font-bold px-6 py-1 shadow-lg rounded-xl mb-5">
            3. Efficient Editing Made Easy
          </h3>
          <p className="mb-6">
            DragGan AI is a tool that helps people edit pictures quickly and
            easily. It works really fast and can show you the changes you make
            in just a few seconds. This is helpful because it saves time and
            makes things go more smoothly.
          </p>
          <h3 className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[21px] font-bold px-6 py-1 shadow-lg rounded-xl mb-5">
            4. Accurate Results, Even in Challenging Situations
          </h3>
          <p className="mb-6">
            <strong>DragGAN AI</strong> is really good at doing this because it
            can make changes that look just like the original picture, even when
            it’s hard to see or things look different. This makes sure the
            picture looks really nice when we’re done and doesn’t look weird.
          </p>
          <h3 className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[21px] font-bold px-6 py-1 shadow-lg rounded-xl mb-5">
            5. Unlock the Potential of DragGAN AI
          </h3>
          <p className="mb-6">
            <strong>DragGAN AI</strong>is a really helpful tool that can help
            you make your pictures look even better! It lets you make very small
            changes to your pictures and gives you lots of different ways to
            change them.
          </p>
          <p className="mb-6">
            Using<strong>DragGAN AI</strong> DragGAN AI makes it much easier to
            edit your pictures, so you can be really creative and make them look
            just the way you want them to.
          </p>
          <div>{/* carousel */}</div>
          <div className="py-9 px-10 shadow-2xl my-7 mx-auto border rounded-md">
            <p className=" text-[28px] m-0">
              <strong>DragGAN AI Review</strong>
            </p>
            <p className="mb-6 text-[17px]">AI Team</p>
            <div className="flex justify-between border-b py-2.5">
              <span>User Interface</span>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star0"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star1"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star2"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star3"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4">
                      <rect
                        height="150"
                        width="0"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star4"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex justify-between border-b py-2.5">
              <span>Editing Tools</span>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star0"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star1"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star2"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star3"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4">
                      <rect
                        height="150"
                        width="0"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star4"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex justify-between border-b py-2.5">
              <span>Performance</span>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star0"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star1"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star2"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star3"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4">
                      <rect
                        height="150"
                        width="0"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star4"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex justify-between border-b py-2.5">
              <span>Features</span>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star0"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star1"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star2"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3">
                      <rect
                        height="150"
                        width="150"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star3"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 150 150"
                >
                  <defs>
                    <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4">
                      <rect
                        height="150"
                        width="0"
                        y="0"
                        x="0"
                        fill="#fff"
                      ></rect>
                    </mask>
                  </defs>{" "}
                  <path
                    fill="#888888"
                    stroke-width="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                  <path
                    class="star"
                    id="star4"
                    mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4)"
                    fill="#f7b708"
                    strokewidth="2.5"
                    d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                    stroke="#f7b708"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-6 mb-3 text-[24px] ">
              <strong>Summary</strong>
            </div>
            <div className="flex justify-between text-[17px] mb-6">
              <p>
                <strong>DragGAN AI</strong> Tool stands out due to its
                user-friendly interface, making it accessible to both
                professionals and beginners. It utilizes feature-based motion
                supervision and point-tracking techniques, allowing users to
                interactively drag points in their pictures for precise and
                realistic modifications.
              </p>
              <div>
                <span className="text-[40px] font-semibold">3.8</span>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 150 150"
                  >
                    <defs>
                      <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0">
                        <rect
                          height="150"
                          width="150"
                          y="0"
                          x="0"
                          fill="#fff"
                        ></rect>
                      </mask>
                    </defs>{" "}
                    <path
                      fill="#888888"
                      stroke-width="2.5"
                      d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                      stroke="#f7b708"
                    ></path>
                    <path
                      class="star"
                      id="star0"
                      mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-0)"
                      fill="#f7b708"
                      strokewidth="2.5"
                      d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                      stroke="#f7b708"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 150 150"
                  >
                    <defs>
                      <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1">
                        <rect
                          height="150"
                          width="150"
                          y="0"
                          x="0"
                          fill="#fff"
                        ></rect>
                      </mask>
                    </defs>{" "}
                    <path
                      fill="#888888"
                      stroke-width="2.5"
                      d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                      stroke="#f7b708"
                    ></path>
                    <path
                      class="star"
                      id="star1"
                      mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-1)"
                      fill="#f7b708"
                      strokewidth="2.5"
                      d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                      stroke="#f7b708"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 150 150"
                  >
                    <defs>
                      <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2">
                        <rect
                          height="150"
                          width="150"
                          y="0"
                          x="0"
                          fill="#fff"
                        ></rect>
                      </mask>
                    </defs>{" "}
                    <path
                      fill="#888888"
                      stroke-width="2.5"
                      d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                      stroke="#f7b708"
                    ></path>
                    <path
                      class="star"
                      id="star2"
                      mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-2)"
                      fill="#f7b708"
                      strokewidth="2.5"
                      d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                      stroke="#f7b708"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 150 150"
                  >
                    <defs>
                      <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3">
                        <rect
                          height="150"
                          width="150"
                          y="0"
                          x="0"
                          fill="#fff"
                        ></rect>
                      </mask>
                    </defs>{" "}
                    <path
                      fill="#888888"
                      stroke-width="2.5"
                      d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                      stroke="#f7b708"
                    ></path>
                    <path
                      class="star"
                      id="star3"
                      mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-3)"
                      fill="#f7b708"
                      strokewidth="2.5"
                      d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                      stroke="#f7b708"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 150 150"
                  >
                    <defs>
                      <mask id="ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4">
                        <rect
                          height="150"
                          width="0"
                          y="0"
                          x="0"
                          fill="#fff"
                        ></rect>
                      </mask>
                    </defs>{" "}
                    <path
                      fill="#888888"
                      stroke-width="2.5"
                      d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                      stroke="#f7b708"
                    ></path>
                    <path
                      class="star"
                      id="star4"
                      mask="url(#ub_review_star_filter-84235d7d-0196-458a-8f14-d01bf5b8356e-0-4)"
                      fill="#f7b708"
                      strokewidth="2.5"
                      d="m0.75,56.89914l56.02207,0l17.31126,-56.14914l17.31126,56.14914l56.02206,0l-45.32273,34.70168l17.31215,56.14914l-45.32274,-34.70262l-45.32274,34.70262l17.31215,-56.14914l-45.32274,-34.70168z"
                      stroke="#f7b708"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <a href="#">
                <button className="text-white bg-[#f63d3d] text-[15px] min-w-[100px] py-4 px-2.5 rounded-md inline-block">
                  Download
                </button>
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl mb-6 text-center">
            DragGAN AI Powerful Features:
          </div>
          <div className="border-b border-black flex justify-between">
            <div className="border">
              <figure></figure>
            </div>
            <div className="border px-2 self-center font-semibold">
              <ul>
                <li>Photo Editing</li>
                <li>Image Manipulation</li>
                <li>Generating Photorealistic Image</li>
                <li>3D Image Transformation</li>
                <li>Creative Artistic Editing</li>
                <li>Drag and Place Point</li>
                <li>Size and form modification</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl mb-6 text-center">
            How DragGAN AI Works?
          </div>
          <div className="border-b">
            <div>
              <figure></figure>
            </div>
            <div>
              <p>
                The underlying mechanism of<storng> DragGAN </storng>involves a
                two-step process. First, the software extracts feature from the
                image using a{" "}
                <storng>convolutional neural network (CNN)</storng>. These
                extracted features serve as the foundation for creating a 3D
                representation of the picture.
              </p>
              <p>
                In the second step, a second CNN comes into play, trained on an
                image dataset that has been modified by human experts. This
                training enables the second CNN to manipulate the 3D model
                according to desired changes.
              </p>
              <button>DragGAN AI Working</button>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl mt-7">
            How to Install DragGAN AI?
          </div>
          <div className="border-b">
            <div>
              <button>
                <a>Google Colab</a>
              </button>
            </div>
            <div>
              <figure></figure>
            </div>
          </div>
          <div className="border-b">
            <div>
              <figure></figure>
            </div>
            <div>
              <button>
                <a>Install Dra AI</a>
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl mt-7">
            DragGAN AI Demo Version
          </div>
          <div className="border">
            <div>
              <p>How to Run Demo of DragGAN AI</p>
            </div>
            <div>
              <p>
                <strong>
                  Whether you are a professional photographer, a graphic
                  designer, or an editing enthusiast, DragGAN AI is set to
                  unleash your creativity and elevate your image editing
                  capabilities to new heights.
                </strong>
              </p>
            </div>
            <div>
              <a href="#">DragGAN</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
