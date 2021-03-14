import * as React from 'react'

export class DataService extends React.Component {
    constructor(props) {
        super(props)
        this.apiBase = 'https://my-spa-adb78-default-rtdb.firebaseio.com/data'
    }

    async getResource(url) {
        const res = await fetch(`${this.apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getBook() {
        const res = await this.getResource(`/book.json`);
        return res;
    }

    async getPlans() {
        const res = await this.getResource(`/plans.json`);
        return res;
    }

    async getTranings() {
        const res = await this.getResource(`/tranings.json`);
        return res;
    }

    async getWinGallery() {
        const res = await this.getResource(`/winGallery.json`)
        return res
    }
    async getWinInfo() {
        const res = await this.getResource(`/winInfo.json`)
        return res
    }
}