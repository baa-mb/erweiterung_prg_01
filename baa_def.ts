// Gib deinen Code hier ein

/**
 * Provides access to basic micro:bit functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="BAA Blocks"
//% groups=['LED matrix', 'Control flow', 'others']
namespace baaFunc {
   basic.showNumber(0);
   
   //% block
    export function zeigeNumber(v: number, interval: number = 150): void {
        basic.showNumber(v*interval)
    }
}
