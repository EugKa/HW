class Post {
    constructor(root, data) {
        this.root = root;
        this.data = data;

    }

    render() {
        this.domEl = document.createElement('div')
        this.domEl.classList.add('post')
        this.domEl.id = this.data.id
        let date = new Date()
        let hours = date.getHours();
        let minutes = date.getMinutes()
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getUTCFullYear()

        const { title, content, avatarUrl, author } = this.data;
        const createContent = `
            <div class="post__avatar">
                <img class="post__img" src="${avatarUrl}" alt="#">
                <div class="post__name">${author}</div>
            </div>
            <div class="post__text">
                <h1 class="post__title">${title}</h1>
                <div class="post__content">${content}
                    
                </div>
                <div class="post__date">${hours}:${minutes}/${day}/${month}/${year}</div>
            </div>
        `;
        this.domEl.innerHTML = createContent;
        this.root.append(this.domEl)
    }
}
export { Post }
