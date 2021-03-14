import React from 'react';
import './traning.scss'
import '../app/grid.scss'
import { TraningItem } from './traning-item'
import { DataService } from '../DataService/DataService';

export class Traning extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            traningData: []
        }
        this.dataService = new DataService()
        this.getTraningsData()
    }
    
    
    getTraningsData (){
        this.dataService.getTranings().then((traningData) => {
             this.setState({ traningData })
        })
    }

    render() {
        const { traningData } = this.state;
        return (
            <div className="traning">
                <ul className="grid">
                    {traningData.map(item => {
                        return <TraningItem {...item} key={item.id} />
                    })}
                </ul>
            </div>
        )
    }
}