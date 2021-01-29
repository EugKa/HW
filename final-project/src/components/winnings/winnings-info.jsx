import React from 'react';
import '../../styles/winnings.scss';
import '../../styles/grid.scss';

export class WinInfo extends React.Component {
    render() {
        const { title, subt } = this.props;
        return (
            <li className="winnings-info__stats col-2 col-lg-5 col-md-5 col-sm-5">
                <h1 className="winnings-info__stats-title">{title}</h1>
                <div className="winnings-info__stats-subt">{subt}</div>
            </li>
        )
    }
}

// 