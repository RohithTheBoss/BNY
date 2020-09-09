import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormSecComponent } from './search-form-sec.component';

describe('SearchFormSecComponent', () => {
  let component: SearchFormSecComponent;
  let fixture: ComponentFixture<SearchFormSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
