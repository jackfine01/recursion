function fibs(num){
    const fibArray = [];
        for(let j = 0;j<2 && j < num; j++){
            fibArray.push(1);
        };
        for(let i=2; i < num; i++){
            fibArray.push(fibArray[i-2] + fibArray[i-1]);
        };
    return fibArray;
};

function fibsR(num){
    if(num == 1){
        console.log("This was printed recursively");
        const fibArray = [1];
        return fibArray;
    } 
    else if (num == 2){
        const fibArray = fibsR(num-1);
        fibArray.push(1);
        return fibArray;
    }   
    else{
        const fibArray1 = fibsR(num-1);
        const fibArray2 = fibsR(num-2);
        const fibArray = fibArray1
        fibArray1.push(fibArray1[fibArray1.length-1]+fibArray2[fibArray2.length-1])
        return fibArray;
    }
};
function mergeSort(arr){
    if(arr.length == 1){
        const baseArray = [arr[0]];
        return baseArray;
    }
    else{
        //split the array in two
        const mid = Math.ceil(arr.length / 2);
        const arrLeft = arr.slice(0, mid);
        const arrRight = arr.slice(mid);
        //sort left half of the array ==> call mergeSort()
            const subArrLeft = mergeSort(arrLeft);
        //sort right half of the array ==> call mergeSort()
            const subArrRight = mergeSort(arrRight);
        //merge them ==> shift out the smallest of the two arrays.

        const subArr = [];
        while(subArrLeft.length > 0 && subArrRight.length > 0){
            if(subArrLeft[0]<subArrRight[0]){
                subArr.push(subArrLeft.shift())
            }
            else
                subArr.push(subArrRight.shift())
        }
        if(subArrLeft.length==0 && subArrRight.length>0){
            for(let i = 0; i<subArrRight.length; i++){
                subArr.push(subArrRight[i])
            }
        }
        else{
            for(let i = 0; i<subArrLeft.length; i++){
                subArr.push(subArrLeft[i])
            }
        }
        return subArr;
    };
}
