let enter = (e, n) => {
    if (e.code == 'Enter') {
        document.querySelector(n).focus();
    }
}

let contactBtn = document.querySelector('#contact-btn');
contactBtn.addEventListener('click', () => {
    
})