const cokie = document.querySelector('.boite');
        btn1 = document.querySelector('.btn1');
        btn2 = document.querySelector('.btn2');

window.addEventListener('load', () =>{
    cokie.classList.add('active');
    btn2.addEventListener('click', () =>{
        cokie.classList.remove('active');
    })
    btn1.addEventListener('click', () =>{
        localStorage.setItem('Mangue', 50);
        sessionStorage.setItem('Manette', 105);
        document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    })
})