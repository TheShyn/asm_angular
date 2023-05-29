import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayouAdminComponent } from './layou-admin.component';

describe('LayouAdminComponent', () => {
  let component: LayouAdminComponent;
  let fixture: ComponentFixture<LayouAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayouAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayouAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
