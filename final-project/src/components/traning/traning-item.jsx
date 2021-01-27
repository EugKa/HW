import React from 'react';
import '../../styles/traning.scss'
import '../../styles/grid.scss'
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
export class TraningItem extends React.Component {
    state = {
        isActive: false
    }
    mouseEnter = () => {
        this.setState({ isActive: true })

    }

    mouseLeave = () => {
        this.setState({ isActive: false })

    }
    render() {
        let clazz = 'traning-type'
        if (this.state.isActive) {
            clazz += ' active'
        }
        const { image, title, sircl, id } = this.props;
        return (
            <li className="col-6 col-md-6 col-sm-12" id={id}>
                <div className={clazz}
                    onMouseEnter={() => this.mouseEnter()}
                    onMouseLeave={() => this.mouseLeave()}>
                    <img className="traning-type__img" src={image} alt="" />
                    <div className="traning-type__content">
                        <Link className="traning-type__link" to="/book" >
                            <h1 className="traning-type__title">{title}</h1>
                        </Link>
                        <Link className="traning-type__link" to="/book" >
                            <img className="traning-type__sircl" src={sircl} alt="" />
                        </Link>


                    </div>
                    <ArrowForwardIosIcon className="traning-type__icon traning-type__icon_left" />
                    <ArrowBackIosIcon className="traning-type__icon traning-type__icon_right" />

                </div>
            </li>
        )
    }
}

