export class Pagination {
    constructor(root, totalPages, currentPage, onChange) {
        this.root = root;
        this.totalPages = totalPages;
        this.onChange = onChange;
        this.currentPage = currentPage;


    }

    render() {
        const exxistingDomEl = this.root.querySelector('.pagination')
        this.domEl = exxistingDomEl ? exxistingDomEl : document.createElement('div');
        this.domEl.innerHTML = '';
        this.domEl.classList.add('pagination')
        for (let i = 1; i <= this.totalPages; i++) {
            const button = document.createElement('button')
            button.textContent = i;
            if (i === this.currentPage) {
                button.style.backgroundColor = 'red';
            }
            button.addEventListener('click', () => {
                this.onChange(i)
            })

            this.domEl.append(button)
        }
        this.root.append(this.domEl)
    }
}