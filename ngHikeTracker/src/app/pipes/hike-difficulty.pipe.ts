import { Pipe, PipeTransform } from '@angular/core';
import { Hike } from '../models/hike';

@Pipe({
  name: 'hikeDifficulty'
})
export class HikeDifficultyPipe implements PipeTransform {

  transform(hikes: Hike[], type: number = 1): Hike[] {
    if(type === 0){
      return hikes;
    }
    const result: Hike[] = [];
    for (const hike of hikes){
      if(hike.difficulty === type){
        result.push(hike);
      }
    }
    return result;
  }

}
