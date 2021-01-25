import React from 'react';
import '../../styles/plans.scss'
import { PlansItem } from './plans-item'
export class Plans extends React.Component {
    render() {
        const { plansData } = this.props;
        console.log(plansData);
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