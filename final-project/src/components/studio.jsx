import React from 'react'
import '../styles/studio.scss'
export class Studio extends React.Component {
    render() {
        return (
            <div className="studio">
                <img className="studio__img" src="https://static.wixstatic.com/media/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.jpg/v1/fill/w_1253,h_783,al_c,q_85/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.webp" alt="" />
                <div className="studio__content">
                    <div className="studio__title">
                        <h1>THE STUDIO</h1>
                        <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</div>
                    </div>
                    <div className="studio__address">
                        <div>ADDRESS</div>
                        <div>
                            500 TERRY FRANCOIS ST.
                            SF, CA 94158
                        </div>
                    </div>
                    <div className="studio__hours">
                        <div>HOURS</div>
                        <div>
                            MONDAY - FRIDAY
                            6:30AM - 7:00PM
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}