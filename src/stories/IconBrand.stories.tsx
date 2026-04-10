import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconBrand } from './IconBrand';

const meta = {
  title: 'Design System/Icon Brand',
  component: IconBrand,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    iconSize: { control: 'select', options: ['xs (12px)', 's (16px)', 'm (24px)', 'l (32px)', 'xl (40px)'] },
  },
} satisfies Meta<typeof IconBrand>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Use exclusively for third-party brand logos — never for UI actions or navigation. */
export const Default: Story = { args: { iconSize: 'm (24px)' } };

/** Display in brand's standard colors or monochrome only — never apply custom tinting. */
export const Small: Story = { args: { iconSize: 's (16px)' } };

export const Large: Story = { args: { iconSize: 'l (32px)' } };
