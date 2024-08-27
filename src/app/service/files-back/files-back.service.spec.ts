import { TestBed } from '@angular/core/testing';

import { FilesBackService } from './files-back.service';

describe('FilesBackService', () => {
  let service: FilesBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
