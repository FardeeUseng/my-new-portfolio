"use client";

import { Select, Tag } from "antd";
import type { SelectProps } from "antd";

type TagRender = SelectProps["tagRender"];

interface Props extends SelectProps {
  minWidth?: string | number;
}

export default function CustomSelect({ minWidth, ...rest }: Props) {
  const tagRender: TagRender = (props) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color="#4b6cb7"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginInlineEnd: 4 }}
      >
        <span className="capitalize font-medium">{label}</span>
      </Tag>
    );
  };

  return (
    <Select
      {...rest}
      tagRender={tagRender}
      style={{
        width: "100%",
        minWidth: minWidth,
      }}
    />
  );
}
