'use client'

import { Layout } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import PortfolioHeader from '@/components/Common/Header/Portfolio';
import styled from 'styled-components';

const { Content, Footer } = Layout;

const LayoutContent = styled(Layout)`
  padding: 0 88px;
  position: relative;
  @media screen and (max-width: 1200px) {
    padding: 0 24px;
  };
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export default function MainPortfolioLayout({ children } : { children: React.ReactNode }) {

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LayoutContent>
        <PortfolioHeader />

        <Content>{children}</Content>
      </LayoutContent>

      {/* Footer section */}
      <Footer style={{ textAlign:"center" }}>
        Copy Right © 2023 FARDEE USENG. All rights reserved.
      </Footer>
    </Layout>
  )
}
