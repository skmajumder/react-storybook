import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Stack from "../components/Stack";

type StackProps = ComponentProps<typeof Stack> & {
  numberOfChildren: number;
};

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

type Story = StoryObj<StackProps>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

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
