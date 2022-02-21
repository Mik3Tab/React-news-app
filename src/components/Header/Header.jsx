import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header sticky">
<section class="section">
    <ul class="menu">
      <li class="menu__item">
        <a class="menu__link hover9"><span class="menu__label hover9__label"> <Link to="/Home">Home</Link></span></a>
      </li>	
      <li class="menu__item">
        <a class="menu__link hover9"><span class="menu__label hover9__label"> <Link to="/form">Form</Link></span></a>
      </li>	
      <li class="menu__item">
        <a class="menu__link hover9"><span class="menu__label hover9__label"><Link to="/news">News</Link></span></a>
      </li>	
    </ul>
  </section>
    </div>
  );
};

export default Header;