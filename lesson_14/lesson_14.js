import { FilmCardList } from './components/filmCardList.js';

const body = document.querySelector('body');
const filmCardList = new FilmCardList(body);
filmCardList.createData();