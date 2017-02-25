//
// Source code generated by Celerio, a Jaxio product.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Follow us on twitter: @jaxiosoft
// Need commercial support ? Contact us: info@jaxio.com
// Template pack-angular:src/main/webapp/app/entities/entity-line.component.ts.e.vm
//
import {Component, Input} from '@angular/core';
import {UseCase1} from './useCase1';

@Component({
	template: `
        {{ useCase1?.dummy }} 	`,
	selector: 'useCase1-line',
})
export class UseCase1LineComponent {
    @Input() useCase1 : UseCase1;
}