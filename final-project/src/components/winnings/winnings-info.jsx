import React from 'react';
import './winnings.scss';
import '../app/grid.scss'
import { DataService } from '../DataService/DataService';
export class WinInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {winInfoData:[]}
        this.dataService = new DataService()
        this.getWinInfoData()
    }

    getWinInfoData() {
        this.dataService.getWinInfo().then((winInfoData) => {
            this.setState({ winInfoData })
        })
    }
    render() {
        const { winInfoData } = this.state;
        return (
            <ul className="winnings-info__container grid">
                {winInfoData.map(item => (
                    <li key={item.id} className="winnings-info__stats col-2 col-lg-5 col-md-5 col-sm-5">
                        <h1 className="winnings-info__stats-title">{item.title}</h1>
                        <div className="winnings-info__stats-subt">{item.subt}</div>
                    </li>  
                ))}                      
            </ul>
  
        )
    }
}

// 