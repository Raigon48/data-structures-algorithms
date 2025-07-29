// This method uses extra auxillary array space of size O(n)
export function quickSortUsingAuxArray(arr: number[]) : number[] {
    if(arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let leftArr: number[] = [];
    let rightArr: number[] = [];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return [...quickSortUsingAuxArray(leftArr), pivot, ...quickSortUsingAuxArray(rightArr)];
}

export function quickSortInPlace(arr: number[]) : number[] {
    let low = 0;
    let high = arr.length-1;
    qsRecursion(arr, low, high);
    return arr;
}

function qsRecursion(arr: number[], low: number, high: number) {
    if(low < high) {
        const pivotIndex = partition(arr, low, high);
        qsRecursion(arr, low, pivotIndex-1);
        qsRecursion(arr, pivotIndex+1, high);
    }
}

function partition(arr: number[], low: number, high: number) : number {
    let pivot = arr[low];
    let left = low+1;
    let right = high;

    while(left <= right) {
        while(left <=high && arr[left] <= pivot) {
            left++;
        }
        while(right >=low && arr[right] > pivot) {
            right--;
        }
        if(left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }
    [arr[low], arr[right]] = [arr[right], arr[low]];
    
    return right;
}