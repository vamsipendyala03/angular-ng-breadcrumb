import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNgBreadcrumbComponent } from './angular-ng-breadcrumb.component';

describe('AngularNgBreadcrumbComponent', () => {
  let component: AngularNgBreadcrumbComponent;
  let fixture: ComponentFixture<AngularNgBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularNgBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNgBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
