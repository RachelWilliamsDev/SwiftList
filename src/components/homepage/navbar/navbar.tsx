import Logo from '@/components/global/logo/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed top-0 h-14 w-full border-b px-4 shadow-md">
      <div className="mx-auto flex h-full items-center justify-between md:max-w-screen-xl">
        <Logo />
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get SwiftList for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
