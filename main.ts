namespace baaFunc {
   basic.showNumber(2);
   
   //% block
    export function zeigeNumber(v: number, interval: number = 150): void {
        basic.showNumber(v*interval)
    }
}
