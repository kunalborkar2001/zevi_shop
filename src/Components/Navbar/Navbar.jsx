import Searchbar from "../SearchBar/Searchbar"
import "./Navbar.scss"

const Navbar = ({ handleDisplay }) => {
  return (
      <div className="navbar">
          <div></div>
          <Searchbar handleDisplay={handleDisplay} />
          <img src="https://assets-global.website-files.com/622778f0460ef2a7b46117c1/632c38d0a82442dc8dfe0f53_zevi-logo-_2_.webp" alt="kunalborkar2001@gmail.com" />
      </div>
  );
};

export default Navbar