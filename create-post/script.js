import { retrieveTable, saveTable } from "../dataStorage.mjs";

const form = document.getElementById("form");
const username = document.getElementsByName("usr")[0];
const mail = document.getElementsByName("mail")[0];
const body = document.getElementsByName("body")[0];

const KEY = "POSTS"

var cache = retrieveTable(KEY);
saveTable(KEY, cache);

function submit() {
    cache[Date.now()] = {
        usr: username.value,
        mail: mail.value,
        body: body.value
    };
    console.log(cache);
    saveTable(KEY);
    window.location = window.origin+"/posts/";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
})