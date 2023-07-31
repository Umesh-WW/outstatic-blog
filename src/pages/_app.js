import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import '@/styles/globals.css'
import React from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="flex-grow p-4">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
}

export default MyApp;
