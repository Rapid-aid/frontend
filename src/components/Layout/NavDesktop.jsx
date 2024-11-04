import React, { useState } from 'react';
import { AccountCircleOutlined, ExpandMore, ExpandLess, LogoutOutlined, SettingsOutlined } from '@mui/icons-material'

function NavDesktop() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
      };

    return (
        <>
        <div className="flex items-center space-x-1">
            <nav className="relative sm:flex sm:space-x-1 font-medium">
                <div className="sm:inline-flex sm:space-x-1 hidden">
                    <a href="#" className="hover:bg-gray-200 px-4 py-3 rounded-lg hover:text-black duration-200">Mapa</a>
                    <a href="#" className="hover:bg-gray-200 px-4 py-3 rounded-lg hover:text-black duration-200">Zgłoszenia</a>
                    <a href="#" className="hover:bg-gray-200 px-4 py-3 rounded-lg hover:text-black duration-200">Statystyki</a>
                </div>
                <div 
                    className="sm:inline-flex items-center space-x-2 hidden hover:bg-gray-200 px-4 py-2 rounded-lg hover:text-black duration-200 cursor-pointer"
                    onClick={toggleVisibility}
                >
                    <img src="../test-avatar.png" alt="" className="rounded-full size-8" />
                    <span>Profil</span>
                    {isVisible ? <ExpandLess /> : <ExpandMore />} 
                </div>
                {isVisible && (
                    <div className="top-[60px] right-0 z-[1] absolute bg-white shadow-xl p-2 rounded-lg profileDropdown">
                    <ul>
                        <li className="flex items-center gap-2 hover:bg-neutral-200 px-3 p-2 rounded-lg hover:text-black cursor-pointer"><AccountCircleOutlined />Mój profil</li>
                        <li className="flex items-center gap-2 hover:bg-neutral-200 px-3 p-2 rounded-lg hover:text-black cursor-pointer"><SettingsOutlined />Ustawienia</li>
                        <li className="flex items-center gap-2 hover:bg-neutral-200 px-3 p-2 rounded-lg hover:text-black cursor-pointer"><LogoutOutlined />Wyloguj</li>
                    </ul>
                </div>
                )}
                
            </nav>
        </div>
        </>
    )
}

export default NavDesktop