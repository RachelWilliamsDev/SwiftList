'use client';
import Logo from '@/components/global/logo/logo';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isSignInPage = pathname === '/sign-in';
  const isSignUpPage = pathname === '/sign-up';

  return (
    <div className="fixed top-0 h-14 w-full border-b px-4 shadow-md">
      <div className="mx-auto flex h-full items-center justify-between md:max-w-screen-xl">
        <Logo />
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          {/* Show both buttons if it's neither sign-in nor sign-up page */}
          {!(isSignInPage || isSignUpPage) && (
            <div className="flex w-full items-center space-x-4">
              <SignedOut>
                <Button size="sm" asChild>
                  <Link href="/sign-in">Login</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/sign-up">Get SwiftList for free</Link>
                </Button>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button variant="outline">Dashboard</Button>
                </Link>
                <UserButton />
              </SignedIn>
            </div>
          )}

          {isSignUpPage && !isSignInPage && (
            <Button size="sm" asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
          )}

          {isSignInPage && !isSignUpPage && (
            <Button size="sm" asChild>
              <Link href="/sign-up">Get SwiftList for free</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
