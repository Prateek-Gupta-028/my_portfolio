import React,{Component} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/portfolio_logo.png';

const Header = () => {

    const[brandName, setBrandName] = useState("PORTFOLIO");
    const[menuLinks, setMenuLinks] = useState([
        {
            title: "Home",
            link: "/",
            id: 1,
        },
        {
            title: "About",
            link: "/#about",
            id: 2,
        },
        {
            title: "Skills",
            link: "/#exp",
            id: 3,
        },
        {
            title: "Technologies",
            link: "/#serv",
            id: 4,
        },
        {
            title: "Certifications",
            link: "/Certificates",
            id: 5,
        },
        {
            title: "Contact",
            link: "/Contact",
            id: 6,
        },
    ])
    const[actionButton, setActionButton] = useState({
        title: "Hire-Me",
        link: "/Contact",
    });

    return (
        <>
            <div className="h-20  border main flex justify-between items-center px-16 bg-gray-100">
                <div>
                    {/* brand logo */}
                    <img className="w-50 h-20" src={logo} alt="" />
                    {/* <h1 className="text-2xl font-bold">{brandName}</h1> */}
                </div>
                <div className="space-x-6">
                    {/* menu links */}
                    {menuLinks.map((link) => (
                        <a key={link.id} href={link.link} className="hover:text-orange-600">
                            {link.title}
                        </a>
                    ))}
                </div>
                <div>{/* button */}
                        {/* <Link className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl hover:text-white" href={actionButton.link}>
                            {actionButton.title}
                        </Link> */}
                    <Link to={actionButton.link} className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl hover:text-white">
                        {actionButton.title}
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Header;