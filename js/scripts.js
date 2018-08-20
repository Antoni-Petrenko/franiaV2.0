function menu(){
    var x =document.getElementById('topNav');
    if(x.className==='nav wow animated')
        x.className+=' bounceInDown responsNav';
    else
        x.className='nav wow animated';
}