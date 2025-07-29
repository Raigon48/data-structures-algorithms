export default function selectionSort(arr: number[]) : number[] {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i; j< arr.length; j++) {
            if ( arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}