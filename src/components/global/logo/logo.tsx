import { Text } from '@/components/ui/text';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center -space-x-2 transition hover:opacity-75 md:flex">
        <Image src="/SwiftListLogo.png" width={40} height={40} alt="SwiftList logo" />
        <Text as="h2">wiftList</Text>
      </div>
    </Link>
  );
};
export default Logo;
