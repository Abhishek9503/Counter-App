const countValue= document.querySelector('#counter');


const increament=()=>{
    // get the value
    let value=parseInt(countValue.innerText);

    //update the value
    value=value +1;

    // set the value
    countValue.innerText=value;
};



const decreament=()=>{
    // get the value
    let value=parseInt(countValue.innerText);

    //update the value
    value=value -1;

    // set the value
    countValue.innerText=value;
};

