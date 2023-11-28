// function removeDuplicates(arr){
//     const uniqArr=[];
//     for(let i=0; i<arr.length; i++){
//         if(!uniqArr.includes(arr[i])){
//             uniqArr.push(arr[i])
//         }
//     }

//     return uniqArr;

// }



// second way with set 

function removeDuplicates(arr){
    return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
