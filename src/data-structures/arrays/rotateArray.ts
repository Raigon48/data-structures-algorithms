export function rotateLeftByOnePlace(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
  }
  return arr;
}
