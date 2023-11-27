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

module.exports= calculator;
