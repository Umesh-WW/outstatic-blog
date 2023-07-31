import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import React from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navbar />
      <div className="flex flex-col w-full md:w-auto md:flex-grow md:flex-shrink-0">
        <main className="flex-grow p-4">
          <Component {...pageProps} />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
