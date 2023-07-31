import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <header className="h-16 bg-gray-300"></header>
      <main className="p-4" style={{ backgroundColor:'#fff', boxShadow:'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}}>{children}</main>
    </div>
  );
};

export default Layout;