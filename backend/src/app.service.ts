import { Injectable } from '@nestjs/common';
import { findWinnerDto } from './dto';

@Injectable()
export class AppService {
  findWinner(dto: findWinnerDto) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (dto[a] && dto[a] === dto[b] && dto[a] === dto[c]) {
        return dto[a];
      }
    }

    return null;
  }
}
