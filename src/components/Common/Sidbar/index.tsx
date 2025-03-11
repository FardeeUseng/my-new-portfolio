"use client"

import { Drawer } from "antd";
import CustomButton from "../Button";
import { CloseOutlined } from "@ant-design/icons";
import { Link, usePathname } from "@/i18n/routing";
import styled, { css } from "styled-components";
import { useTheme } from "@/providers/ThemeProvider";

type Props = {
  open: boolean;
  onClose: (value: boolean) => void;
}

const StyledLink = styled(Link)<{ $isActive: boolean, $isDark: boolean }>`
  ${props => {
    if (props.$isActive) {
      return css`
        background-color: ${props.$isDark ? "#fff" : "#203162"};
        padding: 3px 8px;
        border-radius: 5px;
        h3 {
          color: ${props.$isDark ? "#203162" : "#fff"};
        }
      `
    }

    return css`
      h3 {
        color: ${props.$isDark ? "#fff" : "#203162"};
      }
    `
  }}
`

export default function Sidebar({ open, onClose } : Props) {
  const pathname = usePathname();
  const { isDark } = useTheme();

  return (
    <Drawer
      title={(
        <div className="flex justify-between items-center">
          <div
            className="text-lg text-white font-bold bg-orange-600 inline-flex justify-center items-center w-6 h-6"
          >
            D.
          </div>
          <CustomButton type="text" icon={<CloseOutlined />} onClick={() => onClose(false)} />
        </div>
      )}
      placement="left"
      closable={false}
      onClose={() => onClose(false)}
      open={open}
      key="left"
      width={250}
    >
      <div className="flex flex-col gap-y-2">
        <StyledLink href="/portfolio" $isActive={pathname === "/portfolio"} $isDark={isDark}>
          <h3 className="text-xl text-thirdary">หน้าหลัก</h3>
        </StyledLink>
        <StyledLink href="/work" $isActive={pathname === "/work"} $isDark={isDark}>
          <h3 className="text-xl text-thirdary">ผลงาน</h3>
        </StyledLink>
        <StyledLink href="/activity" $isActive={pathname === "/activity"} $isDark={isDark}>
          <h3 className="text-xl text-thirdary">กิจกรรม</h3>
        </StyledLink>
        <StyledLink href="/blog" $isActive={pathname === "/blog"} $isDark={isDark}>
          <h3 className="text-xl text-thirdary">บล๊อก</h3>
        </StyledLink>
      </div>
    </Drawer>
  )
}
