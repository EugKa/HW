import React from 'react';
import '../../styles/winnings.scss';
import '../../styles/grid.scss';
import { Link } from "react-router-dom";
import { WinInfo } from './winnings-info'
import { WinGallery } from './winnings-gallery'

export class Winnings extends React.Component {

    render() {
        const { winData } = this.props;
        return (
            <div className="winnings">
                <div className="winnings-info">
                    <img className="winnings-info__img" src="https://static.wixstatic.com/media/ff6bf6_dc039a9d5c534376a81089cfb818acb9.jpg/v1/fill/w_982,h_600,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_dc039a9d5c534376a81089cfb818acb9.webp" alt="" />
                    <div className="winnings-info__content">
                        <h1 className="winnings-info__title">WINNINGS</h1>
                        <ul className="winnings-info__container grid">
                            {winData.winInfo.map(item => {
                                return <WinInfo
                                    {...item}
                                    key={item.id}
                                />
                            })}
                        </ul>
                    </div>
                </div>
                <div className="winnings-start">
                    <div className="winnings-start__conteiner">
                        <h1 className="winnings-start__title">START TRAINING TODAY</h1>
                        <Link className="winnings-start__link" to="/book" >Book a Session</Link>
                    </div>
                </div>
                <div className="winnings-gallery">
                    <ul className="winnings-gallery__links grid">
                        {winData.winGallery.map(pic => {
                            return <WinGallery
                                {...pic}
                                key={pic.id}

                            />
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}