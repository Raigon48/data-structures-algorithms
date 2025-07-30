export function moveZeroesToEnd(arr: number[]): number[] {
  let zeroPointer = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zeroPointer = i;
      break;
    }
  }
  if (zeroPointer === -1) return arr;

  for (let i = zeroPointer + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[zeroPointer], arr[i]] = [arr[i], arr[zeroPointer]];
      zeroPointer++;
    }
  }
  return arr;
}
