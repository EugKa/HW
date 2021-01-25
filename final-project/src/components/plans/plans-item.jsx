import React from 'react';
import '../../styles/plans.scss';

export class PlansItem extends React.Component {
    render() {
        const { title, currency, price, period, clasz, valid, btnTxt, privilege1, privilege2, privilege3, privilege4, privilege5, bestValue } = this.props;
        return (
            <li className="plans-card__item">

                <div className="plans-card__header">
                    <div className="plans-card__best-value">
                        {bestValue}
                    </div>
                    <div className="plans-card__title">{title}</div>
                    <div className="plans-card__price">
                        <div className="plans-card__currency">{currency}</div>
                        <div className="plans-card__sum">{price}</div>
                    </div>
                    <div className="plans-card__info">
                        <div className="plans-card__period">{period}</div>
                        <div className="plans-card__class">{clasz}</div>
                        <div className="plans-card__valid">{valid}</div>
                    </div>
                    <a href="http://" className="plans-card__link">{btnTxt}</a>
                </div>
                <div className="plans-card__footer">
                    <div className="plans-card__privilege">{privilege1}</div>
                    <div className="plans-card__privilege">{privilege2}</div>
                    <div className="plans-card__privilege">{privilege3}</div>
                    <div className="plans-card__privilege">{privilege4}</div>
                    <div className="plans-card__privilege">{privilege5}</div>
                </div>
            </li>
        )
    }
}