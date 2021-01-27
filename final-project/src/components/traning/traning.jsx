import React from 'react';
import '../../styles/traning.scss'
import '../../styles/grid.scss'
import { TraningItem } from './traning-item'

export class Traning extends React.Component {



    render() {

        const { traningData } = this.props;
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