import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Stack from "../components/Stack";

/**
 * Storybook stories for the Stack component.
 * This file contains various story configurations demonstrating different
 * stack orientations and child configurations for documentation and testing purposes.
 */

/**
 * Extended props for Stack stories.
 * Extends the Stack component props with a custom numberOfChildren property
 * for easier story configuration.
 *
 * @typedef {Object} StackProps
 * @property {number} numberOfChildren - The number of children to render in the stack.
 * @extends {ComponentProps<typeof Stack>}
 */
type StackProps = ComponentProps<typeof Stack> & {
  numberOfChildren: number;
};

/**
 * Storybook meta configuration for the Stack component.
 * Defines the component and default story settings with interactive controls.
 *
 * @type {Meta<StackProps>}
 */
const meta: Meta<StackProps> = {
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the stack",
    },
    numberOfChildren: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      description: "The number of children in the stack",
    },
  },
  args: {
    numberOfChildren: 5,
  },
};

export default meta;

/**
 * Story type definition for Stack stories.
 *
 * @typedef {StoryObj<StackProps>} Story
 */
type Story = StoryObj<StackProps>;

/**
 * Horizontal orientation stack story.
 * Demonstrates the stack with horizontal layout (items arranged in a row).
 *
 * @type {Story}
 */
export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

/**
 * Vertical orientation stack story.
 * Demonstrates the stack with vertical layout (items arranged in a column).
 *
 * @type {Story}
 */
export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

/**
 * Helper function to create a specified number of child elements for stack stories.
 * Each child is a red square div with fixed dimensions.
 *
 * @param {number} numberOfChildren - The number of child elements to create.
 * @returns {JSX.Element[]} An array of div elements to be used as stack children.
 */
function createChildren(numberOfChildren: number) {
  return Array(numberOfChildren)
    .fill(null)
    .map((_, index) => {
      return (
        <div
          key={index}
          style={{ width: 100, height: 100, backgroundColor: "red" }}
        />
      );
    });
}
