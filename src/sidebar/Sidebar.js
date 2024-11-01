import React, { useState } from "react";
import './sidebar.scss';
import { SidebarData } from './SidebarData.js';
import { Link, useLocation } from 'react-router-dom'; // Import Link từ react-router-dom

function Sidebar() {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isHaveNotify, setIsHaveNotify] = useState(true)




    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                {SidebarData.map((val, key) => {
                    const isActive = location.pathname == val.link || activeIndex === key;
                    return (
                        <li className="list-row" key={key}>
                            <Link to={val.link} className={`sidebar-link ${isActive ? 'active' : ''}`}
                                onClick={() => setActiveIndex(key)}
                            >
                                <div className="sidebar-icon">
                                    <img src={val.icon} alt={val.title} />
                                </div>
                                <div className="sidebar-title">
                                    {val.title}
                                    {val.title === "Cập nhật file" && isHaveNotify && (
                                        <span className="notify-dot"></span>
                                    )}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;

