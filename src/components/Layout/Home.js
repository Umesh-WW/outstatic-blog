import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="md:flex w-[95%] max-w-[1024px] mx-auto ">
        <div className="container shadow-gray-500 shadow-lg md:p-12 p-6 my-5">
          <header class="text-cyan-500 text-[40px] font-bold">
            <h1>Home page : Power of AI</h1>
          </header>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl mt-7">
            DragGan AI Tool: Power of AI for Image Editing - DragGAN AI Tool
          </div>
          <div className="mt-5 text-lg">
            <Image
              width={325}
              height={200}
              className="w-[325px] h-[170px] md:float-right object-cover mb-2"
              src="https://dragganaitool.com/wp-content/uploads/2023/05/DragGAN-AI-Tool-300x157.png"
              alt="bg"
            />
            DragGan AI Tool is an advanced and innovative photo editing tool
            that utilizes artificial intelligence to transform and modify images
            with ease
            <br />
            <br />
            <span className="font-bold">Price:</span> Open Source
            <br />
            <br />
            <span className="font-bold">Operating System:</span> Windows and
            Linux Source
            <br />
            <br />
            <span className="font-bold">Application Category:</span> Image
            Editor
            <br />
            <br />
            <span className="font-bold">Editor's Rating:</span>
            {/* star rating start */}
            <div class="flex items-center space-x-1">
              <span className="text-3xl font-bold mr-3">4</span>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            {/* star rating: end  */}
          </div>
          <br />
          <div>
            DragGAN AI Tool is an advanced and innovative photo editing tool
            that utilizes artificial intelligence to transform and modify images
            with ease. Developed by the Max Planck Institute, this user-friendly
            tool allows users to make realistic alterations to photographs by
            simply dragging and placing points interactively.
            <br /> <br /> It goes beyond traditional pixel manipulation,
            enabling users to apply various modification effects to different
            object types within the image. With DragGAN AI Tool, you can
            regenerate, rotate, and transform elements within your photos,
            giving you complete control over the editing process.
          </div>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl mt-7">
            Other Blogs:
          </div>
          <div className="mt-5 ">
            With a deep love for writing and a strong background in blogging,
            Sonu has established multiple successful educational blogs,
            including hindigovtscheme.com, ekalyanbihar.online, and
            bestsmartwatchindia.in. These platforms have helped thousands of
            readers stay informed and up-to-date on various topics.
          </div>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl mt-7">
            Our Mission to Create DragGAN AI Blog
          </div>
          <div className="mt-5 ">
            The creation of the DragGAN AI Tool Blog was driven by our desire to
            share knowledge and provide detailed tutorials on using the DragGAN
            AI editing tool.
            <br />
            <br /> We understand the importance of user-friendly and informative
            content, and we aim to deliver just that. Whether you&apos;re a
            beginner looking to explore the world of AI editing or an
            experienced user seeking advanced techniques, our blog has something
            for everyone.
          </div>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl my-7">
            Additional Features of DragGAN AI
          </div>
          <div>
            In addition to the above features, DragGAN AI offers even more
            capabilities to enhance your image editing experience:
            <ul>
              <li>
                <span className="font-bold mr-2">Pose manipulation:</span>Easily
                change the pose of humans or animals within your images, giving
                them a different stance or position.
              </li>
              <li>
                <span className="font-bold mr-2">Background alteration:</span>
                Easily change the pose of humans or animals within your images,
                giving them a different stance or position.
              </li>
              <li>
                <span className="font-bold mr-2">Create from scratch:</span>
                Easily change the pose of humans or animals within your images,
                giving them a different stance or position.
              </li>
              <li>
                <span className="font-bold mr-2">
                  Size and form modification:
                </span>
                Easily change the pose of humans or animals within your images,
                giving them a different stance or position.
              </li>
              <li>
                <span className="font-bold mr-2">
                  Object addition or removal:
                </span>
                Easily change the pose of humans or animals within your images,
                giving them a different stance or position.
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl mt-7">
            Tutorials:
          </div>
          <div className="mt-5 ">
            We cover a wide range of topics related to DragGAN, including
            step-by-step guides on how to use the tool effectively, the download
            procedure, and other relevant information. Our articles are designed
            to empower you with the skills and knowledge needed to make the most
            of this powerful AI editing tool.
          </div>
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white text-[25px] font-bold px-6 py-1 shadow-lg rounded-xl mt-7">
            Final Words:
          </div>
          <div className="mt-5 ">
            DragGAN AI has emerged as a game-changing tool in the field of image
            editing. Developed by the Max Planck Institute, this advanced
            AI-powered application empowers users to transform and modify images
            with unparalleled precision and control.
            <br />
            <br /> By allowing users to drag and place points for precise
            editing, DragGAN AI provides a level of fine control that sets it
            apart from traditional editing methods. Its flexibility in picture
            manipulation techniques opens up endless creative possibilities,
            while its efficient editing process ensures quick and seamless
            modifications.
            <br />
            <br /> Moreover, DragGAN AI delivers accurate results, even in
            challenging scenarios, preserving the integrity of the original
            image. As a direct competitor to Photoshop, DragGAN AI offers a
            user-friendly alternative that is poised to revolutionize the world
            of photo editing.
            <br />
            <br /> Whether you are a professional photographer, a graphic
            designer, or an editing enthusiast, DragGAN AI is set to unleash
            your creativity and elevate your image editing capabilities to new
            heights.
            <br />
            <br /> Stay tuned for the official release of DragGAN AI and prepare
            to use it on an exciting journey of transforming and enhancing your
            images like never before.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
