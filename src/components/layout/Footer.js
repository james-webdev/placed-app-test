import React from "react";

const Footer = () => (
  <footer className="bg-gray-400 pb-10 text-white">
    <div className="lg:flex lg:justify-between">
      <div className="sm:flex sm:flex-col">
        <div className="flex p-4 ml-2 pl-5 pt-5 flex-col sm:flex sm:flex-row sm:justify-left sm:items-center">
          <div className="flex flex-col mt-1 sm:mt-2 sm:p-4">
            <h1 className="text-xl">Resources</h1>
            {/* <div className="sm:mt-1 text-small flex flex-col">
              <a
                className="footergrey hover:text-gray-200"
                href=""
              >
                Visit our online store
              </a>
              <a
                className="footergrey hover:text-gray-200"
                href=""
              >
                Apple Mac Leasing
              </a>
              <a
                className="footergrey hover:text-gray-200"
                href=""
              >
                Microsoft Surface Leasing
              </a>
              <a className="footergrey hover:text-gray-200" href="/download">
                Download
              </a>
              <a className="footergrey hover:text-gray-200" href="">
                Contact
              </a>
            </div> */}
          </div>
          <div className="flex mt-6 sm:mb-16 sm:ml-7 flex-col sm:p-4">
            <h1 className="text-xl">Legal</h1>
            {/* <div className="sm:mt-1 text-small flex flex-col">
              <a className="footergrey hover:text-gray-200" href="">
                Terms and Conditions
              </a>
              <a className="footergrey hover:text-gray-200" href="">
                Terms of Service
              </a>
              <a className="footergrey hover:text-gray-200" href="">
                Privacy Statement
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
