import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: '<add-price></add-price>',
    template: `
    <input #price type="text" />
`
})
export class AddPriceComponent implements AfterViewInit {
    @Output()
    onPriceChange: EventEmitter<string> = new EventEmitter();
    @ViewChild('price') price: ElementRef;



    public ngAfterViewInit(): void {
        const priceChange$ = Observable.fromEvent(this.price.nativeElement, 'input');
        priceChange$.subscribe((s: any) => {
            console.log(s.target.value);
            this.onPriceChange.emit(s.target.value);
        });
    }
}