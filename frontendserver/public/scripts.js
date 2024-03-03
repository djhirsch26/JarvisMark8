import * as api from './api.js';

function bind(id, event, fun) {
    document.getElementById(id).addEventListener(event, (e) => fun(e))
}

class Main {
    constructor() {
        this.input = ''
    }

    onInput(e) {
        this.input = e.target.value;
    }

    async onSubmitClick() {
        const response = await api.fetchClassification(this.input);
        console.log(response.classification);
    }
}

const main = new Main();

bind('input', "input", (e) => main.onInput(e));
bind('submit', "click", (e) => main.onSubmitClick(e));


