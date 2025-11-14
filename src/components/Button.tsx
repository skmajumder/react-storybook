import type { CSSProperties, PropsWithChildren } from "react";

/**
 * Props for the Button component.
 *
 * @typedef {Object} ButtonProps
 * @property {() => void} [onClick] - Optional click handler function.
 * @property {"primary" | "secondary"} variant - Visual style variant of the button.
 * @property {"sm" | "md" | "lg"} size - Size of the button.
 * @property {"white" | "black" | "gray"} [color="white"] - Text color of the button. Defaults to "white".
 * @property {boolean} [disabled] - Whether the button is disabled.
 * @property {React.ReactNode} children - Content to be displayed inside the button.
 */
type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  color?: "white" | "black" | "gray";
  disabled?: boolean;
}>;

/**
 * A customizable button component with variant and size options.
 * Primary variant has blue background, secondary variant has gray background.
 * Text color can be customized using the color prop.
 *
 * @param {ButtonProps} props - The component props.
 * @param {React.ReactNode} props.children - Content to be displayed inside the button.
 * @param {() => void} [props.onClick] - Optional click handler function.
 * @param {"primary" | "secondary"} [props.variant="primary"] - Visual style variant of the button. Primary has blue background, secondary has gray background. Defaults to "primary".
 * @param {"sm" | "md" | "lg"} [props.size="md"] - Size of the button. Defaults to "md".
 * @param {"white" | "black" | "gray"} [props.color="white"] - Text color of the button. Defaults to "white".
 * @param {boolean} [props.disabled=false] - Whether the button is disabled. Defaults to false.
 *
 * @returns {JSX.Element} A styled button element.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" color="white" onClick={() => console.log('clicked')}>
 *   Click Me
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * <Button variant="secondary" size="lg" color="black" disabled>
 *   Disabled Button
 * </Button>
 * ```
 */
export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  color = "white",
  disabled = false,
}: ButtonProps) => {
  const variantStyles: Record<ButtonProps["variant"], CSSProperties> = {
    primary: {
      backgroundColor: "blue",
    },
    secondary: {
      backgroundColor: "gray",
    },
  };

  const sizeStyles: Record<ButtonProps["size"], CSSProperties> = {
    sm: {
      padding: "0.5rem",
    },
    md: {
      padding: "0.75rem",
    },
    lg: {
      padding: "1rem",
    },
  };

  return (
    <button
      style={{
        outline: "none",
        border: "none",
        cursor: "pointer",
        borderRadius: 10,
        color,
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
