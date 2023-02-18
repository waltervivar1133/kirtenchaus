import { links } from "@/constants/myLinks";
import { LinkType, Sublinks } from "@/shared/types";
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [heading, setHeading] = useState<string>("");
  const [subHeading, setSubHeading] = useState<string>("");

  return (
    <>
      {links.map((link: LinkType) => (
        <div>
          <div className="group px-0 text-left md:cursor-pointer">
            <h1
              className="group flex items-center justify-between py-7 pr-5 md:pr-0"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="inline text-xl md:hidden">
                {heading === link.name? <FiChevronUp /> : <FiChevronDown />}
              </span>
              <span className="hidden text-xl group-hover:-mt-0  group-hover:rotate-180 md:mt-0 md:ml-2 md:block">
                <FiChevronDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-1">
                  <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="grid grid-cols-1 gap-10 bg-white p-5">
                    {link.sublinks.map((mysublinks: Sublinks) => (
                      <div>
                        <Link to={mysublinks.link} className="text-lg font-semibold">
                          {mysublinks.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <Link
                    to={slinks.link}
                    className="flex items-center  justify-between py-4 pl-0 pr-5 text-lg md:pr-0 "
                  >
                    {slinks.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
