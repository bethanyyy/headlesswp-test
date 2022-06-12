import React from "react";
import Header from "./Header";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Header/>
      <main className="">{children}</main>
      <footer className="bg-slate-900 p-6">footer</footer>
    </div>
  );
};

export default Layout;
