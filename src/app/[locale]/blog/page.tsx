"use client"

import { Title } from "@/components/Common/Typography"
import { Col, Row } from "antd"
import Image from "next/image"
import mediuams from "@/assets/json/mediuam.json";
import travelings from "@/assets/json/traveling.json";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
// @typescript-eslint/no-explicit-any
type CardProps = {
  title: string;
  description: string;
  image_url: string | StaticImport;
  url: string;
}

export default function Page() {
  return (
    <div className="mt-8">
      <div className="mt-12">
        <h1 className="text-3xl text-thirdary font-semibold dark:text-white">Mediuam</h1>
        <Row className="mt-4" gutter={[20, 20]}>
          {mediuams.map((mediuam, index) => (
            <Col key={index} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
              <MidiuamCard
                title={mediuam.title}
                description={mediuam.description}
                image_url={mediuam.image_url}
                url={mediuam.url}
              />
            </Col>
          ))}
        </Row>
      </div>
      <div className="mt-12">
        <h1 className="text-3xl text-thirdary font-semibold dark:text-white">Traveling</h1>
        <Row className="mt-4" gutter={[20, 20]}>
          {travelings.map((travel, index) => (
            <Col key={index} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
              <MidiuamCard
                title={travel.title}
                description={travel.description}
                image_url={travel.image_url}
                url={travel.url}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

function MidiuamCard({ title, description, image_url } : CardProps) {
  return (
    <div className="h-80 overflow-hidden rounded-lg bg-white dark:bg-grey-900 shadow-lg cursor-pointer">
      <Image
        src={image_url}
        alt="mediuam"
        style={{ width: "100%", height: "170px", objectFit: "cover" }}
        height={200}
        width={300}
      />

      <div className="p-3">
        <Title level={4} className="truncate">
          {title}
        </Title>
        <p className="text-base line-clamp-3 indent-5 mt-2">
          {description}
        </p>
      </div>
    </div>
  )
}

// function TravelingCard({ title, description, image_url, url } : CardProps) {
//   return (
//     <div className="h-80 overflow-hidden rounded-lg bg-white shadow-lg cursor-pointer">
//       <Image
//         src={image_url}
//         alt="mediuam"
//         style={{ width: "100%", height: "170px", objectFit: "cover" }}
//         height={200}
//         width={300}
//       />

//       <div className="p-3">
//         <Title level={4} className="truncate">
//           {title}
//         </Title>
//         <p className="text-base line-clamp-3 indent-5 mt-2">
//           {description}
//         </p>
//       </div>
//     </div>
//   )
// }