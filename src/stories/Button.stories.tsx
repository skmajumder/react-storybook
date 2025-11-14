import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

/**
 * Storybook stories for the Button component.
 * This file contains various story configurations demonstrating different
 * button variants, sizes, and states for documentation and testing purposes.
 */

/**
 * Extended props for Button stories.
 * Extends the Button component props with a custom buttonText property
 * for easier story configuration.
 *
 * @typedef {Object} StoryProps
 * @property {string} buttonText - The text content to display inside the button.
 * @extends {ComponentProps<typeof Button>}
 */
type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

/**
 * Storybook meta configuration for the Button component.
 * Defines the component and default story settings.
 *
 * @type {Meta<StoryProps>}
 */
const meta: Meta<StoryProps> = {
  component: Button,
};

export default meta;

/**
 * Story type definition for Button stories.
 *
 * @typedef {StoryObj<StoryProps>} Story
 */
type Story = StoryObj<StoryProps>;

/**
 * Primary variant button story.
 * Demonstrates the default primary button style with medium size.
 *
 * @type {Story}
 */
export const Primary: Story = {
  args: {
    buttonText: "Primary Button",
    variant: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

/**
 * Secondary variant button story.
 * Demonstrates the secondary button style with medium size.
 *
 * @type {Story}
 */
export const Secondary: Story = {
  args: {
    buttonText: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

/**
 * Small size button story.
 * Demonstrates the button with small size variant.
 *
 * @type {Story}
 */
export const Small: Story = {
  args: {
    buttonText: "Small Button",
    variant: "primary",
    size: "sm",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

/**
 * Medium size button story.
 * Demonstrates the button with medium size variant.
 *
 * @type {Story}
 */

export const Medium: Story = {
  args: {
    buttonText: "Medium Button",
    variant: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

/**
 * Large size button story.
 * Demonstrates the button with large size variant.
 *
 * @type {Story}
 */
export const Large: Story = {
  args: {
    buttonText: "Large Button",
    variant: "primary",
    size: "lg",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

/**
 * Clickable button story.
 * Demonstrates a button with click interaction capability.
 *
 * @type {Story}
 */
export const Clickable: Story = {
  args: {
    buttonText: "Clickable Button",
    variant: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

/**
 * Disabled button story.
 * Demonstrates the button in a disabled state.
 *
 * @type {Story}
 */
export const Disabled: Story = {
  args: {
    buttonText: "Disabled Button",
    variant: "primary",
    size: "md",
    disabled: true,
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};
