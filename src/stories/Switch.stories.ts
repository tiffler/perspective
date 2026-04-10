import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Switch } from './Switch';

const meta = {
  title: 'Design System/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked:  { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Binary toggle for on/off settings with immediate effect. Always pair with a visible label. */
export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Text label',
  },
};

/** Enabled/on state. */
export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Text label',
  },
};

/** Disabled for settings that are temporarily locked due to a resolvable condition. */
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Text label',
  },
};
