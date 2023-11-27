function calculator(a, b , c){
    let result;

    if(c==='-'){
        result=  a-b;
    }else if(c==='+'){
        result=  a+b;
    }else if(c==='*'){
        result=  a*b;
    }else if(c==='/'){
        result=  a/b;
    }else{
    }

    return result;
}


function calculator(a, b, c){
    let result;
    switch(c){
        case '+':
            result = a+b;
            break;
        case '-':
            result=a-b;
            break;
        case '/':
            result=a/b;
            break;
        case '/':
            result=a/b;
            break;   
        default:
            throw new Error("ivalid opeartor"); 

    }


}

modules.exports = calculator;
