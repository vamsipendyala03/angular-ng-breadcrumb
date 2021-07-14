import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AngularNgBreadcrumbComponent } from './angular-ng-breadcrumb.component';
import { AngularNgBreadcrumbService } from './angular-ng-breadcrumb.service';

export function breadcrumbServiceFactory(router: Router) {
  return new AngularNgBreadcrumbService(router);
}

@NgModule({
  declarations: [
    AngularNgBreadcrumbComponent
  ],
  imports: [
    CommonModule,
     RouterModule
  ],
  providers: [
    { provide: AngularNgBreadcrumbService, useFactory: breadcrumbServiceFactory, deps: [Router] }
],
  exports: [
    AngularNgBreadcrumbComponent
  ]
})
export class AngularNgBreadcrumbModule { }
