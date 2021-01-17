import React from 'react';
import { Content } from './content'
import '../styles/bace.scss'
import '../styles/app.scss'


export class App extends React.Component {
    state = {
        meals: []
    }


    fetchData() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => this.setState({ meals: data.meals }));
    }

    render() {

        return (
            <div className='recipes-page'>
                <header className="header">
                    <h2 className='header__title'>Feeling hungry?</h2>
                    <h4 className='header__sub-title'>Get a random meal by clicking below</h4>
                    <button
                        className='header__btn'
                        onClick={() => this.fetchData()}>
                        Get Meal 🍔
                    </button>
                </header>
                <Content meals={this.state.meals} />
            </div>
        )
    }
}
