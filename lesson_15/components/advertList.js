import { AdevertEl } from "./advertEl.js";

export class AdvertList {
    constructor(root, data, onElDelete) {
        this.root = root;
        this.data = data;
        this.onElDelete = onElDelete;

    }

    render() {
        this.root.innerHTML = ''
        this.advertList = document.createElement('div');
        this.advertList.classList.add('advertisment-list')
        for (let advertisment of this.data) {
            this.renderEl(advertisment)
        }
        this.root.append(this.advertList)
    }

    renderEl(advertisment) {
        const elWrapper = document.createElement('div');
        elWrapper.classList.add('advertisment-list__element')
        new AdevertEl(this.advertList, advertisment, this.onElDelete)
    }
}
