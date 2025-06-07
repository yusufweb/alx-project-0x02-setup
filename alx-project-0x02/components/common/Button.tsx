import React from 'react';
import { ButtonProps, ButtonSize, ButtonShape } from '../../interfaces'; // Adjust path if needed

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium', // Default size
  shape = 'rounded-md', // Default shape
  onClick,
  className = '', // Allow external classes
  type = 'button', // Default type
  ...rest // Capture any other standard button props
}) => {
  // Define Tailwind classes based on size prop
  const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Define Tailwind classes based on shape prop
  const shapeClasses: Record<ButtonShape, string> = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  // Combine base styles with size, shape, and any custom classes
  const combinedClasses = `
    bg-blue-600 text-white font-semibold
    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
    transition-colors duration-200
    ${sizeClasses[size]}
    ${shapeClasses[shape]}
    ${className}
  `.trim(); // .trim() to remove leading/trailing whitespace

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      {...rest} // Spread any additional props
    >
      {children}
    </button>
  );
};

export default Button;