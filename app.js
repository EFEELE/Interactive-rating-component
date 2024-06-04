let optionSelected;
const container = document.getElementById('container');
const thanks = document.getElementById('thank-state');

const showValue = document.getElementById('our-selection');

function checkValue(){
    const options = document.getElementsByName('option');
    
    for (let i=0; i < options.length; i++ ){
        if(options[i].checked){
            optionSelected = options[i].value
        }
    }

    if(optionSelected){
        container.style.display = 'none';
        thanks.style.display = 'flex';
        showValue.innerHTML = 'You selected ' + optionSelected + ' of 5';
    }else{
       alert('You have not selected any options')
    }
}

