import React from 'react';
import '../../styles/winnings.scss';
import '../../styles/grid.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';

export class WinGallery extends React.Component {
    state = {
        isHover: false
    }

    mouseEnter = () => {
        this.setState({ isHover: true })

    }

    mouseLeave = () => {
        this.setState({ isHover: false })

    }

    render() {
        const { image, overlayTitle, overlaySubt, id } = this.props;
        const { isHover } = this.state;

        return (
            <li className="col-4 col-md-4 col-sm-12"
                id={id}
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}>
                <div className="winnings-gallery__link">
                    <img className="winnings-gallery__img" src={image} alt="" />
                    {isHover &&
                        <div className="winnings-gallery__overlay " >
                            <div className="winnings-gallery__text">
                                <div className="winnings-gallery__title">
                                    {overlayTitle}
                                </div>
                                <div className="winnings-gallery__subt">
                                    {overlaySubt}
                                </div>
                            </div>
                            <div className="winnings-gallery__icons">
                                <FavoriteBorderIcon style={{ fontSize: 26 }} className="winnings-gallery__icon winnings-gallery__icon_like" />
                                <ReplyIcon style={{ fontSize: 28 }} className="winnings-gallery__icon winnings-gallery__icon_share" />
                            </div>
                        </div>}

                </div>
            </li >
        )
    }
}