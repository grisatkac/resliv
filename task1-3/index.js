//taks 1
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('name_input');
    const initialValue = inputField.getAttribute('value');

    inputField.addEventListener('keyup', (e) => {

        if (initialValue != e.target.value) {
            inputField.classList.add('red');
        } else {
            inputField.classList.remove('red');
        }
    })
})

//task 3
const sendRequest = (url) => {
    return new Promise((res, rej) => {
        const response = fetch(url)
        res(response)
    })
}

Promise.all([
    sendRequest('http://jsonplaceholder.typicode.com/posts'),
    sendRequest('http://jsonplaceholder.typicode.com/albums')
]).then((data) => {
    console.log('Оба запроса выполнены')
}).catch(() => {
    console.log('Оба запроса не выполнены')
})