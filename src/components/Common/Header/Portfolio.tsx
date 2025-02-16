'use client'

import { Link } from "@/i18n/routing"
import CustomButton from "../Button"
import { DownloadOutlined } from "@ant-design/icons"
import { Layout } from "antd"

export default function PortfolioHeader() {

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

      <div className="flex gap-x-2">
        <Link href="/portfolio">หน้าหลัก</Link>
        <Link href="/portfolio/work">ผลงาน</Link>
        <Link href="/portfolio/activity">กิจกรรม</Link>
        <Link href="/portfolio/blog">บล๊อก</Link>
      </div>

      <div className="flex gap-x-2">
        <CustomButton type="primary" icon={<DownloadOutlined />}>Resume</CustomButton>
        <CustomButton type="primary" icon={<DownloadOutlined />}>CV</CustomButton>
      </div>
    </Layout.Header>
  )
}
