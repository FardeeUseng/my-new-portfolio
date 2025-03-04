import React from 'react';
import MainBlogLayout from '@/layouts/Blog';

export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <MainBlogLayout>
      {children}
    </MainBlogLayout>
  )
}