import React from 'react';
import MainPortfolioLayout from '@/layouts/Portfolio';

export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <MainPortfolioLayout>
      {children}
    </MainPortfolioLayout>
  )
}
