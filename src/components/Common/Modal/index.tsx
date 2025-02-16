"use client";

import React from "react";
import { Modal, ModalProps } from "antd";
import { CloseOutlined, SaveOutlined } from "@ant-design/icons";

interface Props extends ModalProps {
  children: React.ReactNode;
}

export default function CustomModal({
  children,
  okText,
  cancelText,
  title,
  ...props
}: Props) {
  return (
    <Modal
      {...props}
      okButtonProps={{
        style: {
          // borderRadius: "50px",
          minWidth: "120px",
          fontSize: "16px",
          display: !okText ? "none" : undefined
        },
        icon: <SaveOutlined />
      }}
      cancelButtonProps={{
        style: {
          // borderRadius: "50px",
          minWidth: "120px",
          fontSize: "16px",
          display: !cancelText ? "none" : undefined,
        },
        danger: true,
        icon: <CloseOutlined /> 
      }}
      title={<p className="text-xl capitalize">{title}</p>}
      okText={okText}
      centered
    >
      {children}
    </Modal>
  );
}
