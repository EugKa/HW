import React from 'react';
import '../../styles/winnings.scss';
import '../../styles/grid.scss';

export class WinGallery extends React.Component {


    render() {
        const { image, overlayTitle, overlaySubt, mouseEnter, mouseLeave, opacity, id } = this.props;
        console.log(opacity, "opas");

        return (
            <li className="col-4 col-md-4 col-sm-12" id={id}>
                <a
                    className="winnings-gallery__link"
                    href="http://">
                    <img className="winnings-gallery__img" src={image} alt="" />
                    <div className="winnings-gallery__overlay"

                        style={{ opacity: opacity }}
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                    >
                        <div className="winnings-gallery__title">
                            {overlayTitle}
                        </div>
                        <div className="winnings-gallery__subt">
                            {overlaySubt}
                        </div>
                    </div>
                </a>
            </li >
        )
    }
}