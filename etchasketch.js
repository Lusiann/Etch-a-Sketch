
const divContenitore = document.querySelector('#divContenitore')

const buttonReset = document.querySelector('#reset')
buttonReset.addEventListener('click',function(){    
    resetSketch()    
})

const buttonChangeGrid = document.querySelector('#change')
buttonChangeGrid.addEventListener('click',function(){    
    quantiDivFare()    
})


//funzione per creare DivDentro
function creaDiv (quantity = 16) {
    divContenitore.innerHTML = ''
    for (i = 0; i < quantity**2;i++) {
        let div = document.createElement('div')
        /* div.textContent = (i+1) */
        div.id = i +1
        div.className = 'divDentro'
        divContenitore.appendChild(div)

    }
    document.documentElement.style.setProperty('--quantity',quantity)
}

//event listener su divcontenitore
divContenitore.addEventListener('mouseover',function(event){
    if (event.target.id === 'divContenitore') {
        return;
    } else {
        const id = event.target.id;
        changeColor(id);
        
    }
} )

//funzionacambiacolore
function changeColor (id) {
    document.getElementById(id).style.background = colourMulticoloured();


}
//funzionecreacoloreRandom
function colourMulticoloured(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgba(${r}, ${g}, ${b})`
}



//funzioneResetEtch-A-Sketch
function resetSketch () {
    const divDentro = document.querySelectorAll('.divDentro')
    divDentro.forEach(function (div) {
        div.style.background = ''
    })
    
    
}
//funzione InputQuanti
function quantiDivFare () {
    let quantity = prompt('Please enter a number from 2 to 64','16')
    if ( isNaN(quantity) || quantity < 2 || quantity > 64) {
        alert('From 2 to 64')            
    }else {
        creaDiv(quantity)
    }
    
}


creaDiv()