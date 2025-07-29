export default function bubbleSort(arr: number[]) : number[] {
    for(let i = 0; i <= arr.length-1; i++) {
        for(let j = 0; j < arr.length-i-1; j++) {
            if(arr[j+1] < arr[j]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}



// time complexity = O(n^2)
// space complexity = O(1)
// can be optimized to O(n) in best case scenario if the array is already sorted. If no swap happened in first iteration.
