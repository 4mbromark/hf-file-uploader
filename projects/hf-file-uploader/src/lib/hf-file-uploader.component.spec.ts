import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfFileUploaderComponent } from './hf-file-uploader.component';

describe('HfFileUploaderComponent', () => {
  let component: HfFileUploaderComponent;
  let fixture: ComponentFixture<HfFileUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfFileUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
