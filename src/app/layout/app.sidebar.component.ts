import { Component, ElementRef } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html',
    styles: [
        `
            :host {
                display: block;
                height: 100%;
            }
        `,
    ],
})
export class AppSidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) {}
}
