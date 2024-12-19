import Logo from '@/components/global/logo/logo';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full border-t p-4">
      <div className="mx-auto flex h-full items-center justify-between md:max-w-screen-xl">
        <Logo />
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
