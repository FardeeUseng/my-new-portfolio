import React from 'react'
import CustomButton from '@/components/Common/Button'
import { Paragraph, Title } from '@/components/Common/Typography'
import { Col, Flex, Row } from 'antd'
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
import postmanIcon from "@/assets/icon/postman-icon.svg";
import gitIcon from "@/assets/icon/git-icon.webp";
// import ftu from "@/assets/education/ftu-logo.png";
import { GithubOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons'

export default function Page() {
  return (
    <main>
      <section className="relative flex flex-col mt-8 min-h-[calc(100vh-95px)]">
        <div className="absolute bottom-0 left-0">
          <Image src={info1} alt="info1" height={250} />
        </div>
        <div className="absolute top-0 right-0">
          <Image src={info2} alt="info1" height={250} />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-y-12">
          <div className="flex justify-center">
            <span className='text-thirdary text-base text-center bg-blue-300 rounded-full px-3 py-1'>
              ขอต้อนรับสู่พอร์ตโฟลีโอ
            </span>
          </div>
          <div className="flex justify-between items-center gap-x-14 w-full">
            <div className="flex-1 flex flex-col justify-center items-end gap-y-3">
              <div className="my-2 text-end">
                <Title $color="#203162" level={2}>สวัสดีครับ, ผม</Title>
                <Title $color="#203162">นาย ฟัรดี อูเซ็ง</Title>
                <Title className="text-main-gradient" style={{ fontSize: "50px" }}>Frontend Developer</Title>
                <Title className="text-main-gradient" level={5}>ReactJs, NextJs, JavaScript and TypeScript</Title>
              </div>

              <Flex justify="end" gap={10}>
                <CustomButton type="primary">ติดต่อ</CustomButton>
                <CustomButton type="primary">ผลงาน</CustomButton>
              </Flex>

              <Flex justify="end" gap={10}>
                <CustomButton type="link" icon={<GithubOutlined />} />
                <CustomButton type="link" icon={<MediumOutlined />} />
                <CustomButton type="link" icon={<LinkedinOutlined />} />
              </Flex>
            </div>

            <div className="flex-[0.8] flex gap-3">
              <Image src={infoProfile2} alt='profile' height={300} />
              <div className="flex flex-col justify-end gap-y-3">
                <Image src={jsIcon} alt="javaScript" className="rounded-sm shadow-lg w-8 h-8" />
                <Image src={tsIcon} alt="typeScript" className="rounded-sm shadow-lg w-8 h-8" />
                <Image src={reactIcon} alt="reactJs" className="rounded-sm shadow-lg w-8 h-8" />
                <Image src={nextIcon} alt="nextJs" className="rounded-sm shadow-lg w-8 h-8" />
              </div>
              <div className="flex flex-col justify-end gap-y-3">
                <Image src={antdIcon} alt="ant design" className="rounded-sm shadow-lg w-8 h-8" />
                <Image src={muiIcon} alt="material ui" className="rounded-sm shadow-lg w-8 h-8" />
                <Image src={tailwindIcon} alt="tailwind" className="rounded-sm shadow-lg w-8 h-8" />
              </div>
              <div className="flex flex-col justify-end gap-y-3">
                <Image src={reduxIcon} alt="redux" className="rounded-sm shadow-lg w-8 h-8" />
                <Image src={reactQueryIcon} alt="react query" className="rounded-sm shadow-lg w-8 h-8" />
              </div>
              <div className="flex flex-col justify-end gap-y-3">
                <Image src={gitIcon} alt="git version control" className="rounded-full shadow-lg w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex my-20 gap-x-10">
        <div className="flex-[0.7] flex justify-center">
          <Image src={profile} alt='profile' height={250} width={250} />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-y-10">
          <div className="flex flex-col gap-y-5">
            <Title className="text-center">About Me</Title>
            <Paragraph className="text-center">
              I am a Front-End Developer with 2.6 years of experience specializing in JavaScript, TypeScript, React, and Next.js. Passionate about building user-friendly and high-performance web applications, I enjoy crafting intuitive UI/UX experiences and optimizing front-end performance. Always eager to learn and stay updated with the latest technologies in the web development ecosystem.
            </Paragraph>
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

      <section className="my-20">
        <Title className="text-center">Work Experience</Title>
        <Row gutter={[30, 30]} className="mt-5">
          <Col span={12}>
            <div className="flex gap-x-5">
              <div className="mt-2">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXj3_B7pEuxj2DxAyPlNqPvJ4lbQr-9p1mQQ&s"
                  alt="tiger" 
                  className="w-16 min-w-16 h-16 min-h-16 object-cover rounded-full"
                  width={16}
                  height={16}
                />
              </div>
              <div>
                <Title level={2}>May 2024 - APR 2025:</Title>
                <Title level={5}> Front-End Developer at PTT Digital Solution (Outsourced Onsite)</Title>
                <ul className="list-disc pl-5 mt-5">
                  {[
                    "Developed and maintained a POS BackOffice Web Application for a large-scale retail business.",
                    "Built the front-end using Next.js and TypeScript, ensuring scalability and performance.",
                    "Worked closely with back-end developers and business teams (without a dedicated UX/UI team) to design and implement UI components based on business requirements.",
                    "Integrated various APIs to support POS operations, data analytics, and real-time updates."
                  ].map((li, index) => (
                    <li key={index}>
                      <Paragraph>{li}</Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>

          <Col span={12}>
            <div className="flex gap-x-5">
              <div className="mt-2">
                <Image
                  src="https://media.licdn.com/dms/image/D560BAQGHzrTlP1mddQ/company-logo_200_200/0/1685415167802?e=2147483647&v=beta&t=Bqo1jfT_2yPHC4dgW--DyMorq0hl8KR_Hb18t5mySKU"
                  alt="tiger" 
                  className="w-16 min-w-16 h-16 min-h-16 object-cover rounded-full"
                  width={16}
                  height={16}
                />
              </div>
              <div>
                <Title level={2}>Set 2023 - Dec 2023:</Title>
                <Title level={5}>ICreativeSystems Co.,Ltd – Full-Stack Developer </Title>

                <ul className="list-disc pl-5 mt-5">
                  {[
                    "Transitioned to full-stack development for the Influencer Hiring Web App.",
                    "Focused primarily on CRUD operations using Golang and PostgreSQL for back-end development.",
                    "Developed and integrated RESTful APIs to handle data storage and retrieval.",
                    "Maintained and improved the front-end with React.js and TypeScript, ensuring a smooth user experience.",
                    "Worked with UX/UI designers, back-end developers, and testers to ensure a cohesive development process."
                  ].map((li, index) => (
                    <li key={index}>
                      <Paragraph>{li}</Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>

          <Col span={12}>
            <div className="flex gap-x-5">
              <div className="mt-2">
                <Image
                  src="https://media.licdn.com/dms/image/D560BAQGHzrTlP1mddQ/company-logo_200_200/0/1685415167802?e=2147483647&v=beta&t=Bqo1jfT_2yPHC4dgW--DyMorq0hl8KR_Hb18t5mySKU"
                  alt="tiger" 
                  className="w-16 min-w-16 h-16 min-h-16 object-cover rounded-full"
                  width={16}
                  height={16}
                />
              </div>
              <div>
                <Title level={2}>Jun 2022 - Aug 2023:</Title>
                <Title level={5}>Front-end Developer at ICreativeSystems Co.,Ltd</Title>
                <ul className="list-disc pl-5 mt-5">
                  <li>
                    <Title level={4}>Project 1: POS System (Electron.js)</Title>
                    <ul className="list-decimal pl-5">
                      {[
                        "Took over and maintained an existing POS system built with Electron.js, ensuring stability and performance improvements.",
                        "Implemented UI enhancements and bug fixes, optimizing system usability and responsiveness.",
                        "Integrated RESTful APIs to synchronize data and enhance real-time processing.",
                        "Developed fully responsive UI for different screen sizes and resolutions.",
                        "Collaborated closely with UX/UI designers, back-end developers, and testers to improve overall user experience."
                      ].map((li, index) => (
                        <li key={index}>
                          <Paragraph>{li}</Paragraph>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li>
                    <Title level={4}>Project 2: Influencer Hiring Web App(HashU)</Title>
                    <ul className="list-decimal pl-5">
                      {[
                        "Developed a web application for influencer hiring, focusing on seamless user experience and high-performance UI.",
                        "Used React.js, TypeScript, and Material-UI (MUI) to build a scalable and responsive front-end.",
                        "Integrated RESTful APIs to fetch and display influencer data dynamically.",
                        "Ensured the application was fully responsive across different devices and screen resolutions.",
                        "Worked with UX/UI designers, back-end developers, and testers to refine the application’s design and functionality."
                      ].map((li, index) => (
                        <li key={index}>
                          <Paragraph>{li}</Paragraph>
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

      <section className="my-20">
        <Title className="text-center">Skills & Technologies</Title>
        <Row gutter={[30, 30]} className="mt-5">
          <Col span={12}>
            <Title level={3}>Frontend Development</Title>
            <ul className="list-disc pl-5 mt-5">
              {[
                "Languages: JavaScript (ES6+), TypeScript, HTML",
                "Frameworks & Libraries: React.js, Next.js",
                "State Management: Redux, Redux Toolkit, React Query",
                "UI & Styling: Material-UI (MUI), Ant Design, Tailwind CSS, Bootstrap, SCSS, CSS, styled-components",
                "Charts & Data Visualization: Chart.js",
                "Animations: Framer Motion"
              ].map((li, index) => (
                <li key={index}>
                  <Paragraph>{li}</Paragraph>
                </li>
              ))}
            </ul>
          </Col>

          <Col span={12}>
            <Title level={3}>API Development</Title>
            <ul className="list-disc pl-5 mt-5">
              {[
                "Data Fetching & API Handling: Axios",
                "Authentication & Security: NextAuth.js",
                "Containerization: Docker"
              ].map((li, index) => (
                <li key={index}>
                  <Paragraph>{li}</Paragraph>
                </li>
              ))}
            </ul>
          </Col>

          <Col span={12}>
            <Title level={3}>Tools & Workflow</Title>
            <ul className="list-disc pl-5 mt-5">
              {[
                "Design & Prototyping: Figma",
                "API Testing & Development: Postman"
              ].map((li, index) => (
                <li key={index}>
                  <Paragraph>{li}</Paragraph>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </section>
    </main>
  )
}
