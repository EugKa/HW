const formTemplate = `
    <div class="form-advertisments__field">
        <input type="text" 
        class="form-advertisments__input" 
        name="title" 
        placeholder="Title">
    </div>
    <div class="form-advertisments__field">
        <input 
        type="text" 
        class="form-advertisments__input" 
        name="description" 
        placeholder="Description">
    </div>
    <div class="form-advertisments__field">
        <input type="text" 
        class="form-advertisments__input" 
        name="note" 
        placeholder="Note">
    </div>
    <div class="form-advertisments__field">
        <input type="file" 
        class="form-advertisments__img"
        accept="image/*"
        id="fileInput"
        name="image">
    </div>
    <div class="form-advertisments__field">
        <button class="form-advertisments__btn form-advertisments__btn_submit" type="submit">Submit</button>
        <button class="form-advertisments__btn form-advertisments__btn_clear" type="reset">Clear</button>
    </div>
`;
const apiURL = 'https://boring-fe.herokuapp.com';
export class CreateForm {
    constructor(root, url, onSuccessCB) {
        this.root = root;
        this.url = url;
        this.onSuccessCB = onSuccessCB;
        this.render();
    }
    render() {
        this.formEl = document.createElement('form');
        this.formEl.classList.add('form-advertisments')
        this.formEl.innerHTML = formTemplate;
        this.formEl.addEventListener('submit', (e) => this.sendData(e));

        this.root.append(this.formEl)


    }

    sendData(e) {
        e.preventDefault()

        const formData = new FormData(this.formEl);
        fetch(this.url, {
            method: 'POST',
            body: formData,

        })
            .then((resp) => resp.json())
            .then((data) => {

                console.log("ins form", data);
                this.onSuccessCB(data)
            })
            .catch((e) => {
                console.log("error", e);
            })

    }


}

