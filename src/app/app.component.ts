import { Component } from '@angular/core';
import { A11ySuccessComponent } from './a11y-success.component';
import { A11yFailureComponent } from './a11y-failure.component';

@Component({
  standalone: true,
  imports: [A11ySuccessComponent, A11yFailureComponent],
  selector: 'a11y-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-demo';
}
