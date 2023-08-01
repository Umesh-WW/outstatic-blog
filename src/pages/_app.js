import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import React from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps,router }) {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-1  justify-center">
        <main className="flex-1 p-4 w-full max-w-screen-lg">
          <Component {...pageProps} />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
