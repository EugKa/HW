import { createCatalogList } from './catalogList.js';

const createController = (root = document.querySelector('body')) => {

    fetch('https://boring-fe.herokuapp.com/advertisments')
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            createCatalogList(root, data)
            console.log(data);
        })
        .catch((e) => {
            console.error(e);
        })
}
export { createController }