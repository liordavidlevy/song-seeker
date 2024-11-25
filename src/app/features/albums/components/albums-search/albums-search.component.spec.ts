import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsSearchComponent } from './albums-search.component';

describe('AlbumsSearchComponent', () => {
  let component: AlbumsSearchComponent;
  let fixture: ComponentFixture<AlbumsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
