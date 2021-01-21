import React from 'react';
import '../styles/winnings.scss';
import '../styles/grid.scss';
export class Winnings extends React.Component {
    render() {
        return (
            <div className="winnings">
                <div className="winnings-info">
                    <img className="winnings-info__img" src="https://static.wixstatic.com/media/ff6bf6_dc039a9d5c534376a81089cfb818acb9.jpg/v1/fill/w_982,h_600,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_dc039a9d5c534376a81089cfb818acb9.webp" alt="" />
                    <div className="winnings-info__content">
                        <h1 className="winnings-info__title">WINNINGS</h1>
                        <div className="winnings-info__container grid">
                            <div className="winnings-info__stats col-2 col-lg-5 col-md-5 col-sm-6">
                                <h1 className="winnings-info__stats-title">15</h1>
                                <div className="winnings-info__stats-subt">15 YEARS OF BOXING EXPERIENCE</div>
                            </div>
                            <div className="winnings-info__stats col-2 col-lg-5 col-md-5 col-sm-6">
                                <h1 className="winnings-info__stats-title">3</h1>
                                <div className="winnings-info__stats-subt">3 TIMES WBA INTERCONTINENTAL CRUISERWEIGHT</div>
                            </div>
                            <div className="winnings-info__stats col-2 col-lg-5 col-md-5 col-sm-6">
                                <h1 className="winnings-info__stats-title">4</h1>
                                <div className="winnings-info__stats-subt">4 TIMES WBC INTERCONTINENTAL CRUISERWEIGHT</div>
                            </div>
                            <div className="winnings-info__stats col-2 col-lg-5 col-md-5 col-sm-6">
                                <h1 className="winnings-info__stats-title">2</h1>
                                <div className="winnings-info__stats-subt">2 TIMES IBF INTERCONTINENTAL CRUISERWEIGHT</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="winnings-start">
                    <div className="winnings-start__conteiner">
                        <h1 className="winnings-start__title">START TRAINING TODAY</h1>
                        <a className="winnings-start__link" href="http://">Book a Session</a>
                    </div>
                </div>

                <div className="winnings-gallery">
                    <div className="winnings-gallery__links grid">
                        <div className="col-4 col-md-4 col-sm-12">
                            <a href="http://">
                                <img className="winnings-gallery__img" src="https://static.wixstatic.com/media/84770f_ea85fd5bfc064ad19d6e9385958fe6d7~mv2.jpg/v1/fill/w_363,h_205,fp_0.78_0.27,q_90/84770f_ea85fd5bfc064ad19d6e9385958fe6d7~mv2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-4 col-md-4 col-sm-12">
                            <a href="http://">
                                <img className="winnings-gallery__img" src="https://static.wixstatic.com/media/84770f_406382b889904549b0a1e4453533e3d7~mv2.jpg/v1/fill/w_364,h_205,fp_0.50_0.50,q_90/84770f_406382b889904549b0a1e4453533e3d7~mv2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-4 col-md-4 col-sm-12">
                            <a href="http://">
                                <img className="winnings-gallery__img" src="https://static.wixstatic.com/media/84770f_e1939662fded4b80b4c63462494cf533~mv2.jpg/v1/fill/w_363,h_205,fp_0.59_0.30,q_90/84770f_e1939662fded4b80b4c63462494cf533~mv2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-4 col-md-4 col-sm-12">
                            <a href="http://">
                                <img className="winnings-gallery__img" src="https://static.wixstatic.com/media/84770f_92f0f39d1f7141c0b6e7429c66369770~mv2.jpg/v1/fill/w_363,h_205,fp_0.50_0.50,q_90/84770f_92f0f39d1f7141c0b6e7429c66369770~mv2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-4 col-md-4 col-sm-12">
                            <a href="http://">
                                <img className="winnings-gallery__img" src="https://static.wixstatic.com/media/84770f_c40bda0193a3419a94962d23757d702e~mv2.jpg/v1/fill/w_364,h_205,fp_0.50_0.50,q_90/84770f_c40bda0193a3419a94962d23757d702e~mv2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-4 col-md-4 col-sm-12">
                            <a href="http://">
                                <img className="winnings-gallery__img" src="https://static.wixstatic.com/media/84770f_6bbbe0015dfc43df97a1f6b094fbf7e0~mv2.jpg/v1/fill/w_363,h_205,fp_0.50_0.50,q_90/84770f_6bbbe0015dfc43df97a1f6b094fbf7e0~mv2.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}