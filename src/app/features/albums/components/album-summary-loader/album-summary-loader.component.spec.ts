import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSummaryLoaderComponent } from './album-summary-loader.component';

describe('AlbumSummaryLoaderComponent', () => {
  let component: AlbumSummaryLoaderComponent;
  let fixture: ComponentFixture<AlbumSummaryLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumSummaryLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumSummaryLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
