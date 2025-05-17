// src/app/dashboard/add-money/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import BalanceCard from '@/components/lenders/dashboard/BalanceCard';
import AddNgnSection from '@/components/lenders/dashboard/AddNgnSection';
import FiatCryptoToggle from '@/components/FiatCryptoToggle';
import TopNavbar from '@/components/layout/TopNavbar';

export default function Page() {
  return (
    <>
      <div className="flex-1 space-y-8 p-0 pt-10">
        <BalanceCard />
        <AddNgnSection />
      </div>
    </>
  );
}