import { createCatalog } from './catalog.js';

const createCatalogList = (root, data) => {
    const container = document.createElement('div');
    container.classList.add('grid')
    let catalogHtml = ''
    data.forEach((data) => {
        const html = createCatalog(data);
        catalogHtml += html;
    })
    container.insertAdjacentHTML('beforeend', catalogHtml)
    root.append(container)
}

export { createCatalogList };
