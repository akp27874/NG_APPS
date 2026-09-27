import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnquiryHome } from './enquiry-home';

describe('EnquiryHome', () => {
  let component: EnquiryHome;
  let fixture: ComponentFixture<EnquiryHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryHome],
    }).compileComponents();

    fixture = TestBed.createComponent(EnquiryHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
