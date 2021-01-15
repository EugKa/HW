const createCatalog = ({ id, img, title, description }) => {
    return `
    <div class="col-3 col-md-4 col-sm-6 col-xs-12">
        <div class="card" id="${id}">
            <div class="card__pic">
                <img class="card__img" src="${img}" alt="">
            </div>
            <div class="card__content">
                <div class="card__title">${title}</div>
                <div class="card__descpiption">${description}</div>
            </div>
        </div>
    </div>
`;
}

export { createCatalog }