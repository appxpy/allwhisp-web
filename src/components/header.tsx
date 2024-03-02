import React from "react";
import { Logo } from "./nav";
import {Secret} from "./secret.tsx";

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-10 top-0 text-primary">
      <div className="flex justify-between items-center px-6 pt-6 pb-0 xs:landscape:px-12">
        <div className="flex items-center">
          <a href="https://allwhisp.me">
            <Logo size={32} />
          </a>
        </div>
        <div className="flex flex-row gap-2">
          <Secret/>
          <a
              className="flex items-center gap-1 group cursor-pointer"
              href={"https://allwhisp.me"}
              target="_blank"
          >
          <span
              className="m-0 p-0 text-primary group-hover:opacity-60 text-base font-medium leading-4 flex items-center no-underline lowercase select-none transition-opacity duration-300">
            download cv
          </span>
            <div className="flex justify-center items-center w-12 h-12">
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 stroke-primary stroke-[.5] group-hover:fill-transparent group-hover:opacity-70 fill-primary transition-all duration-300"
              >
                <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
