basic.showIcon(IconNames.Heart)
/**
 * Provides access to basic micro:bit functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="BAA Blöcks"
namespace baaFunc {
   basic.showNumber(0);
   
   //% block
    export function zeigeNumber(v: number, interval: number = 150): void {
        basic.showNumber(v*interval)
    }
}
