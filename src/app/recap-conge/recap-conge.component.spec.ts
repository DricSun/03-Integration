import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapCongeComponent } from './recap-conge.component';

describe('RecapCongeComponent', () => {
  let component: RecapCongeComponent;
  let fixture: ComponentFixture<RecapCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecapCongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecapCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
