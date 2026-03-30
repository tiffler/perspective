import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Card } from './Card';

const meta = {
  title: 'Design System/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Rule: "Use as a container to group related content, metadata, and actions for a single subject or entity."
 * Rule: "Always apply Card-specific spacing tokens (padding and gap) for internal layout—never hardcode pixel values inside a Card."
 */
export const Default: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <div>
        <h3>Card Title</h3>
        <p>This is a default Card grouping related content for a single entity.</p>
      </div>
    </Card>
  ),
};

/**
 * Rule: "Place the primary action (if any) in a consistent location—typically the card footer or a prominent button slot."
 * Rule: "Never place more than one primary action inside a Card."
 */
export const WithPrimaryAction: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <div>
        <h3>Project Summary</h3>
        <p>Status: Active</p>
        <p>Last updated: 2 hours ago</p>
      </div>
      <footer>
        <button type="button">View Details</button>
      </footer>
    </Card>
  ),
};

/**
 * Rule: "Use Card when content benefits from visual grouping and separation from surrounding context."
 */
export const WithMetadata: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <div>
        <h3>User Profile</h3>
        <p>Name: Jane Doe</p>
        <p>Email: jane.doe@example.com</p>
        <p>Role: Administrator</p>
        <p>Joined: January 2024</p>
      </div>
    </Card>
  ),
};

/**
 * Demonstrates a Card used to display tabular data with a header row.
 * Description rule: "Always include a header row to label each column."
 */
export const WithTabularData: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <h3>Monthly Revenue</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px' }}>Month</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Revenue</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Growth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px' }}>January</td>
            <td style={{ padding: '8px' }}>$12,400</td>
            <td style={{ padding: '8px' }}>+5%</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}>February</td>
            <td style={{ padding: '8px' }}>$14,200</td>
            <td style={{ padding: '8px' }}>+14.5%</td>
          </tr>
          <tr>
            <td style={{ padding: '8px' }}>March</td>
            <td style={{ padding: '8px' }}>$13,800</td>
            <td style={{ padding: '8px' }}>-2.8%</td>
          </tr>
        </tbody>
      </table>
    </Card>
  ),
};

/**
 * Rule: "Never nest a Card inside another Card—use a flat list or table for nested data structures."
 * This story shows a Card with a simple content-only layout, as minimal cards should still
 * provide grouped context rather than wrapping isolated text.
 * Rule: "Never use Card to wrap a single isolated piece of text or data that would be better served by inline presentation."
 */
export const MinimalContent: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <h3>Notification Settings</h3>
      <p>Email notifications are enabled. Push notifications are disabled.</p>
      <p>Digest frequency: Weekly</p>
    </Card>
  ),
};

/**
 * Rule: "Never use Card as a full-page layout container—it is a content grouping element, not a page scaffold."
 * Rule: "Never use Card for navigation between pages or views—use navigation components instead."
 * This story demonstrates a Card with rich, multi-section content appropriate for content grouping.
 */
export const RichContent: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <header>
        <h3>Order #10482</h3>
        <span>Placed on March 15, 2024</span>
      </header>
      <div>
        <p><strong>Customer:</strong> John Smith</p>
        <p><strong>Items:</strong> 3</p>
        <p><strong>Total:</strong> $249.99</p>
        <p><strong>Status:</strong> Shipped</p>
      </div>
      <footer>
        <button type="button">Track Shipment</button>
      </footer>
    </Card>
  ),
};
