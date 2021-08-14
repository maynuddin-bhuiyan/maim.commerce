/*------------------------------------
3.H2 Style Set in Javascript             
------------------------------------*/

const heads = document.getElementsByClassName('heading');

for(const head of heads){
    head.style.color = 'GoldenRod';
    head.style.margin = '30px';
    head.style.fontSize = '30px';
    head.style.fontWeight = '700';    
};


/*------------------------------------
4.Background Set in Javascript             
------------------------------------*/


const backColor = document.getElementById('backpack');

backColor.style.backgroundColor = '#fceae8';
backColor.style.padding = '10px 0px 40px 0px';
backColor.style.borderRadius = '20px';




/*------------------------------------
5.Margin Border Set in Javascript             
------------------------------------*/
let chnges = document.getElementsByClassName('card');

for(const chang of chnges){
    chang.style.borderRadius = '30px';
}



/*------------------------------------
5.1 Margin Top Set in Javascript             
------------------------------------*/ 



let margin = document.getElementsByClassName('mr_top');

for(const topMar of margin){
    topMar.style.marginTop = '50px';
};



/*------------------------------------
6. click change in Javascript             
------------------------------------*/

const click = document.getElementById('add_evant');

click.addEventListener('click', function(){
        document.body.style.backgroundColor = '#fceae8';
    
});


/*------------------------------------
6. click change in Javascript             
------------------------------------*/

//button none
document.getElementById('button_ni').addEventListener('click', function(){
  
    document.getElementById('text_main').style.display = 'none';
    
});



// change used input
document.getElementById('text_main').addEventListener('change',function(){



});



// remove and set attribute in input 
document.getElementById('text_main').addEventListener('keyup',function(evant){

const delatBtn = document.getElementById('button_ni');

if(evant.target.value == "email"){
    delatBtn.removeAttribute('disabled')
}
else{
    delatBtn.setAttribute('disabled', true)
}

});