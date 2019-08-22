import { NgModule, ModuleWithProviders } from '@angular/core';
import { BoldCurrencyPipe } from './pipes/boldCurrencyPipe';

@NgModule({
    imports: [],
    declarations: [BoldCurrencyPipe],
    exports: [BoldCurrencyPipe]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
