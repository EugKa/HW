import { Post } from './post.js';

class PostList {
    constructor(root) {
        this.root = root;
        this.url = 'https://boring-fe.herokuapp.com/posts'
    }

    createData() {
        fetch(this.url)
            .then((resp) => resp.json())
            .then((data) => {
                this.data = data;
                console.log(data);
                this.render();
            })
            .catch((e) => {
                console.error(e);
            })
    }

    render() {
        this.data.forEach((data) => {
            const item = new Post(this.root, data);
            item.render();
        });

    }
}
export { PostList }


