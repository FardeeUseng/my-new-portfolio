'use client'

import { Dropdown, Layout, MenuProps } from "antd"
import { AlignLeftOutlined, DownloadOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import CustomButton from "../Button";
import thaiFlag from "@/assets/flag/Flag-Thailand.webp";
import englandFlag from "@/assets/flag/Flag-England.jpg";
import Image from "next/image";
import { useTheme } from "@/providers/ThemeProvider";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Sidebar from "../Sidbar";
import { motion } from "framer-motion";

export default function PortfolioHeader() {
  const [openSidbar, setOpenSidbar] = useState(false);

  const { toggleTheme, isDark } = useTheme();
  
  const local = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const allQueries = Object.fromEntries(searchParams.entries());

  const tNavbar = useTranslations("Navbar");

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

  const localItems: MenuProps['items'] = [
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
    <>
      <Layout.Header
        style={{ background: "none", padding: 0 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-between items-center h-14 bg-white dark:bg-grey-800 pl-2 pr-4 shadow-lg"
        >
          <div className="flex items-center">
            <CustomButton
              icon={<AlignLeftOutlined className="text-thirdary dark:text-white"
              style={{ fontSize: "20px" }} />}
              type="text"
              size="large"
              onClick={() => setOpenSidbar(true)}
            />
          </div>
          <div className="flex gap-x-2 items-center">
            <div className="flex md:hidden gap-x-2">
              <a href="/pdf/Resume-Fardee-Useng.pdf" download="Resume-Fardee-Useng.pdf">
                <CustomButton type="primary" className="font-semibold">
                  {tNavbar("resume")}
                </CustomButton>
              </a>
              <a href="/pdf/CV-Fardee-Useng.pdf" download="CV-Fardee-Useng.pdf">
                <CustomButton type="primary" className="font-semibold">
                  {tNavbar("cv")}
                </CustomButton>
              </a>
            </div>

            <div className="hidden md:flex gap-x-2">
              <a href="/pdf/CV-Fardee-Useng.pdf" download="CV-Fardee-Useng.pdf">
                <CustomButton type="primary" icon={<DownloadOutlined />} className="font-semibold">
                  {tNavbar("resume")}
                </CustomButton>
              </a>
              <a href="/pdf/CV-Fardee-Useng.pdf" download="CV-Fardee-Useng.pdf">
                <CustomButton type="primary" icon={<DownloadOutlined />} className="font-semibold">
                  {tNavbar("cv")}
                </CustomButton>
              </a>
            </div>

            <div className="flex gap-x-2 items-center">
              <div className="flex bg-grey-200 dark:bg-[#1d1f21] rounded-md shadow-md">
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
              <Dropdown menu={{ items: localItems }} placement="bottomRight" arrow>
                <div className="flex items-center gap-x-2 h-8 bg-grey-200 dark:bg-[#1d1f21] rounded-md px-2 cursor-pointer">
                  <Image src={local === "en" ? englandFlag : thaiFlag} alt="local flag" className="w-4 h-4 rounded-full" />
                  <span className="font-bold text-thirdary dark:text-white">{local.toUpperCase()}</span>
                </div>
              </Dropdown>
            </div>
          </div>
        </motion.div>
      </Layout.Header>

      <Layout.Header
        style={{ background: "none", padding: 0 }}
        className="sticky top-8 z-50 hidden md:block"
      >
        <motion.div
          className="w-full h-16 flex justify-between items-center shadow-lg rounded-sm bg-white dark:bg-grey-800 p-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="text-2xl text-white font-bold bg-orange-600 inline-flex justify-center items-center w-10 h-10"
          >
            D.
          </div>

          <div className="flex gap-x-1">
            {[
              { label: tNavbar("portfolio"), path: "/portfolio", disabled: false },
              { label: tNavbar("work"), path: "/work", disabled: true },
              { label: tNavbar("activity"), path: "/activity", disabled: true },
              { label: tNavbar("blog"), path: "/blog", disabled: false },
            ].map((item, index) => (
              <Link href={item.path} key={index}>
                <CustomButton
                  type={pathname === item.path ? "primary" : "text"}
                  danger={pathname === item.path}
                  className="text-thirdary text-lg font-semibold"
                  disabled={item.disabled}
                >
                  {item.label}
                </CustomButton>
              </Link>
            ))}
          </div>

          <div className="flex gap-x-5">
            <div className="flex gap-x-2">
              <a href="/pdf/Resume-Fardee-Useng.pdf" download="Resume-Fardee-Useng.pdf">
                <CustomButton type="primary" icon={<DownloadOutlined />} className="font-semibold">
                  {tNavbar("resume")}
                </CustomButton>
              </a>
              <a href="/pdf/CV-Fardee-Useng.pdf" download="CV-Fardee-Useng.pdf">
                <CustomButton type="primary" icon={<DownloadOutlined />} className="font-semibold">
                  {tNavbar("cv")}
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
              <Dropdown menu={{ items: localItems }} placement="bottomRight" arrow>
                <div className="flex items-center gap-x-2 h-8 bg-grey-200 rounded-md px-2 cursor-pointer">
                  <Image src={local === "en" ? englandFlag : thaiFlag} alt="local flag" className="w-4 h-4 rounded-full" />
                  <span className="font-bold text-thirdary">{local.toUpperCase()}</span>
                </div>
              </Dropdown>
            </div>
          </div>
        </motion.div>
      </Layout.Header>

      {openSidbar && <Sidebar open={openSidbar} onClose={setOpenSidbar} />}
    </>
  )
}
