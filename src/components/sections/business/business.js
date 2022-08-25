import React from 'react';

import './business.css';
import vs from '../../../images/vs.png';
import rocket from '../../../images/rocket.png';
import {Button} from "bootstrap";
import vk from '../../../images/vk.svg';
import youtube from '../../../images/youtube.svg';
import yaMuz from '../../../images/ya-muz.svg';
import spotify from '../../../images/spotify.svg';
import socMed from '../../../images/socmed.svg';
import girl from '../../../images/girl.png';
import seo from '../../../images/seo.png';
import man from '../../../images/man.png';


const Business = () => {
    return (
        <div className="bus__container">
            <div className="bus__first-content">
                <div className="bus__title">Бизнес-шоу:</div>
                <img className="bus__img-icon" src={vs} alt="marketing icon"/>
            </div>
            <div className="bus__general">
                <div className="bus__second-content">
                    <div className="bus__description">
                        <p className="bus__text">Бизнес-шоу, в котором общаемся с экспертами digital-маркетинга и
                            руководителями продаж о том, как совместно достигать
                            потрясающих результатов. </p>
                        <button type="button" className="btn bus__btn">Подписаться</button>
                        <img src={rocket} alt="rocket icon" className="bus__rocket"/>
                    </div>
                    <div className="bus__low-content">
                        <div className="bus__social-media">
                            <p className="bus__social-media-text">Слушайте нас, где удобно</p>
                            <div className="bus__social-media-icons">
                                <a href="#" target="_blank" className="bus__icon">
                                    <img src={yaMuz} alt="yandex music"/></a>
                                <a href="#" target="_blank" className="bus__icon">
                                    <img src={spotify} alt="spotify" className="bus__icon"/></a>
                                <a href="#" target="_blank" className="bus__icon">
                                    <img src={socMed} alt="social media" className="bus__icon"/></a>
                                <a href="#" target="_blank" className="bus__icon">
                                    <img src={vk} alt="vkontakte" className="bus__icon"/></a>
                                <a href="#" target="_blank" className="bus__icon">
                                    <img src={youtube} alt="youtube" className="bus__icon"/></a>
                            </div>
                        </div>
                        <img src={girl} className="bus__photo" alt="girl"/>
                    </div>
                </div>
                <div className="bus__third-content">
                    <img src={seo} alt="seo" className="bus__photo-seo"/>
                    <div className="image-group">
                        <img src={man} alt="man" className="image-man"/>
                        <p className="fst-italic text-decoration-underline new-release">новый выпуск</p>
                        <iframe className="bus__video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;