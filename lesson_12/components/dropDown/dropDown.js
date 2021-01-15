const BTN_TYPES = {
    mainBtn: 'mainBtn',
    teoryBtn: 'teoryBtn',
    startBtn: 'startBtn',

}

const createElement = (
    tagName = 'button',
    type = BTN_TYPES['mainBtn'],
    title = '',
) => {
    const btn = document.createElement(tagName);
    btn.classList.add(`${type}`);
    btn.textContent = title;
    return btn;
}


const onClickHandler = () => {
    const actMenu = document.querySelector('.menu');
    actMenu.classList.toggle('active')
}

const createButton = (
    root,
) => {
    const el = createElement('button');
    el.addEventListener('click', onClickHandler);
    root.appendChild(el);

}

const createDrop = (
    tagName = 'div'
) => {
    const menu = document.createElement(tagName);
    menu.classList.add('menu');
    return menu;
}

const createDropDown = (
    root,
) => {
    const el = createDrop('div');
    const teoBtn = createElement('button', BTN_TYPES['teoryBtn'], 'ТЕОРИЯ')
    const acceptBtn = createElement('button', BTN_TYPES['startBtn'], 'СТАРТ')
    el.appendChild(teoBtn)
    el.appendChild(acceptBtn)
    root.appendChild(el)
}

export { createButton, createDropDown };