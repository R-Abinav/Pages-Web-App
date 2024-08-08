import React from "react";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Header(){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <header>
            <div className="header-h1">
                <h1>
                    <MenuBookIcon fontSize="large" />
                    Pages
                </h1>
            </div>
            <div className="header-h4">
                <h4>
                    Made by Invictus
                    <p><CopyrightIcon fontSize="medium"/> {year}</p>
                </h4>
            </div>
        </header>
    );
}

export default Header;
