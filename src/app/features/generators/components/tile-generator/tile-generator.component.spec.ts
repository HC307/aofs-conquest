import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileGeneratorComponent } from './tile-generator.component';

describe('TileGeneratorComponent', () => {
  let component: TileGeneratorComponent;
  let fixture: ComponentFixture<TileGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
