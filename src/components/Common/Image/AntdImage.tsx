"use client";

import { Image, ImageProps } from "antd";
import styled from "styled-components";

interface Props extends ImageProps {
  $rounded?: boolean; // Custom prop for rounded corners
  $shadow?: boolean; // Custom prop for shadow effect
}

const StyledImage = styled(Image)<Props>`
  transition: all 0.3s ease-in-out;
  ${({ $rounded }) => $rounded && "border-radius: 12px;"}
  ${({ $shadow }) => $shadow && "box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);"}
`;

export default function AntdImage({ $rounded, $shadow, ...props }: Props) {
  return <StyledImage $rounded={$rounded} $shadow={$shadow} {...props} />;
}
