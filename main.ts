/**
 * Provides access to basic micro:bit functionality.
 */

//% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
namespace baaFunc {
   basic.showNumber(2);
   
   //% block
    export function showNumber(v: number, interval: number = 150): void {
        basic.showNumber(v)
    }
}
