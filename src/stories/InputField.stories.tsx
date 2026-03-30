import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { fn } from 'storybook/test';
import { InputField } from './InputField';

const meta = {
  title: 'Design System/Input Field',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'focus', 'error', 'disabled'],
    },
  },
  args: { onChange: fn() },
  decorators: [
    (Story) => <div style={{ width: 320 }}><Story /></div>,
  ],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Label',
    placeholder: 'Input',
  },
};

export const Focus: Story = {
  args: {
    variant: 'focus',
    label: 'Label',
    placeholder: 'Input',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Label',
    placeholder: 'Input',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    label: 'Label',
    placeholder: 'Input',
  },
};
