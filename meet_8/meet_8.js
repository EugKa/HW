import { PostList } from './componets/postList.js';
const place = document.querySelector('#page')
const postList = new PostList(place);
postList.createData()
