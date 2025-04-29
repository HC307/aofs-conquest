import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileLinkComponent } from './tile-link.component';

describe('TileComponent', () => {
  let component: TileLinkComponent;
  let fixture: ComponentFixture<TileLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
