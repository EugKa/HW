import React from 'react';
import '../styles/traning.scss'
import '../styles/grid.scss'
export class Traning extends React.Component {
    render() {
        return (
            <div className="traning">
                <div className="grid">
                    <div className="traning__type traning__type-beginners col-6 col-md-6 col-sm-12">
                        <img className="traning__img" src="https://static.wixstatic.com/media/ff6bf6_ad881f0e977347c8912530d98da3f632.jpg/v1/fill/w_640,h_452,al_c,q_80,usm_0.66_1.00_0.01/ff6bf6_ad881f0e977347c8912530d98da3f632.webp" alt="" />
                        <div className="traning__content">
                            <a className="traning__link" href="http://">
                                <h1 className="traning__title">BEGINNERS</h1>
                            </a>
                            <a className="traning__link" href="http://">
                                <img className="traning__sircl" src="https://static.wixstatic.com/media/ff6bf6_40e4464af2d14b6097571d81bb91f384~mv2.png/v1/fill/w_51,h_51,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_40e4464af2d14b6097571d81bb91f384~mv2.webp" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="traning__type traning__type-professionals col-6 col-md-6 col-sm-12">
                        <img className="traning__img" src="https://static.wixstatic.com/media/ff6bf6_8945ebc2d7b04e76a872928617266cf5.jpg/v1/fill/w_640,h_452,al_c,q_80,usm_0.66_1.00_0.01/ff6bf6_8945ebc2d7b04e76a872928617266cf5.webp" alt="" />
                        <div className="traning__content">
                            <a className="traning__link" href="http://">
                                <h1 className="traning__title">PROFESSIONALS</h1>
                            </a>
                            <a className="traning__link" href="http://">
                                <img className="traning__sircl" src="https://static.wixstatic.com/media/ff6bf6_40e4464af2d14b6097571d81bb91f384~mv2.png/v1/fill/w_51,h_51,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_40e4464af2d14b6097571d81bb91f384~mv2.webp" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}