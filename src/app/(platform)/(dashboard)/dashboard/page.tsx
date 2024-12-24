'use client';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useUser } from '@clerk/nextjs';

const DashboardPage = () => {
  const { user } = useUser();

  return (
    <div>
      {user ? (
        <Text as="h1" className="uppercase">
          <span>👋 Welcome,</span> {user.firstName}!
        </Text>
      ) : (
        <Text as="h1" className="flex items-center space-x-8 uppercase">
          <span>👋 Welcome!</span> <Button>Sign up for free now!</Button>
        </Text>
      )}
    </div>
  );
};

export default DashboardPage;
