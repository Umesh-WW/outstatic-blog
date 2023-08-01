import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto">
      
          <div className="bg-zinc-800">
            <div className=" font-mono m-auto max-w-5xl text-white py-[3rem] pl-20 md:px-[10rem]">
              <ul className="w-[60%]">
                <li className="border-b border-gray-700">
                  <a href="#">About Us</a>
                </li>
                <li className="border-b pt-2 border-gray-700">
                  <a href="#">Terms</a>
                </li>
                <li className="border-b pt-2 border-gray-700">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="border-b pt-2 border-gray-700">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>{" "}
          </div>
          <div className="bg-cyan-400">
            <div className=" m-auto max-w-5xl text-center font-normal px-[2rem] md:px-[8rem] py-[1rem] text-white">
              © 2023 DragGAN AI Tool. Disclaimer: We are not affiliated with or
              endorsed by DragGAN AI Editing software. Our website provides
              information and tutorials about the DragGAN AI tool based on our
              own experiences and research.
            </div>
          </div>
        
    </footer>
  );
};

export default Footer;
