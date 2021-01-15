import { FilmCard } from './filmCard.js';

class FilmCardList {
    constructor(root) {
        this.root = root;
        this.url = 'https://boring-fe.herokuapp.com/movies'
    }

    createData() {
        fetch(this.url)
            .then((resp) => resp.json())
            .then((data) => {
                this.data = data;
                this.render();
            });
    }

    render() {
        this.domEl = document.createElement('div');
        this.domEl.classList.add('grid');
        this.data.forEach((data) => {
            const createGrid = document.createElement('div');
            createGrid.classList.add('col-4', 'col-md-4', 'col-sm-6', 'col-xs-12');
            const item = new FilmCard(createGrid, data);
            item.render();
            this.domEl.append(createGrid);
        });
        this.root.append(this.domEl)
    }
}

export { FilmCardList };