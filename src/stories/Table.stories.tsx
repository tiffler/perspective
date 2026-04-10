import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Table } from './Table';

/**
 * Structured data display that organizes information into rows and columns.
 * Always include a header row. Use pagination for large datasets.
 * Never use for layout purposes.
 */
const meta = {
  title: 'Design System/Table',
  component: Table,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    page: { control: 'select', options: ['assets'] },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Always include a header row with clear, concise column labels. Never use Table for layout purposes. */
export const Assets: Story = { args: { page: 'assets' } };
