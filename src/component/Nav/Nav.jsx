import * as St from "./Nav.style";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as BusinessIcon } from "../../assets/business-icon.svg";
import { ReactComponent as LikeIcon } from "../../assets/like-icon.svg";
import { ReactComponent as DepressedIcon } from "../../assets/depressed-icon.svg";

const Nav = () => {
  const links = [
    { title: "HOME", link: "/", icon: <HomeIcon /> },
    { title: "검색", link: "/search", icon: <SearchIcon /> },
    { title: "추천", link: "/recommend", icon: <LikeIcon /> },
    { title: "공유해요", link: "/share", icon: <BusinessIcon /> },
    { title: "억울해요", link: "/community", icon: <DepressedIcon /> }
  ];

  return (
    <St.Nav>
      {links.map(item => {
        return (
          <Link to={item.link}>
            <St.Button>
              {item.icon}
              {item.title}
            </St.Button>
          </Link>
        );
      })}
    </St.Nav>
  );
};

export default Nav;
