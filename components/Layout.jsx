import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between">
        <p>header</p>
        <Link href={"/"}>&gt;Homepage&lt;</Link>
      </header>
      <main className="">{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
