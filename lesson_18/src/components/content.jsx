import React from 'react';
import '../styles/content.scss'
import '../styles/grid.scss'

import { Ingredients } from './ingridients';

export class Content extends React.Component {


    render() {
        return (
            <div className="content">{this.props.meals.map(item => {
                const { idMeal, strMeal, strInstructions, strMealThumb, strCategory, strArea, strTags, strYoutube } = item;
                return <div className="grid" key={idMeal}>
                    <div className="wrapper ">
                        <div className=" col-7 col-sm-12">
                            <div className="contnent-cooking">
                                <h2 className="contnent-cooking__name">{strMeal}</h2>
                                <div className="contnent-cooking__instructions">{strInstructions}</div>
                            </div>
                        </div>
                        <div className=" col-3 col-sm-12">
                            <div className="contnent-info">
                                <div className="contnent-info__image">
                                    <img className="contnent-info__img" src={strMealThumb} alt="" />
                                </div>
                                <div className="contnent-info__txt">
                                    <div className="contnent-info__label">
                                        Category:
                                </div>
                                    <div>{strCategory}</div>
                                </div>
                                <div className="contnent-info__txt">
                                    <div className="contnent-info__label">
                                        Area:
                                </div>
                                    <div>{strArea}</div>
                                </div>
                                <div>{strTags ?
                                    <div className="contnent-info__txt">
                                        <div className="contnent-info__label">Tags:</div>
                                        <div>{strTags.split(',').join(', ')}</div>
                                    </div> : ''}
                                </div>
                                <Ingredients ingredients={this.props.meals} />
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        {strYoutube ?
                            <div className="">
                                <h5>Video Recipe</h5>
                                <div className="videoWrapper">
                                    <iframe title="title" className="video__player"
                                        src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}>
                                    </iframe>
                                </div>
                            </div> : ''}
                    </div>
                </div>
            })}</div>
        )
    }
}