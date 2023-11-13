import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { A11ySuccessComponent } from './a11y-success.component';

export default {
  title: 'A11ySuccess',
  component: A11ySuccessComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule],
    }),
  ],
} as Meta;

export const Default = {
  render: () => {
    return {
      template: '<a11y-demo-success></a11y-demo-success>',
    };
  },
};
