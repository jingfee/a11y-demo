import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { A11yFailureComponent } from './a11y-failure.component';

export default {
  title: 'A11yFailure',
  component: A11yFailureComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule],
    }),
  ],
} as Meta;

export const Default = {
  render: () => {
    return {
      template: '<a11y-demo-failure></a11y-demo-failure>',
    };
  },
};
