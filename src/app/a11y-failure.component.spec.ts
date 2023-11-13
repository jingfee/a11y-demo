import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A11yFailureComponent } from './a11y-failure.component';
import { axe } from 'jest-axe';

describe('A11yFailureComponent', () => {
  let fixture: ComponentFixture<A11yFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A11yFailureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(A11yFailureComponent);
    fixture.detectChanges();
  });

  it('should haven no a11y violations', async () => {
    const results = await axe(fixture.nativeElement);
    expect(results).toHaveNoViolations();
  });
});
