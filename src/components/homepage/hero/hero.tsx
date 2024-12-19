import AnimatedText from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20 pt-40">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="mb-4 flex items-center justify-center -space-x-2 p-4">
            <Image src="/SwiftListLogo.png" width={60} height={60} alt="SwiftList Logo" />
            <Text className="text-5xl font-bold">wiftList</Text>
          </div>
          <div className="mb-8 flex max-w-2xl flex-col items-center space-y-2">
            <span className="font-foreground flex scroll-m-20 gap-2 text-lg font-extrabold uppercase tracking-tight lg:text-xl">
              Organise <AnimatedText text="Fast," /> Achieve <AnimatedText text="Faster" />
            </span>
            <Text className="text-center">
              Streamline your tasks, projects, and goals effortlessly. SwiftList is the simplest way
              to stay productive, collaborate seamlessly, and keep everything in perfect sync.
            </Text>
          </div>
          <Link href="/sign-up">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
