'use client';

import { ReactNode } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
