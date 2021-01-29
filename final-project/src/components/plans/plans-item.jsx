import React from 'react';
import '../../styles/plans.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export class PlansItem extends React.Component {
    state = {
        activeList: false
    }
    toggleList = () => {
        this.setState(({ activeList }) => {
            return { activeList: !activeList }
        });
    }
    render() {
        const { title, currency, price, period, clasz, valid, btnTxt, privilege1, privilege2, privilege3, privilege4, privilege5, bestValue } = this.props;

        let clazz = 'plans-card__footer'
        if (this.state.activeList) {
            clazz += ' active'
        }
        return (
            <li className="plans-card__item">
                <ul className="plans-card__header">
                    <li className="plans-card__best-value">
                        {bestValue}
                    </li>
                    <li className="plans-card__title">{title}</li>
                    <li className="plans-card__price">
                        <div className="plans-card__currency">{currency}</div>
                        <div className="plans-card__sum">{price}</div>
                    </li>
                    <li className="plans-card__info">
                        <div className="plans-card__period">{period}</div>
                        <div className="plans-card__class">{clasz}</div>
                        <div className="plans-card__valid">{valid}</div>
                    </li>
                    <a href="http://" className="plans-card__link">{btnTxt}</a>
                </ul>
                <ul className={clazz}>
                    <li className="plans-card__privilege">{privilege1}</li>
                    <li className="plans-card__privilege">{privilege2}</li>
                    <li className="plans-card__privilege">{privilege3}</li>
                    <li className="plans-card__privilege">{privilege4}</li>
                    <li className="plans-card__privilege">{privilege5}</li>
                    <button onClick={this.toggleList} className="plans-card__btn"><ExpandLessIcon /></button>
                </ul>
            </li>
        )
    }
}