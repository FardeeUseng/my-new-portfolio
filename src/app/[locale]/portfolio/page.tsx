"use client"

import React, { useState } from 'react'
import CustomButton from '@/components/Common/Button'
import { Title } from '@/components/Common/Typography'
import { Col, Row } from 'antd'
import Image from 'next/image'
import profile from "@/assets/profile/profile2.png";
import info1 from "@/assets/infographic/infographic-1.png";
import info2 from "@/assets/infographic/infographic-2.png";
import infoProfile2 from "@/assets/profile/info-profile-2.png";
import reactIcon from "@/assets/icon/reactjs-icon.webp";
import nextIcon from "@/assets/icon/nextjs-icon.jpg";
import jsIcon from "@/assets/icon/js-icon.png";
import tsIcon from "@/assets/icon/ts-icon.png";
import antdIcon from "@/assets/icon/antd-icon.png";
import muiIcon from "@/assets/icon/mui-icon.png";
import tailwindIcon from "@/assets/icon/tailwind-icon.jpg";
import reduxIcon from "@/assets/icon/redux-icon.png";
import reactQueryIcon from "@/assets/icon/react-query-icon.png";
import gitIcon from "@/assets/icon/git-icon.webp";
import { GithubOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons'
import { useTranslations } from 'next-intl'
import ContactMe from '@/components/ContactMe'

export default function Page() {
  const [openContactMe, setOpenContactMe] = useState(false);

  const tPort = useTranslations("Portfolio");
  const tIntro = useTranslations("Portfolio.introduction");
  const tAboutMe = useTranslations("Portfolio.about_me");
  const tWork = useTranslations("Portfolio.work_experience");
  return (
    <main>
      <section className="relative flex flex-col md:mt-8 min-h-screen md:min-h-[calc(100vh-95px)]">
        <div className="absolute bottom-0 left-0">
          <Image src={info1} alt="info1" height={250} className="h-40 lg:h-60 w-28 lg:w-36" />
        </div>
        <div className="absolute top-0 right-0">
          <Image src={info2} alt="info1" height={250} className="h-40 lg:h-60 w-28 lg:w-36" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-y-12">
          <div className="flex justify-center bg-blue-300 rounded-full">
            <span className="text-thirdary text-base text-center px-3 py-1 text-main-gradient font-bold">
              {tIntro("wellcome_to_my_portfolio")}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-x-5 xl:gap-x-14 w-full">
            <div className="flex-1 flex flex-col justify-center items-center lg:items-end gap-y-3">
              <div className="my-2 text-center lg:text-end">
                <h1 className="text-thirdary dark:text-white text-2xl lg:text-3xl font-bold my-2">{tIntro("hi_i_am")}</h1>
                <h1 className="text-thirdary dark:text-white text-3xl lg:text-4xl font-bold my-2">
                  {tIntro("fardee_useng")}
                </h1>
                <h1 className="text-main-gradient text-4xl md:text-5xl font-bold lg:text-5xl mt-5 lg:mt-2">
                  {tIntro("frontend_developer")}
                </h1>
                <h6 className="text-main-gradient mt-2 md:text-base font-semibold">{tIntro("skills")}</h6>
              </div>

              <div className="flex gap-3 justify-center">
                <CustomButton type="primary" onClick={() => setOpenContactMe(true)}>
                  {tIntro("contact_me")}
                </CustomButton>
                <CustomButton type="primary" disabled>{tIntro("my_work")}</CustomButton>
              </div>

              <div className="flex gap-3 justify-center">
                <a
                  href="https://github.com/FardeeUseng"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-xl text-gray-700 hover:text-blue-500 transition-colors"
                >
                  <GithubOutlined />
                </a>
                <a
                  href="https://www.linkedin.com/in/fardee-useng-060b88264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-700 hover:text-blue-500 transition-colors"
                >
                  <LinkedinOutlined />
                </a>
                <a
                  href="https://www.linkedin.com/in/fardee-useng-060b88264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-700 hover:text-blue-500 transition-colors"
                >
                  <MediumOutlined />
                </a>
              </div>
            </div>

            <div className="hidden lg:flex gap-3 flex-[0.8]">
              <Image src={infoProfile2} alt='profile' height={300} className="h-80" />
              <div className="flex flex-col justify-end gap-y-3">
                <Image src={jsIcon} alt="javaScript" className="rounded-sm shadow-lg w-6 xl:w-8 h-6 xl:h-8" />
                <Image src={tsIcon} alt="typeScript" className="rounded-sm shadow-lg w-6 xl:w-8 h-6 xl:h-8" />
                <Image src={reactIcon} alt="reactJs" className="rounded-sm shadow-lg w-6 xl:w-8 h-6 xl:h-8" />
                <Image src={nextIcon} alt="nextJs" className="rounded-sm shadow-lg w-6 xl:w-8 h-6 xl:h-8" />
              </div>
              <div className="flex flex-col justify-end gap-y-3">
                <Image src={antdIcon} alt="ant design" className="rounded-sm shadow-lg w-6 xl:w-8 h-6 xl:h-8" />
                <Image src={muiIcon} alt="material ui" className="rounded-sm shadow-lg w-6 xl:w-8 h-6 xl:h-8" />
                <Image src={tailwindIcon} alt="tailwind" className="rounded-sm shadow-lg w-6 xl:w-8 h-6 xl:h-8" />
              </div>
              <div className="flex flex-col justify-end gap-y-3">
                <Image src={reduxIcon} alt="redux" className="rounded-sm shadow-lg w-6 xl:w-8 h-6 xl:h-8" />
                <Image src={reactQueryIcon} alt="react query" className="rounded-sm shadow-lg w-6 xl:w-8 h-6 xl:h-8" />
              </div>
              <div className="flex flex-col justify-end gap-y-3">
                <Image src={gitIcon} alt="git version control" className="rounded-full shadow-lg w-6 xl:w-8 h-6 xl:h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex gap-x-10 my-10 lg:my-20 mx-5 lg:mx-0">
        <div className="flex-[0.7] hidden md:flex justify-center">
          <div
            className="bg-accent-content w-72 flex justify-center"
            style={{ borderRadius: "62% 38% 65% 35% / 57% 58% 42% 43%" }}
          >
            <Image src={profile} alt='profile' height={250} className="h-80 w-48 object-cover" />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-y-10">
          <div className="flex flex-col gap-y-5">
            <h1 className="text-3xl lg:text-5xl text-center text-thirdary dark:text-white font-bold">
              {tAboutMe("title")}
            </h1>
            <p className="text-center text-base md:text-lg">
              {tAboutMe("description")}
            </p>
          </div>

          {/* <Flex>
            <div className="flex-[0.5] flex items-center justify-center">
              <Title className="text-center">Education</Title>
            </div>
            <div className="flex-1 flex flex-col gap-y-3">
              <div className="flex items-center gap-4">
                <div>
                  <Image src={ftu} alt="ftu" width={70} />
                </div>
                <div>
                  <Title level={3}>2017-2018</Title>
                  <Paragraph>English Language Preparation, Fatoni University.</Paragraph>
                </div>
              </div>
              <div className="border-2 border-orange-700" />
              <div className="flex items-center gap-4">
                <div>
                  <Image src={ftu} alt="ftu" width={70} />
                </div>
                <div>
                  <Title level={3}>2018-2022</Title>
                  <Paragraph>Bachelor's Degree in IT (Information Technology), Fatoni University.</Paragraph>
                </div>
              </div>
            </div>
          </Flex>

          <Flex>
            <div className="flex-[0.5] flex items-center justify-center">
              <Title className="text-center">Language</Title>
            </div>
            <div className="flex-1 flex flex-col gap-y-3">
              <div className="flex items-center gap-4">
                <div>
                  <Image src={ftu} alt="ftu" width={40} />
                </div>
                <div>
                  <Title level={3}>Thai: Native</Title>
                </div>
              </div>
              <div className="border-2 border-orange-700" />
              <div className="flex items-center gap-4">
                <div>
                  <Image src={ftu} alt="ftu" width={40} />
                </div>
                <div>
                  <Title level={3}>English: Proficient</Title>
                </div>
              </div>
              <div className="border-2 border-orange-700" />
              <div className="flex items-center gap-4">
                <div>
                  <Image src={ftu} alt="ftu" width={40} />
                </div>
                <div>
                  <Title level={3}>Malay: Proficient</Title>
                </div>
              </div>
            </div>
          </Flex> */}
        </div>
      </section>

      <section className="my-10 lg:my-20 mx-5 lg:mx-0">
        <h1 className="text-3xl lg:text-5xl text-center text-thirdary dark:text-white font-bold">{tWork("title")}</h1>
        <Row gutter={[30, 30]} className="mt-5">
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div className="flex gap-x-5">
              <div className="hidden lg:block lg:mt-2">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXj3_B7pEuxj2DxAyPlNqPvJ4lbQr-9p1mQQ&s"
                  alt="tiger" 
                  className="w-16 min-w-16 h-16 min-h-16 object-cover rounded-full"
                  width={16}
                  height={16}
                />
              </div>
              <div>
                <Title level={2}>{tWork("frontend_developer_at_ptt.work_range")}</Title>
                <Title level={5}>{tWork("frontend_developer_at_ptt.title")}</Title>
                <ul className="list-disc pl-5 mt-5 text-base md:text-lg">
                  {[
                    tWork("frontend_developer_at_ptt.list_1"),
                    tWork("frontend_developer_at_ptt.list_2"),
                    tWork("frontend_developer_at_ptt.list_3"),
                    tWork("frontend_developer_at_ptt.list_4")
                  ].map((li, index) => (
                    <li key={index}>
                      <p>{li}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div className="flex gap-x-5">
              <div className="hidden lg:block lg:mt-2">
                <Image
                  src="https://media.licdn.com/dms/image/D560BAQGHzrTlP1mddQ/company-logo_200_200/0/1685415167802?e=2147483647&v=beta&t=Bqo1jfT_2yPHC4dgW--DyMorq0hl8KR_Hb18t5mySKU"
                  alt="tiger" 
                  className="w-16 min-w-16 h-16 min-h-16 object-cover rounded-full"
                  width={16}
                  height={16}
                />
              </div>
              <div>
                <Title level={2}>{tWork("fullstack_developer_at_ics.work_range")}</Title>
                <Title level={5}>{tWork("fullstack_developer_at_ics.title")}</Title>

                <ul className="list-disc pl-5 mt-5 text-base md:text-lg">
                  {[
                    tWork("fullstack_developer_at_ics.list_1"),
                    tWork("fullstack_developer_at_ics.list_2"),
                    tWork("fullstack_developer_at_ics.list_3"),
                    tWork("fullstack_developer_at_ics.list_4"),
                    tWork("fullstack_developer_at_ics.list_5")
                  ].map((li, index) => (
                    <li key={index}>
                      <p>{li}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div className="flex gap-x-5">
              <div className="hidden lg:block lg:mt-2">
                <Image
                  src="https://media.licdn.com/dms/image/D560BAQGHzrTlP1mddQ/company-logo_200_200/0/1685415167802?e=2147483647&v=beta&t=Bqo1jfT_2yPHC4dgW--DyMorq0hl8KR_Hb18t5mySKU"
                  alt="tiger" 
                  className="w-16 min-w-16 h-16 min-h-16 object-cover rounded-full"
                  width={16}
                  height={16}
                />
              </div>
              <div>
                <Title level={2}>{tWork("frontend_developer_at_ics.work_range")}</Title>
                <Title level={5}>{tWork("frontend_developer_at_ics.title")}</Title>
                <ul className="list-disc pl-5 mt-5">
                  <li>
                    <Title level={4}>{tWork("frontend_developer_at_ics.pos_project.title")}</Title>
                    <ul className="list-decimal pl-5 text-base md:text-lg">
                      {[
                        tWork("frontend_developer_at_ics.pos_project.list_1"),
                        tWork("frontend_developer_at_ics.pos_project.list_2"),
                        tWork("frontend_developer_at_ics.pos_project.list_3"),
                        tWork("frontend_developer_at_ics.pos_project.list_4"),
                        tWork("frontend_developer_at_ics.pos_project.list_5")
                      ].map((li, index) => (
                        <li key={index}>
                          <p>{li}</p>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li>
                    <Title level={4}>{tWork("frontend_developer_at_ics.hashu_project.title")}</Title>
                    <ul className="list-decimal pl-5 text-base md:text-lg">
                      {[
                        tWork("frontend_developer_at_ics.hashu_project.list_1"),
                        tWork("frontend_developer_at_ics.hashu_project.list_2"),
                        tWork("frontend_developer_at_ics.hashu_project.list_3"),
                        tWork("frontend_developer_at_ics.hashu_project.list_4"),
                        tWork("frontend_developer_at_ics.hashu_project.list_5")
                      ].map((li, index) => (
                        <li key={index}>
                          <p>{li}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className="my-10 lg:my-20 mx-5 lg:mx-0">
        <h1 className="text-3xl lg:text-5xl text-center text-thirdary dark:text-white font-bold">
          {tPort("skills_technologies")}
        </h1>
        <Row gutter={[30, 30]} className="mt-5  sm:pl-24">
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Title level={3}>Frontend Development</Title>
            <ul className="list-disc pl-5 mt-5 text-base md:text-lg">
              {[
                "Languages: JavaScript (ES6+), TypeScript, HTML",
                "Frameworks & Libraries: React.js, Next.js",
                "State Management: Redux, Redux Toolkit, React Query",
                "UI & Styling: Material-UI (MUI), Ant Design, Tailwind CSS, Bootstrap, SCSS, CSS, styled-components",
                "Charts & Data Visualization: Chart.js",
                "Animations: Framer Motion"
              ].map((li, index) => (
                <li key={index}>
                  <p>{li}</p>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Title level={3}>API Development</Title>
            <ul className="list-disc pl-5 mt-5 text-base md:text-lg">
              {[
                "Data Fetching & API Handling: Axios",
                "Authentication & Security: NextAuth.js",
                "Containerization: Docker"
              ].map((li, index) => (
                <li key={index}>
                  <p>{li}</p>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Title level={3}>Tools & Workflow</Title>
            <ul className="list-disc pl-5 mt-5 text-base md:text-lg">
              {[
                "Design & Prototyping: Figma",
                "API Testing & Development: Postman",
                "Version Control: Git, GitHub and Gitlab"
              ].map((li, index) => (
                <li key={index}>
                  <p>{li}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </section>

      {openContactMe && <ContactMe open={openContactMe} onClose={setOpenContactMe} />}
    </main>
  )
}
