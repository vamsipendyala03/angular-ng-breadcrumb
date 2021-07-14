import { TestBed } from '@angular/core/testing';

import { AngularNgBreadcrumbService } from './angular-ng-breadcrumb.service';

describe('AngularNgBreadcrumbService', () => {
  let service: AngularNgBreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularNgBreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
