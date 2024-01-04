function onClick() {
    const el = document.createElement('p'); //creates a p tag!?!?
    el.innerText = 'Button was clicked!';
    document.querySelector('.container').appendChild(el);
}

document.querySelector('button').onclick = onClick;