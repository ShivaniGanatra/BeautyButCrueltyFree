import "./Nav.scss";

import NavButtons from "./../../components/NavButtons/NavButtons";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import mailIcon from "./../../assets/images/email-1-svgrepo-com.svg";
import Key from "./../../assets/images/key.svg";
import Keys from "../../components/Keys/Keys";
import PopUp from "../../components/PopUp/PopUp";


const Nav = ({ }) => {
    const [showNav, setShowNav] = useState(false);
    
    const toggleNav = () => {
        setShowNav(!showNav);
    };

    const [showKeys, setShowKeys] = useState(false);
    const toggleKeys = () => {
        setShowKeys(!showKeys);
    };

    const [user, setUser] = useState({
        Name: "Gorgeous Girlie!",
        email: "",
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const Name = event.currentTarget.Name.value;
        const email = event.currentTarget.email.value;

        if (Name && email) {
            event.currentTarget.reset();
            setUser({ Name, email });
        }
    };

    return (
        <nav className="nav">
            <div className="nav__icons">
                <button className="nav__button" onClick={toggleKeys}>
                    <img className="nav__icon" src={Key} alt="key icon" />
                </button>
                <button className="nav__button" onClick={toggleNav}>
                    <img className="nav__icon" src={mailIcon} alt="mail icon" />
                </button>
            </div>


            <h1 className="nav__heading">Beauty but cruelty free</h1>
            <div className="nav__center">
                {showNav && (
                    <PopUp toggleNav= {toggleNav} user={user} onSubmit ={onSubmit}/>
                )}
            </div>

            <div className="key">{showKeys && <Keys toggleKeys={toggleKeys}/>}</div>

            <div>
                <Link to="/">
                    <NavButtons label="Filter by type" variant="primary" />
                </Link>

                <Link to="/brands">
                    <NavButtons label="Filter by brand" variant="secondary" />
                </Link>

                <Link to="/faves">
                    <NavButtons label="Favourites" variant="primary" />
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
