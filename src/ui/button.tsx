import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import styles from "./Button.module.css"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'accent' | 'destructive' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

// Function to maintain compatibility with existing components
export const buttonVariants = ({ 
  variant = 'primary', 
  size = 'default',
  className = ''
}: {
  variant?: ButtonProps['variant'],
  size?: ButtonProps['size'],
  className?: string
} = {}) => {
  return [
    styles.button,
    styles[variant as string],
    styles[size as string],
    className
  ].filter(Boolean).join(' ');
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'default', 
    asChild = false, 
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Combine the CSS classes
    const buttonClasses = buttonVariants({ variant, size, className });
    
    return (
      <Comp
        className={buttonClasses}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
