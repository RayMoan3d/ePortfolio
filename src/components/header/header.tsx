
import {FaBars, FaTimes} from "react-icons/fa";

export default function Header(){


    return(

            <div className="header">
                <div className="header-logo">
                    Raymond
                </div>
                <div>
                    <nav className="header-routes-container">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Contacts</a>
                        </nav>
                </div>
            </div>

    )
}