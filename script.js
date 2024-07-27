const btn = document.querySelectorAll('.box');
const bdy = document.querySelector('body');

btn.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'id1'){
            bdy.style.backgroundColor = "crimson";
        }
        if(color.target.id === 'id2'){
            bdy.style.backgroundColor = "burlywood";
        }
        if(color.target.id === 'id3'){
            bdy.style.backgroundColor = "cornflowerblue";
        }
        if(color.target.id === 'id4'){
            bdy.style.backgroundColor = "violet";
        }
        if(color.target.id === 'id5'){
            bdy.style.backgroundColor = "cadetblue";
        }
    })
})