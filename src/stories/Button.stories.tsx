import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Primary Button",
    variant: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Secondary: Story = {
  args: {
    buttonText: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Small: Story = {
  args: {
    buttonText: "Small Button",
    variant: "primary",
    size: "sm",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Large: Story = {
  args: {
    buttonText: "Large Button",
    variant: "primary",
    size: "lg",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Clickable: Story = {
  args: {
    buttonText: "Clickable Button",
    variant: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Disabled: Story = {
  args: {
    buttonText: "Disabled Button",
    variant: "primary",
    size: "md",
    disabled: true,
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};
