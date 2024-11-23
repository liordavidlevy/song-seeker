import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSummaryComponent } from './album-summary.component';

describe('AlbumSummaryComponent', () => {
  let component: AlbumSummaryComponent;
  let fixture: ComponentFixture<AlbumSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
