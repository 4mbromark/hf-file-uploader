import { TestBed } from '@angular/core/testing';

import { HfFileUploaderService } from './hf-file-uploader.service';

describe('HfFileUploaderService', () => {
  let service: HfFileUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HfFileUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
