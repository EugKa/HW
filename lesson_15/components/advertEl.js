
export class AdevertEl {
    /**
       * @param {HTMLElement} root
       * @param {{title: string, description: string; img: string; id: number;note: string}} data
       */
    constructor(root, data, onDelete) {
        this.root = root;
        this.data = data;
        this.onDelete = onDelete;
        this.render();
    }

    render() {
        this.advertEl = document.createElement('div');
        this.advertEl.classList.add('element');
        this.advertEl.id = this.data.id;
        const { title, description, note, img } = this.data;

        this.advertEl.innerHTML = `
            <h1 class="element__title">${title}</h1>
            <div class="element__descr">${description}</div>
            <div class="element__note">${note}</div>
            <img src="${img}" class="element__image" />
        `;

        const button = document.createElement('button')
        button.textContent = 'Delete'
        button.addEventListener('click', () => {
            this.onDelete(this.data.id)
        })
        this.advertEl.append(button)
        this.root.append(this.advertEl)

    }
}