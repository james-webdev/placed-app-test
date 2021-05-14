import React from "react";
import Logo from "../../svgs/LogoSvg";
import { Link } from "gatsby";

const Header = () => (
  <header className="rounded sticky top-0 z-20 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-2 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-32 mr-3">
          <Logo />{" "}
        </div>
      </div>
       <div className="flex mt-4 sm:mt-0">
        <Link className="hidden lg:block px-4 font-sans font-semibold" href="#">
          Blog
        </Link>
        <Link className="px-4 font-sans font-semibold" href="">
          Find a job
        </Link>
        <Link className="hidden lg:block px-4 font-sans font-semibold" href="#">
          Hire staff
        </Link>
        <Link className="px-4 font-sans font-semibold" href="#">
          Features
        </Link>
        <Link className="px-4 font-sans font-semibold" href="#">
          Login
        </Link>
      </div> 
      <div className="hidden yellow rounded-lg p-2 md:block">
        <button className="text-sm font-sans">Book a Demo</button>
      </div>
    </div>
  </header>
);

export default Header;
