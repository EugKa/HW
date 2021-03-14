import React from 'react';
import './plans.scss'
import { PlansItem } from './plans-item'
import { DataService } from '../DataService/DataService';
export class Plans extends React.Component {
    constructor(props) {
        super(props)
        this.dataService = new DataService()
        this.state = {
            plansData: [],
        }
        this.getPlansData()
    }

    getPlansData() {
        this.dataService.getPlans().then((plansData) => {
            this.setState({ plansData })
        })
    }
    render() {
        const { plansData } = this.state;
        return (
            <div className="plans">
                <h1 className="plans__title">PLANS & PRICING</h1>
                <div className="plans__wrapper">
                    <ul className="plans-card">
                        {plansData.map(item => {
                            return <PlansItem {...item} key={item.id} />
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}