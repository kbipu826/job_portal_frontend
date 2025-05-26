'use client';

import { ReactNode } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
// import './jobs.css';

interface JobsLayoutProps {
  children: ReactNode;
}

export default function JobsLayout({ children }: JobsLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}