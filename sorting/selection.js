// const selectionSort = (arr: number[]): number[] => {
//     const returnArr: number[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i; j < arr.length; j++){
//             if (arr[j] < arr[i]) {
//                 const tempN = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = tempN
//             }
//         }
//     }
//     return arr;
// }
var selectionSort = function (arr) {
    var returnArr = [];
    for (var i = 0; i < arr.length; i++) {
        var minIndex = i;
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        var tempN = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tempN;
    }
    return arr;
};
var myArray = [8, 5, 3, 1, 2, 7, 4, 4, 12, 14];
console.log('my Array -> ', myArray);
// Medir o tempo de execução do algoritmo
console.time('SelectionSort');
var sortedArray = selectionSort(myArray);
console.timeEnd('SelectionSort');
console.log('ORDERED Array -> ', sortedArray);
