var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[arr.length - 1];
    var leftArray = [];
    var rightArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArray.push(arr[i]);
        }
        if (arr[i] > pivot) {
            rightArray.push(arr[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(leftArray), true), [pivot], false), quickSort(rightArray), true);
};
var myArray2 = [8, 5, 3, 1, 2, 7, 4, 4, 12, 14];
console.log('my Array -> ', myArray2);
// Medir o tempo de execução do algoritmo
console.time('QuickSort');
var sortedArray2 = quickSort(myArray2);
console.timeEnd('QuickSort');
console.log('ORDERED Array -> ', sortedArray2);
