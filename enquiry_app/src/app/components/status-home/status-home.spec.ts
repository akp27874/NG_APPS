import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusHome } from './status-home';

describe('StatusHome', () => {
  let component: StatusHome;
  let fixture: ComponentFixture<StatusHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusHome],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
