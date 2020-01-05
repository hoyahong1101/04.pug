async function init(){
    var date = await getDays();
    console.log(date.getDate());
}

function getDays(fn){
    var d = new Date();
    return new Promise(function(resolve, reject){
        resolve(d);
    });
}

init();
