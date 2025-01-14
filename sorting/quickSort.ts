const quickSort = (arr: number[]): number[] => {
    if(arr.length <= 1){
        return arr
    }


    const pivot = arr[arr.length -1]
    const leftArray: number[] = []
    const rightArray: number[] = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            leftArray.push(arr[i])
        } 
        if(arr[i] > pivot){
            rightArray.push(arr[i])
        }
    }


    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

const myArray2 = [8, 5, 3, 1, 2, 7, 4, 4, 12, 14];
console.log('my Array -> ', myArray2);
// Medir o tempo de execução do algoritmo
console.time('QuickSort');
const sortedArray2 = quickSort(myArray2);
console.timeEnd('QuickSort');
console.log('ORDERED Array -> ', sortedArray2);