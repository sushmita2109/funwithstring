textArea=document.querySelector('#text-area');
upperBtn=document.querySelector('#upper-btn');
output=document.querySelector('#output');

function uppercaseConvert(){
    let text=textArea.value;
    console.log(textArea.value);
    output.innerText=text.toUpperCase();
    
}

upperBtn.addEventListener('click',uppercaseConvert);