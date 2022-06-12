import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between bg-slate-800 items-center border-b border-slate-200">
        <div>
          <h1 className="font-bold uppercase p-8 hover:text-white text-slate-200 scale-125">
            <a href="/">Nekonuma</a>
          </h1>
        </div>

        <div className="flex justify-end text-nekopink cursor-pointer text-xs space-x-3 px-4 uppercase font-bold scale-75 md:scale-100">
          <Link href="#"><a className="px-4 rounded-full tracking-wider border-2 border-nekopink py-2 hover:bg-nekopink hover:text-white ease-out duration-500">Log in</a></Link>
          <Link href="#"><a className="px-4 rounded-full tracking-wider border-2 border-nekopink py-2 hover:bg-nekopink hover:text-white ease-out duration-500">Sign up</a></Link>
        </div>
      </header>
    )
}

export default Header;