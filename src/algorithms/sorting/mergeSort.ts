function merge(arr: number[], left: number, mid: number, right: number) {
    let leftPointer = left;
    let rightPointer = mid+1;

    const auxArray: number[] = [];

    while(leftPointer <= mid && rightPointer <= right) {
        if(arr[leftPointer] <= arr[rightPointer]) {
            auxArray.push(arr[leftPointer]);
            leftPointer++;
        } else {
            auxArray.push(arr[rightPointer]);
            rightPointer++;
        }
    }
    while(leftPointer <= mid) {
        auxArray.push(arr[leftPointer]);
        leftPointer++;
    }
    while(rightPointer <= right) {
        auxArray.push(arr[rightPointer]);
        rightPointer++;
    }
    for(let i = left; i<=right; i++) {
        arr[i] = auxArray[i-left];
    }
}

function recursion(arr: number[], left: number, right: number) {
    if(left >= right) {
        return;
    }
    let mid = Math.floor((left + right) / 2);
    recursion(arr, left, mid);
    recursion(arr, mid+1, right);
    merge(arr, left, mid, right);
}

export default function mergeSort(arr: number[]): number[] {
    recursion(arr, 0, arr.length-1);
    return arr;
}