
function map(arr, func) {
    result=[];
    for (let i=0;i<arr.length;i++){
        result.push(func(arr[i],i,arr));
    }
    return result;    
}

//Testing map()
//console.log(map([1,2,3],f=>f*f));


function filter(arr,func){
    result=[];
    for(let i=0;i<arr.length;i++){
        if(func(arr[i],i,arr)){
            result.push(arr[i]);
        }
    }
    return result;
}

//Testing filter
//let d = [23,67,89,10];
//console.log(filter(d,f=>f>=50));

function forEach(arr,func){
    result = [];
    for(let i=0;i<arr.length;i++){
        result.push(func(arr[i],i,arr));
    }
    return result;
}

//Testing forEach()
//console.log(forEach([1,2,3,4],f=>f**f));

function reduce(arr, reducer, initialValue) { 
    if(initialValue === undefined){
        result=0;
    }
    else{
        result = initialValue;
    }
    for(let i=0;i<arr.length;i++)        
        result = reducer(result, arr[i], i, arr);   
    return result;
    }

//Testing reduce()
// let arr = [1, 2, 3, 4];
// const reducer = (previous, currentValue) => previous + currentValue;
// const sum = reduce(arr, reducer);
// console.log(sum); 