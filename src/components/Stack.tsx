import type { CSSProperties, PropsWithChildren } from "react";

/**
 * Props for the Stack component.
 *
 * @typedef {Object} StackProps
 * @property {"horizontal" | "vertical"} [orientation="horizontal"] - The layout orientation of the stack. Defaults to "horizontal".
 * @property {React.ReactNode} children - Content to be displayed inside the stack.
 */
type StackProps = PropsWithChildren<{
  orientation?: "horizontal" | "vertical";
}>;

/**
 * A flexible container component that arranges children in a horizontal or vertical stack.
 * Uses flexbox layout with a consistent gap between children.
 *
 * @param {StackProps} props - The component props.
 * @param {React.ReactNode} props.children - Content to be displayed inside the stack.
 * @param {"horizontal" | "vertical"} [props.orientation="horizontal"] - The layout orientation of the stack. Horizontal arranges items in a row, vertical arranges items in a column. Defaults to "horizontal".
 *
 * @returns {JSX.Element} A div element with flexbox styling applied.
 *
 * @example
 * ```tsx
 * <Stack orientation="horizontal">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Stack>
 * ```
 *
 * @example
 * ```tsx
 * <Stack orientation="vertical">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 * ```
 */
export default function Stack({
  children,
  orientation = "horizontal",
}: StackProps) {
  const orientationStyles: Record<"horizontal" | "vertical", CSSProperties> = {
    horizontal: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
    },
    vertical: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
  };

  return <div style={{ ...orientationStyles[orientation] }}>{children}</div>;
}
