class FilmCard {
    constructor(root, data) {
        this.root = root;
        this.data = data;
    }

    render() {
        this.domEl = document.createElement('div');
        this.domEl.classList.add('card')
        this.domEl.id = this.data.id;

        const { title, description, rating, preview } = this.data;
        const desc = description.substr(0, 63) + '...'
        const wrap = `
            <div class="card__pic">
                <img class="card__img" src='${preview.low}' alt="">
            </div>
            <div class="card__lable">SALE</div>
            <div class="card__rating">${rating}</div>
            <div class="card__content">
                <div class="card__title">${title}</div>
                <div class="card__descpiption">
                    ${desc}
                </div>
                <button class="card__btn">Buy!</button>
            </div>
        `;

        this.domEl.innerHTML = wrap;
        this.root.append(this.domEl)
    }
}
export { FilmCard }