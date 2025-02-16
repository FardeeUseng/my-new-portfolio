'use client'

import { Link } from "@/i18n/routing"
import CustomButton from "../Button"

export default function PortfolioHeader() {
  return (
    <div className="flex justify-between items-center border-red">
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
        <CustomButton type="primary" >Download Resume</CustomButton>
        <CustomButton type="primary">Download CV</CustomButton>
      </div>
    </div>
  )
}
