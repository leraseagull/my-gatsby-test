import React from 'react';
import Info from "../info/info";
import Business from "../sections/business/business";
import Releases from "../sections/releases/releases";
import "./main.css";

const Main = () => {
    return (
        <div className="content" >
            <Business />
            <Releases />
        </div>
    );
};

export default Main;