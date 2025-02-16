"use client";

import { Typography } from "antd";
import styled from "styled-components";

interface CustomTypographyProps {
  $fontSize?: string;
  $fontWeight?: string;
  $color?: string;
  $lineHeight?: string;
}

const Title = styled(Typography.Title)<CustomTypographyProps>`
  font-size: ${({ $fontSize }) => $fontSize || "24px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "600"};
  color: ${({ $color }) => $color || "#000"};
  line-height: ${({ $lineHeight }) => ($lineHeight || "1.5") + "!important"};
  margin: 0 !important;
`;

const Text = styled(Typography.Text)<CustomTypographyProps>`
  font-size: ${({ $fontSize }) => $fontSize || "14px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "400"};
  color: ${({ $color }) => $color || "#000"};
  line-height: ${({ $lineHeight }) => ($lineHeight || "1.5") + "!important"};
  margin: 0 !important;
`;

const Paragraph = styled(Typography.Paragraph)<CustomTypographyProps>`
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "400"};
  color: ${({ $color }) => $color || "#000"};
  line-height: ${({ $lineHeight }) => ($lineHeight || "1.6") + "!important"};
  margin: 0 !important;
`;

export { Title, Text, Paragraph };
