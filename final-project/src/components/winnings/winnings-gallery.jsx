import React from 'react';
import '../../styles/winnings.scss';
import '../../styles/grid.scss';

export class WinGallery extends React.Component {
    state = {
        isHover: false
    }

    mouseEnter = () => {
        this.setState({ isHover: true })
        console.log('enter');
    }

    mouseLeave = () => {
        this.setState({ isHover: false })
        console.log('leave');
    }

    render() {
        const { image, overlayTitle, overlaySubt, id } = this.props;
        const { isHover } = this.state;

        return (
            <li className="col-4 col-md-4 col-sm-12"
                id={id}
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}>
                <a className="winnings-gallery__link" href="http://">
                    <img className="winnings-gallery__img" src={image} alt="" />
                    {isHover && <div className="winnings-gallery__overlay " >
                        <div className="winnings-gallery__title">
                            {overlayTitle}
                        </div>
                        <div className="winnings-gallery__subt">
                            {overlaySubt}
                        </div>
                    </div>}

                </a>
            </li >
        )
    }
}