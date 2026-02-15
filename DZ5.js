function pow(x,y){          //x - число, y - степінь
    if (y===0){
        return 1;
    }
    else if (y<0){
        x = 1/x;
        y = -y;
    }
    let result = 1;       
    for (let i = 0; i < y; i++){         //i - лічильник циклу
        result *= x;            
    }
return result;    
}
console.log(pow(2,3));
console.log(pow(25,2));
console.log(pow(5,0));
console.log(pow(2,-6));