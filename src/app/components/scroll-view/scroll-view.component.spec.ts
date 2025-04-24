import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScrollView} from './scroll-view.component';

describe('PanelComponent', () => {
  let component: ScrollView;
  let fixture: ComponentFixture<ScrollView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollView]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScrollView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
