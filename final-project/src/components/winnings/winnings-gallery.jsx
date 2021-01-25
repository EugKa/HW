import React from 'react';
import '../../styles/winnings.scss';
import '../../styles/grid.scss';

export class WinGallery extends React.Component {
    render() {
        const { image } = this.props;
        return (
            <li className="col-4 col-md-4 col-sm-12">
                <a href="http://">
                    <img className="winnings-gallery__img" src={image} alt="" />
                </a>
            </li>
        )
    }
}