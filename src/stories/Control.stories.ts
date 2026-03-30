import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Control } from './Control';

const meta = {
  title: 'Design System/Control',
  component: Control,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type:          { control: 'select', options: ['checkbox', 'radio'] },
    checked:       { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled:      { control: 'boolean' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Control>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
    checked: false,
    indeterminate: false,
    disabled: false,
    label: 'Text label',
  },
};

export const Radio: Story = {
  args: {
    type: 'radio',
    checked: false,
    disabled: false,
    label: 'Text label',
  },
};
