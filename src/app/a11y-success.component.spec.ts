import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A11ySuccessComponent } from './a11y-success.component';
import { axe } from 'jest-axe';

describe('A11ySuccessComponent', () => {
  let fixture: ComponentFixture<A11ySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A11ySuccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(A11ySuccessComponent);
    fixture.detectChanges();
  });

  it('should haven no a11y violations', async () => {
    const results = await axe(fixture.nativeElement);
    expect(results).toHaveNoViolations();
  });
});
