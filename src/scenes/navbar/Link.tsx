import { SelectedPage } from "@/shared/types";
import { Link, useLocation } from "react-router-dom";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const LinkRef = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {currentPath === "/" ? (
        <a
          className={`${
            selectedPage === lowerCasePage ? "font-bold text-secondary-500" : ""
          }
          active:text-white" transition duration-500 hover:text-secondary-400
        `}
          href={`#${lowerCasePage}`}
          onClick={() => setSelectedPage(lowerCasePage)}
        >
          {page}
        </a>
      ) : (
        <Link
          to="/"
          className={`${
            selectedPage === lowerCasePage ? "font-bold text-secondary-500" : ""
          }
        active:text-white" transition duration-500 hover:text-secondary-400
      `}
        >
          {" "}
          {page}
        </Link>
      )}
    </>
  );
};

export default LinkRef;
