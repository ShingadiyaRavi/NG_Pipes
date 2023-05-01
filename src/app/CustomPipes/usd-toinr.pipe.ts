import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToinr'
})
export class UsdToinrPipe implements PipeTransform {

  transform(value: number, currentPrice: number):number {
    return value*currentPrice;
  }

}
