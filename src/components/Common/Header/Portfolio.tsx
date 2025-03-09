'use client'

import { Dropdown, Layout, MenuProps } from "antd"
import { DownloadOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import CustomButton from "../Button";
import thaiFlag from "@/assets/flag/Flag-Thailand.webp";
import englandFlag from "@/assets/flag/Flag-England.jpg";
import Image from "next/image";
import { useTheme } from "@/providers/ThemeProvider";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function PortfolioHeader() {

  const { toggleTheme, isDark } = useTheme();
  
  const local = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const allQueries = Object.fromEntries(searchParams.entries());

  const handleChangeaLocal = (newLocal: string) => {
    router.replace(
      {
        pathname: pathname,
        query: allQueries,
      },
      {
        locale: newLocal,
      }
    );
  }

  const items: MenuProps['items'] = [
    {
      key: 'option-local',
      label: (
        <div
          className="flex items-center gap-x-2 h-8 w-full rounded-md px-2"
          onClick={() => handleChangeaLocal(local === "th" ? "en" : "th")}
        >
          <Image
            src={local === "th" ? englandFlag : thaiFlag}
            alt="option local flag"
            className="w-4 h-4 rounded-full object-cover"
          />
          <span className="font-bold text-thirdary">{local === "th" ? "EN" : "TH"}</span>
        </div>
      ),
    },
  ];

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
        <Link href="/work">
          <CustomButton type="text" className="text-thirdary text-lg">ผลงาน</CustomButton>
        </Link>
        <Link href="/activity">
          <CustomButton type="text" className="text-thirdary text-lg">กิจกรรม</CustomButton>
        </Link>
        <Link href="/blog">
          <CustomButton type="text" className="text-thirdary text-lg">บล๊อก</CustomButton>
        </Link>
      </div>

      <div className="flex gap-x-5">
        <div className="flex gap-x-2">
          <a href="/pdf/CV-Fardee-Useng.pdf" download="CV-Fardee-Useng.pdf">
            <CustomButton type="primary" icon={<DownloadOutlined />} className="font-semibold">
              Resume
            </CustomButton>
          </a>
          <a href="/pdf/CV-Fardee-Useng.pdf" download="CV-Fardee-Useng.pdf">
            <CustomButton type="primary" icon={<DownloadOutlined />} className="font-semibold">
              CV
            </CustomButton>
          </a>
        </div>

        <div className="flex gap-x-2 items-center">
          <div className="flex bg-grey-200 rounded-md">
            {isDark ? (
              <CustomButton
                type="text"
                icon={<MoonOutlined />}
                onClick={toggleTheme}
              />
            ) : (
              <CustomButton
                type="text"
                icon={<SunOutlined />}
                onClick={toggleTheme}
              />
            )}
          </div>
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <div className="flex items-center gap-x-2 h-8 bg-grey-200 rounded-md px-2 cursor-pointer">
              <Image src={local === "en" ? englandFlag : thaiFlag} alt="local flag" className="w-4 h-4 rounded-full" />
              <span className="font-bold text-thirdary">{local.toUpperCase()}</span>
            </div>
          </Dropdown>
        </div>
      </div>
    </Layout.Header>
  )
}
