import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourfeedComponent } from './yourfeed.component';

describe('YourfeedComponent', () => {
  let component: YourfeedComponent;
  let fixture: ComponentFixture<YourfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourfeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
