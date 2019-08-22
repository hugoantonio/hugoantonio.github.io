import { NgModule } from '@angular/core';
import { BoldCurrencyPipe } from './pipes/BoldCurrencyPipe';

@NgModule({
    imports: [],
    declarations: [BoldCurrencyPipe],
    exports: [BoldCurrencyPipe]
})
export class SharedModule {}
