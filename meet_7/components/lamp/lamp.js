
const createElement = (
    tagName = 'button',
    type = 'red',
    interval,
    size,
) => {

    const btn = document.createElement(tagName);
    btn.classList.add('btn');
    btn.style.width = `${size}px`
    btn.style.height = `${size}px`

    setInterval(() => {
        btn.classList.toggle(`btn_${type}`)
    }, interval);

    return btn;
}

const createButton = (
    root,
    type = 'red',
    interval,
    size,
) => {

    const el = createElement('button', type, interval, size);
    root.appendChild(el);
}

export { createButton };
