import React from "react";
import Logo from "../../svgs/LogoSvg";
// import { Link } from "gatsby";

const Header = () => (
  <header className="rounded sticky top-0 z-20 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-2 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-32 mr-3">
          <Logo />{" "}
        </div>
      </div>
      {/* <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" href="#features">
          Blog
        </Link>
        <Link className="px-4" href="#pricing">
          Find a job
        </Link>
        <Link className="px-4" href="#testimonials">
          Hire staff
        </Link>
        <Link className="px-4" href="#testimonials">
          Features
        </Link>
        <Link className="px-4" href="#testimonials">
          Login
        </Link>
      </div> */}
      <div className="hidden yellow rounded-lg p-2 md:block">
        <button className="text-sm font-sans">Book a Demo</button>
      </div>
    </div>
  </header>
);

export default Header;
