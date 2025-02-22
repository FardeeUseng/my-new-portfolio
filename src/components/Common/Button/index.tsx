"use client";

import { Button, ButtonProps } from "antd";
import styled from "styled-components";

interface CustomButtonProps extends ButtonProps {
  $rounded?: boolean; // Custom prop for rounded corners
  $shadow?: boolean; // Custom prop for shadow effect
  $primaryColor?: string; // Custom prop for primary color
  $secondaryColor?: string; // Custom prop for secondary color
}

const StyledButton = styled(Button)<CustomButtonProps>`
  transition: all 0.3s ease-in-out;
  ${({ $rounded }) => $rounded && "border-radius: 8px;"}
  ${({ $shadow }) => $shadow && "box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);"}
  ${({ $primaryColor }) => $primaryColor && `background-color: ${$primaryColor};`}
  ${({ $secondaryColor }) => $secondaryColor && `color: ${$secondaryColor};`}
  &:hover {
    ${({ $primaryColor }) => $primaryColor && `background-color: darken(${ $primaryColor }, 10%);`}
    ${({ $secondaryColor }) => $secondaryColor && `color: darken(${ $secondaryColor }, 10%);`}
  }
`;

export default function CustomButton({
  $rounded,
  $shadow,
  $primaryColor,
  $secondaryColor,
  ...props
}: CustomButtonProps) {
  return (
    <StyledButton
      $rounded={$rounded}
      $shadow={$shadow}
      $primaryColor={$primaryColor}
      $secondaryColor={$secondaryColor}
      {...props}
    />
  );
}
