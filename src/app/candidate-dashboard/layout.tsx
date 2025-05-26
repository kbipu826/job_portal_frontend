'use client';

import { ReactNode } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
// import './jobs.css';

interface CandidateDashboardProps {
  children: ReactNode;
}

export default function CandidateDashboard({ children }: CandidateDashboardProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}