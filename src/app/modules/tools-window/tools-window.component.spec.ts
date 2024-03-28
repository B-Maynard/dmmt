import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsWindowComponent } from './tools-window.component';

describe('ToolsWindowComponent', () => {
  let component: ToolsWindowComponent;
  let fixture: ComponentFixture<ToolsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
