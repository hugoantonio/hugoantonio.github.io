import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'boldCurrency'
})
export class BoldCurrencyPipe implements PipeTransform {
    transform(value: string): any {
        let dotPos = value.indexOf('.');
        let main = value.substr(0, dotPos);
        let frac = value.substr(dotPos, value.length);
        return '<b>' + main + '</b>' + frac;
    }
}