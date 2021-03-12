// document.getElementById('search-button').onclick = function changeContent() {
//     console.log('Hello');
// }

const button = document.querySelector('.btn-primary');
button.onclick = function() {
    const inputValue = document.querySelector('.search-input').value;
    console.log('your entered location is: '+inputValue);
}