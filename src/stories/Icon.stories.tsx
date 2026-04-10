import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';

/**
 * Icons are small graphical symbols used to represent actions, objects, or concepts.
 * Choose size based on context: XS/S for inline or dense layouts, M for standard controls, L/XL for hero sections.
 * Always provide accessible text when used without a visible label.
 */
const meta = {
  title: 'Design System/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    iconSize: { control: 'select', options: ['xs (12px)', 's (16px)', 'm (24px)', 'l (32px)', 'xl (40px)'] },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Use XS for inline text or dense micro-layouts. */
export const ExtraSmall: Story = { args: { iconSize: 'xs (12px)' } };

/** Use S for icons inside buttons, input fields, and form controls. */
export const Small: Story = { args: { iconSize: 's (16px)' } };

/** Use M for standalone action icons and navigation items. */
export const Medium: Story = { args: { iconSize: 'm (24px)' } };

/** Use L for empty states and illustrations. */
export const Large: Story = { args: { iconSize: 'l (32px)' } };

/** Use XL for hero-level visual emphasis. */
export const ExtraLarge: Story = { args: { iconSize: 'xl (40px)' } };
