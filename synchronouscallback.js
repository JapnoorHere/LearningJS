// synch
function parent(child){
    child();
    console.log("parent");
}

function child(){
    console.log("child");
}

parent(child);



// asynchronous
console.log("################################################");
function parent1(child){
    setTimeout(child,1000);
    console.log("parent");
}

function child1(){
    console.log("child");
}


parent1(child1);
