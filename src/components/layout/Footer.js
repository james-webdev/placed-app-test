import React from "react";
import logo from "../../images/placed.png";
import AppStore from "../../svgs/AppStore";
import GooglePlay from "../../svgs/GooglePlay";
import LogoWhite from "../../svgs/LogoWhite";

const Footer = () => (
  <footer className="footercolour pb-10 text-white">
    <div className="lg:flex lg:justify-center">
      <div className="sm:flex sm:flex-col">
        <div className="flex p-4 ml-2 pl-5 pt-5 flex-col sm:flex sm:flex-row sm:justify-left sm:items-start">
          <div className="flex flex-col mt-1 sm:mt-2 sm:p-4">
            {/* <div className="p-1 sm:p-3">
              <LogoWhite />
            </div>*/}
            <div>
              <img className="w-48" src={logo} alt="" />
            </div>
            <div className="p-1 mt-4">
              <GooglePlay />
            </div>
            <div className="p-1">
              <AppStore />
            </div>
          </div>
          <div className="flex flex-col mt-1 sm:mt-2 sm:p-4">
            <h1 className="text-xl text-gray-500">EMPLOYER</h1>
            <div className="sm:mt-1 text-small flex flex-col">
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Book a Demo
              </a>
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Pricing
              </a>
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Features
              </a>
              <a className="hover:text-gray-200 p-1 sm:p-3" href="/download">
                Hirer Terms
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-1 sm:mt-2 sm:p-4">
            <h1 className="text-xl text-gray-500">JOBSEEKER</h1>
            <div className="sm:mt-1 text-small flex flex-col">
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Find a Job
              </a>
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Community
              </a>
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Candidate Terms
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-1 sm:mt-2 sm:p-4">
            <h1 className="text-xl text-gray-500">COMPANY</h1>
            <div className="sm:mt-1 text-small flex flex-col">
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-1 sm:mt-2 sm:p-4">
            <h1 className="text-xl text-gray-500">LEGAL</h1>
            <div className="sm:mt-1 text-small flex flex-col">
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Acceptable Use
              </a>
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Cookie Policy
              </a>
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Privacy Policy
              </a>
              <a className="hover:text-gray-200 p-1 sm:p-3" href="/download">
                Terms of Use
              </a>
              <a className="hover:text-gray-200 p-1 sm:p-3" href="">
                Appropriate Policy{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
