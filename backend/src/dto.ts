import { IsArray } from 'class-validator';

export class findWinnerDto {
  @IsArray()
  data: [];
}
