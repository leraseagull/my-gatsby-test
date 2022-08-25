import React from 'react';

import "./releases.css";
import users from "../../../images/users.svg";
import tg from "../../../images/telegram.svg";
import fb from "../../../images/facebook.svg";
import vk from "../../../images/vkontakte.svg";
import ig from "../../../images/insta.svg";

const Releases = () => {
    return (
        <div className="rel__container">
            <p className="rel__title">Выпуски</p>
            <p className="rel__subtitle">Подкаст, в котором обсуждаем, как прекратить войну маркетинга и продаж.<br/>
                Смотрите интервью с экспертами digital-маркетинга и руководителями продаж.<br/>
                Рассказываем реальные истории и практики работы этих двух направлений.</p>
            <div className="rel__users-content">
                <img src={users} alt="icon" className="rel__icon"/>
                <p className="rel__subtitle rel__users-text">Для SMO, руководителей Digital-маркетинга, ответственного
                    за привлечения лидов</p>
            </div>
            <div className="rel__video-container">
                <div className="rel__content">
                    <iframe className="rel__video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    <div className="rel__flex-content">
                    <div className="rel__soc-med-container">
                        <p className="rel__social-media-title">Поделиться:</p>
                        <div className="rel__social-media">
                            <a href="#" target="_blank" className="rel__social-media-icon">
                            <img src={tg} alt="telegram" className="rel__img"/>
                            </a>
                            <a href="#" target="_blank" className="rel__social-media-icon">
                            <img src={fb} alt="facebook" className="rel__img"/>
                            </a>
                            <a href="#" target="_blank" className="rel__social-media-icon">
                            <img src={vk} alt="vkontakte" className="rel__img"/>
                            </a>
                            <a href="#" target="_blank" className="rel__social-media-icon">
                            <img src={ig} alt="instagram" className="rel__img"/>
                            </a>
                        </div>
                    </div>
                    <p className="rel__social-media-title">23 минуты</p>
                    </div>
                </div>
                <div className="rel__menu">
                    <div className="rel__wrap">
                        <div className="rel__item">
                            <p className="rel__item-number">12</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">11</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">10</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">9</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">8</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">7</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">6</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">5</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">4</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">3</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">2</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                        <div className="rel__item">
                            <p className="rel__item-number">1</p>
                            <iframe className="rel__item-video" src="https://www.youtube.com/embed/2c6LbMLsRiM"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <p className="rel__item-text">Как построить эффективный отдел продаж</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Releases;