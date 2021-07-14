import { Component, OnInit } from '@angular/core';
import { AngularNgBreadcrumbService } from './angular-ng-breadcrumb.service';
import { Breadcrumb } from './breadcrumb';

@Component({
  selector: 'lib-angular-ng-breadcrumb',
  template: `
    <div #template>
    <ng-content></ng-content>
</div>
<div class="container" *ngIf="template.children.length == 0">
    <div class="nav-wrapper">
        <div class="breadcrumb" *ngFor="let route of breadcrumbs" [ngClass]="{'last': route.terminal}">
            <!-- disable link of last item -->
            <a href="" *ngIf="!route.terminal" [routerLink]="[route.url]">{{ route.displayName }}</a>
            <span *ngIf="route.terminal">{{ route.displayName }}</span>
        </div>
    </div>
</div>
  `,
  styles: [
    `
    .breadcrumb {
    display: inline-block;
}
.breadcrumb:first-child:before {
    display: none;
}
.breadcrumb:before {
    content: '>';
    vertical-align: top;
    display: inline-block;
    margin: 0 10px 0 8px;
    -webkit-font-smoothing: antialiased;
}
    `
  ]
})
export class AngularNgBreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[];

  constructor(private breadcrumbService: AngularNgBreadcrumbService) {
      breadcrumbService.breadcrumbChanged.subscribe((crumbs: Breadcrumb[]) => { this.onBreadcrumbChange(crumbs); });
  }

  ngOnInit(): void {
  }

  private onBreadcrumbChange(crumbs: Breadcrumb[]) {
      this.breadcrumbs = crumbs;
  }

}
