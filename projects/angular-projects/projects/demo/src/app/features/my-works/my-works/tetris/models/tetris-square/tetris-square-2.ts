import {Pos, TetrisSquareBase} from './tetris-square-base';

export class TetrisSquare2 extends TetrisSquareBase {
  rotates: number[][][] = [
    [
      [0, 0, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 2, 0],
      [0, 2, 2, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 2, 0],
      [0, 2, 2, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
    ],
  ];
  constructor() {
    super();
    this.data = this.rotates[0];
  }
}
