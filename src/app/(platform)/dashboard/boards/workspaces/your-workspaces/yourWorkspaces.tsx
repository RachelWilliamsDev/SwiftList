import Container from '@/components/global/container/container';
import { Text } from '@/components/ui/text';
import Link from 'next/link';
import { useState } from 'react';

const YourWorkspaces = () => {
  const [workspaces, setWorkspaces] = useState(false);
  return (
    <Container>
      <Text as={'h1'} className="flex items-center space-x-1 uppercase">
        Your Workspaces
      </Text>

      {workspaces ? null : ( //TODO: Implement WorkspaceCard component
        <Text as="p">
          You aren't a member of any workspaces yet.{' '}
          <Link href="#" className="text-blue-600">
            Create a workspace
          </Link>
        </Text>
      )}
    </Container>
  );
};
export default YourWorkspaces;
