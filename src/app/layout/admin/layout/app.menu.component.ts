import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin/dashboard'] }
                ]
            },
            {
                label: 'Management Services',
                items: [
                    { label: 'Products', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/managementProduct'] },
                    { label: 'Categories', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/managementCategories'] },
                    { label: 'Feedbacks', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/managementFeedbacks'] },
                    { label: 'Users', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/managementUsers'] },

                ]
            },
        ];
    }
}
