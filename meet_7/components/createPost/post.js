// const createElement = (
//     tagName = 'div',
//     text = '',
//     title = '',


// ) => {
//     const post = document.createElement(tagName);


//     post.textContent = title;
//     post.textContent = text;
//     return post;
// }


const createPost = (root, title, text) => {

    const elTitle = document.createElement('h1', title);
    elTitle.classList.add('title')
    elTitle.textContent = title;
    root.appendChild(elTitle);

    const elText = document.createElement('div', text);
    elText.classList.add('text')
    elText.textContent = text;
    root.appendChild(elText);

    const onClickHandler = () => {
        elText.classList.toggle('active')

    }

    elTitle.addEventListener('click', onClickHandler)
}
export { createPost }