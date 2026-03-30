# Perspective Design System

## Overview
A React + TypeScript component library built with Vite, Tailwind v4, and Storybook 10.
Components live in `src/stories/`. Prototypes are Storybook stories under `title: 'Examples/...'`.

## Figma
File key: `nordHMziieQgLbg3UKUudF`
Use the Figma MCP to inspect any component: paste the node URL and fetch with `mcp__figma__get_figma_data`.

---

## Prototyping

To create a new prototype, add a `.stories.tsx` file in `src/stories/` with `title: 'Examples/...'`.
Use `layout: 'fullscreen'` for page-level mockups, `layout: 'centered'` for component-level.

### Pattern
```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Button } from './Button';
// import other components as needed

const MyPage = () => (
  <div style={{ minHeight: '100vh', background: 'var(--token-surface-section-subtle)' }}>
    {/* layout here */}
  </div>
);

const meta = { title: 'Examples/My Page', component: MyPage, parameters: { layout: 'fullscreen' } } satisfies Meta<typeof MyPage>;
export default meta;
export const Default: Story = {};
```

---

## Design Tokens
Defined in `src/styles/component-tokens.css`. Always use these — never hardcode hex values.

### Text
| Token | Value |
|---|---|
| `--token-text-default` | #050505 |
| `--token-text-subtle` | #5c5c64 |
| `--token-text-muted` | #83838b |
| `--token-text-on-solid` | #f5f5f5 |
| `--token-text-danger` | #ae0000 |
| `--token-text-urgent` | #814a00 |
| `--token-text-always-white` | #ffffff |
| `--token-text-always-black` | #000000 |

### Surface
| Token | Value |
|---|---|
| `--token-surface-page` | #ffffff |
| `--token-surface-section-subtle` | #f5f5f5 |

### Action
| Token | Value |
|---|---|
| `--token-action-default` | #9751c2 (purple) |
| `--token-action-subtle` | #f6e9fd |
| `--token-action-disabled` | #e9e9ea |
| `--token-action-text-disabled` | #83838b |
| `--token-action-danger` | #ae0000 |
| `--token-action-warning` | #f79000 |
| `--token-action-warning-dark` | #f8a42d (hover) |

### Status
| Token | Value |
|---|---|
| `--token-status-default` | #7e3fa5 |
| `--token-status-danger` | #ae0000 |
| `--token-status-running` | #215aef |
| `--token-status-info-dark` | #53525a |
| `--token-status-success` | #008109 |
| `--token-status-urgent` | #f79000 |
| `--token-status-ht-default` | #f6e9fd |
| `--token-status-ht-danger` | #fce9e9 |
| `--token-status-ht-running` | #e0eaff |
| `--token-status-ht-info` | #fafafa |
| `--token-status-ht-success` | #ecffee |
| `--token-status-ht-urgent` | #fef2e0 |

### Font
| Token | Value |
|---|---|
| `--token-font-default` | Inter, sans-serif |
| `--token-font-icon` | Material Symbols Rounded |

### Component
| Token | Value |
|---|---|
| `--token-button-height` | 40px |
| `--token-button-radius` | 4px |
| `--token-button-text-size` | 14px |
| `--token-input-radius` | 8px |
| `--token-input-border` | #bababe |
| `--token-chip-radius` | 4px |

---

## Components

### Button
`import { Button } from './Button'`

```tsx
<Button
  variant="solid" | "outline" | "ghost"         // default: "solid"
  intent="default" | "destructive" | "warning"  // default: "default"
  state="default" | "disabled" | "loading"      // default: "default"
  label="Button"
  icon="add"                                     // any Material Symbol name, optional
  iconPosition="leading" | "trailing"            // default: "leading"
  onClick={fn}
/>
```

### InputField
`import { InputField } from './InputField'`

```tsx
<InputField
  variant="default" | "focus" | "error" | "disabled"  // default: "default"
  label="Label"
  placeholder="Input"
  value={string}
  multiline={false}   // renders a <textarea>
  rows={4}            // only for multiline
  onChange={fn}
/>
```
Focus state is automatic on focus/blur. Width is fluid — wrap in a container to constrain.

### Chip
`import { Chip } from './Chip'`

```tsx
<Chip
  intent="default" | "error" | "running" | "informational" | "success" | "urgent"
  style="solid" | "halftone" | "outline"
  label="Status"
/>
```
Icon is automatic based on intent.

### Control (Checkbox & Radio)
`import { Control } from './Control'`

```tsx
<Control
  type="checkbox" | "radio"   // default: "checkbox"
  checked={false}
  indeterminate={false}       // checkbox only
  disabled={false}
  label="Text label"
  subtext="Supporting text"   // optional
  onChange={fn}
/>
```
Manages its own state internally. Syncs if `checked` prop changes.

### Switch
`import { Switch } from './Switch'`

```tsx
<Switch
  checked={false}
  disabled={false}
  label="Text label"
  subtext="Supporting text"   // optional
  onChange={fn}
/>
```
Animates on toggle (200ms ease). Manages its own state internally.

---

## Naming Conventions
- Variants use `default` not `standard`
- Component files: PascalCase (`Button.tsx`)
- CSS files: kebab-case (`button.css`)
- Stories: `title: 'Design System/ComponentName'` for components, `title: 'Examples/PageName'` for prototypes
