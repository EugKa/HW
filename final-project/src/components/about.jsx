import React from 'react';
import '../styles/about.scss';
export class About extends React.Component {
    render() {
        return (
            <div className="about ">
                <img className="about__img" src="https://static.wixstatic.com/media/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg/v1/fill/w_1349,h_940,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_e3b198785f54487cb8e233104d2bc894.webp" alt="" />
                <div className="about__content ">
                    <h1 className="about__title">MEET THE COACH</h1>
                    <div className="about__txt">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    </div>
                    <div className="about__txt">
                        This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                    </div>
                    <div className="about__social">
                        <a className="about__link" href="https://www.facebook.com/wix">
                            <img className="about__logo" src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_43,h_43,al_c,q_85,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp" alt="" />
                        </a>
                        <a className="about__link" href="https://twitter.com/wix">
                            <img className="about__logo" src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_43,h_43,al_c,q_85,usm_0.66_1.00_0.01/01ab6619093f45388d66736ec22e5885.webp" alt="" />
                        </a>
                        <a className="about__link" href="https://www.instagram.com/wix/">
                            <img className="about__logo" src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_43,h_43,al_c,q_85,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
