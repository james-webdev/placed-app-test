import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header className="rounded sticky top-0 z-20 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-2 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-32 mr-3">Logo here</div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" href="#features">
          Features
        </Link>
        <Link className="px-4" href="#pricing">
          Pricing
        </Link>
        <Link className="px-4" href="#testimonials">
          Testimonials
        </Link>
      </div>
      <div className="hidden md:block">
        <button
          onClick="https://download.worktools.link/GuardianInstaller.exe"
          className="text-sm"
        >
          Download Now
        </button>
      </div>
    </div>
  </header>
);

export default Header;
