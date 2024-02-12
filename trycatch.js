
function fun(){
    let a = 9
    try{
        console.log(a * d);
        return false;
    }
    catch(error){
        return true;
    }
    finally{
        console.log("finally") // working of finally
    }
}

fun()