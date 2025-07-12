document.addEventListener("DOMContentLoaded", () => {
    const btnNo = document.getElementById('btnNo');
    const btnSi = document.getElementById('btnSi');
    const frente = document.getElementById('frente');
    let contador = 1.5;

    btnNo.addEventListener('click', () => {
        let randomX = Math.floor(Math.random() * 100);
        let randomY = Math.floor(Math.random() * 100);
        btnNo.style.left = randomX + '%';
        btnNo.style.top = randomY + '%';
        contador=contador*1.2;
        btnSi.style.transform = 'scale('+contador+')';
        btnSi.style.zIndex=2;
    })

    btnSi.addEventListener('click', ()=>{
        frente.style.display='flex';
        btnSi.style.zIndex=0;
    })
})