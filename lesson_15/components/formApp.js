import { CreateForm } from './form.js';
import { AdvertList } from './advertList.js';
import { Pagination } from './pagination.js'
const apiURL = 'https://boring-fe.herokuapp.com';
export class FormApp {
    constructor(root) {
        this.root = root;
        this.sortParams = {
            sortBy: 'createdAt',
            order: 'desc',
            limit: 5,
            currentPage: 1,
            totalCount: 0
        }
        this.init()

    }

    init() {
        this.render()
        this.fetchData()
    }

    render() {
        this.contentEl = document.createElement('div');
        this.listWrap = document.createElement('div');
        this.form = new CreateForm(
            this.contentEl,
            `${apiURL}/advertisments`,
            (advertisment) => {
                this.fetchData();
                // console.log('Susc Resp', advertisment);
                // this.fixAvatarUrl(advertisment);
                // this.list.renderEl(advertisment)
            })

        this.contentEl.append(this.listWrap);
        this.root.append(this.contentEl);
    }

    onSwitchPage(page) {
        if (typeof page !== 'number') {
            page = parseInt(page)
        }
        this.sortParams.currentPage = page;
        this.fetchData();
    }

    fetchData() {
        const { sortBy, order, limit, currentPage } = this.sortParams;

        fetch(`${apiURL}/advertisments?_sort=${sortBy}&_order=${order}&_limit=${limit}&_page=${currentPage}`)
            .then((res) => {
                const totalCount = res.headers.get('X-Total-Count');
                const totalPages = Math.ceil(totalCount / this.sortParams.limit);
                this.pagination = new Pagination(this.contentEl, totalPages, this.sortParams.currentPage, (page) => {
                    this.onSwitchPage(page)
                })
                this.pagination.render()
                console.log();
                return res.json();

            })
            .then((advertisments) => {
                this.advertisments = advertisments;
                this.fixAvatarsUrls();
                this.renderList();
            })
    }

    deleteAdvertisment(id) {
        console.log('Start delete id', id);
        fetch(`${apiURL}/advertisments/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (res.status === 200) {
                console.log(this);
                this.fetchData();
            }
            console.log(res);
        })
    }

    renderList() {
        this.list = new AdvertList(this.listWrap, this.advertisments, (id) =>
            this.deleteAdvertisment(id));
        this.list.render();
    }

    fixAvatarsUrls() {
        this.advertisments.forEach((advertisment) => {
            this.fixAvatarUrl(advertisment);
        })
    }

    fixAvatarUrl(advertisment) {
        advertisment.img = `${apiURL}/${advertisment.img}`
    }

}