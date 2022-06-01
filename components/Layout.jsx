import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto min-h-full flex flex-col bg-slate-300">
      <header className="p-5 flex justify-between">
        <p>header</p>
        <Link href={"/"}>&gt;Homepage&lt;</Link>
      </header>
      <main className="">{children}</main>
      <footer className="p-10 bg-blue-300 mt-auto">footer</footer>
    </div>
  );
};

export default Layout;
