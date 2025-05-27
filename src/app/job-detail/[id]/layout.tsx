'use client';

import { ReactNode } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

interface JobDetailLayoutProps {
  children: ReactNode;
}

export default function JobDetailLayout({ children }: JobDetailLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
} 