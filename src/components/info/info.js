import React from 'react';


import infoPng from '../../images/info.png';
import './info.css'

const Info = () => {
    return (
        <section className="info">
            <h1 className="info__title">More leads, more quality leads, <br /> more conversations and a productive <br />team for rapid growth</h1>
            <p className="info__subtitle">Dashly is a conversational platform for online business. <br /> Try it for free. Install in 7 minutes.</p>
            <div className="info__btn-container">
                <button type="button" className="btn me-2 info__btn">Try on your website for free</button>
                <button type="button" className="btn info__btn-outline">Book a demo</button>
            </div>
            <img className="info__img" src={infoPng} alt="info" />
        </section>
    );
};

export default Info;