import React from 'react';

import "./footer.css";
import heart from '../../images/heart.svg';
import tg from '../../images/Frame-tg.svg';
import fb from '../../images/Frame-fb.svg';
import vk from '../../images/Frame-vk.svg';
import yt from '../../images/Frame-you.svg';
import ig from '../../images/Frame-instagram.svg';
import starWhite from '../../images/star-white.svg';
import starPink from '../../images/star-pink.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__social-media">
                <p className="footer__title">Слушайте и читайте, где удобно</p>
                <img className="footer__heart" src={heart} alt="heart"/>
                <div>
                    <a href="#" target="_blank" className="bus__icon">
                        <img src={tg} alt="telegram" className="footer__icon"/></a>
                    <a href="#" target="_blank" className="bus__icon">
                        <img src={fb} alt="facebook" className="footer__icon"/></a>
                    <a href="#" target="_blank" className="bus__icon">
                        <img src={vk} alt="vkontakte" className="footer__icon"/></a>
                    <a href="#" target="_blank" className="bus__icon">
                        <img src={yt} alt="youtube" className="footer__icon"/></a>
                    <a href="#" target="_blank" className="bus__icon">
                        <img src={ig} alt="instagram" className="footer__icon"/></a>
                </div>
            </section>
            <section className="footer__subscribe">
                <img src={starWhite} alt="star white" className="footer__star"/>
                <div className="footer__container">
                <p className="footer__subtitle">Подпишитесь на уведомления < br/>о выходе новых материалов</p>

                <div className="footer__form">
                    <input type="email" className="footer__input" placeholder="Введите ваш e-mail"/>
                    <button type="submit" className="footer__btn">Подписаться</button>
                </div>
                </div>
                <img src={starPink} alt="star white" className="footer__star"/>


            </section>
        </footer>
    );
};

export default Footer;