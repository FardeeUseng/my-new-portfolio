'use client'

import { Layout } from 'antd';
import PortfolioHeader from '@/components/Common/Header/Portfolio';

const { Content, Footer } = Layout;

export default function BlogLayout({ children } : { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout style={{ padding: "0 80px 0 80px", position: "relative" }}>
        <PortfolioHeader />

        <Content>{children}</Content>
      </Layout>

      {/* Footer section */}
      <Footer style={{ textAlign:"center" }}>
        Copy Right © 2023 FARDEE USENG. All rights reserved.
      </Footer>
    </Layout>
  )
}
