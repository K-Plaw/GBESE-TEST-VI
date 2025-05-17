'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const FiatCryptoToggle = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isCrypto = pathname.includes('/w3/dashboard');

  const handleFiatClick = () => {
    if (isCrypto) {
      router.back(); // Go back to previous page (assumes it was /w2 or /lenders)
    }
  };

  const handleCryptoClick = () => {
    if (!isCrypto) {
      router.push('/w3/dashboard'); // Navigate to Crypto
    }
  };

  return (
    <div className="flex gap-2 shadow-2xl rounded-[10px] self-end">
      <Button
        className={
          !isCrypto
            ? 'border-0 outline-0 text-white bg-[#0d60d8] w-[50%]'
            : 'border-0 bg-gray-900 outline-0 text-[#0d60d8] w-[50%]'
        }
        variant={!isCrypto ? 'default' : 'outline'}
        onClick={handleFiatClick}
      >
        Fiat
      </Button>
      <Button
        className={
          isCrypto
            ? 'border-0 outline-0 text-white bg-[#0d60d8] w-[50%]'
            : 'border-0 outline-0 bg-inherit text-[#0d60d8] w-[50%]'
        }
        variant={isCrypto ? 'default' : 'outline'}
        onClick={handleCryptoClick}
      >
        Crypto
      </Button>
    </div>
  );
};

export default FiatCryptoToggle;
