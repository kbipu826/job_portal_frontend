import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Detail - Job Portal',
  description: 'View detailed information about the job posting',
};

export default function JobDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 