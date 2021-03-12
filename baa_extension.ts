// Gib deinen Code hier ein

/**
 * Provides access to basic micro:bit functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="BAA Blocks"
//% groups=['LED matrix', 'Control flow', 'others']
namespace baaFunc {
  
   //% block
    export function zeigeNumber(v: number, w: number = 150): void {
        basic.showNumber(v-w)
    }
}
