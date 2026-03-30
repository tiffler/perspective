import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Button } from './Button';
import { Chip } from './Chip';
import { InputField } from './InputField';

const YeetTheMoon = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--token-surface-section-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--token-font-default)',
    }}>
      <div style={{
        background: 'var(--token-surface-page)',
        borderRadius: '12px',
        padding: '32px',
        width: '100%',
        maxWidth: '520px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 400, color: 'var(--token-text-default)' }}>
            Yeet the moon
          </h2>
          <p style={{ margin: 0, fontSize: '16px', color: 'var(--token-text-subtle)' }}>
            These are my actual design system components!
          </p>
        </div>

        <Chip intent="default" style="halftone" label="Moon successfully yeeted 🌙" />

        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <InputField
              label="First name"
              placeholder="Placeholder"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <InputField
              label="Last name"
              placeholder="Placeholder"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <InputField
              label="Email"
              placeholder="Placeholder"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <InputField
              label="Phone number"
              placeholder="Placeholder"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <InputField
          label="Address"
          placeholder="Placeholder"
          variant="disabled"
        />

        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="outline" intent="default" label="Button" />
          <Button variant="solid" intent="default" label="Button" />
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: 'Examples/Yeet the Moon',
  component: YeetTheMoon,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof YeetTheMoon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
