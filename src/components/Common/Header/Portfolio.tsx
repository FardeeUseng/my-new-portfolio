'use client'

import { useState } from "react";
import { Layout } from "antd"
import { DownloadOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Link } from "@/i18n/routing";
import CustomButton from "../Button";
import thaiFlag from "@/assets/flag/Flag-Thailand.webp";
import englandFlag from "@/assets/flag/Flag-England.jpg";
import Image from "next/image";

export default function PortfolioHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Layout.Header
      style={{ background: "#fff", padding: 15 }}
      className="sticky top-8 w-full flex justify-between items-center z-50 shadow-lg"
    >
      <div
        className="text-2xl text-white font-bold bg-orange-600 inline-flex justify-center items-center w-10 h-10"
      >
        D.
      </div>

      <div className="flex">
        <Link href="/portfolio">
          <CustomButton type="text" className="text-thirdary text-lg">หน้าหลัก</CustomButton>
        </Link>
        <Link href="/portfolio/work">
          <CustomButton type="text" className="text-thirdary text-lg">ผลงาน</CustomButton>
        </Link>
        <Link href="/portfolio/activity">
          <CustomButton type="text" className="text-thirdary text-lg">กิจกรรม</CustomButton>
        </Link>
        <Link href="/portfolio/blog">
          <CustomButton type="text" className="text-thirdary text-lg">บล๊อก</CustomButton>
        </Link>
      </div>

      <div className="flex gap-x-5">
        <div className="flex gap-x-2">
          <CustomButton type="primary" icon={<DownloadOutlined />} className="font-semibold">
            Resume
          </CustomButton>
          <CustomButton type="primary" icon={<DownloadOutlined />} className="font-semibold">
            CV
          </CustomButton>
        </div>

        <div className="flex gap-x-2">
          <div className="flex bg-grey-200 rounded-md">
            {isDarkMode ? (
              <CustomButton
                type="text"
                icon={<MoonOutlined />}
                onClick={() => setIsDarkMode((prev) => !prev)}
              />
            ) : (
              <CustomButton
                type="text"
                icon={<SunOutlined />}
                onClick={() => setIsDarkMode((prev) => !prev)}
              />
            )}
          </div>
          <div className="flex items-center gap-x-2 h-8 bg-grey-200 rounded-md px-2">
            <Image src={thaiFlag} alt="thai flag" className="w-4 h-4 rounded-full" />
            <span className="font-bold text-thirdary">TH</span>
          </div>
        </div>
      </div>
    </Layout.Header>
  )
}
