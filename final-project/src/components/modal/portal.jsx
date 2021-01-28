import React from 'react';
import ReactDOM from 'react-dom'
import '../../styles/modal.scss'
const modalRoot = document.getElementById('modal');

export class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.classList.add('modal-window')
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}