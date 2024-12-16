import Container from '@/components/global/container/container';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Text } from '@/components/ui/text';
import { PopoverArrow, PopoverClose } from '@radix-ui/react-popover';
import { InfoIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import WorkspaceCard from '../workspace-card/workspaceCard';

const GuestWorkspaces = () => {
  const [hasGuestWorkspaces, setHasGuestWorkspaces] = useState([]);
  return (
    <Container>
      <div className="flex items-center">
        <Text as={'h1'} className="flex items-center space-x-1 uppercase">
          Guest Workspaces
        </Text>
        <Popover>
          <PopoverTrigger>
            <Button variant="link" size="icon" aria-label="More information about guest workspaces">
              <InfoIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="flex flex-col justify-center">
              <Text as="h3" className="mb-2 text-center capitalize">
                Guest Workspaces
              </Text>
              <Text as="p">
                You&apos;re a member of these boards, but not a member of the Workspace the boards
                are in.
              </Text>
              <PopoverClose className="absolute right-2 top-2">
                <XIcon size={20} />
              </PopoverClose>
              <PopoverArrow />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {hasGuestWorkspaces.length < 1 ? (
        //TODO: add workspace organisation
        <div className="my-8 flex flex-row space-x-4">
          <WorkspaceCard />
        </div>
      ) : (
        <div className="flex items-center">
          <Text as="p">You aren&apos;t a guest on any workspaces yet</Text>
        </div>
      )}
    </Container>
  );
};
export default GuestWorkspaces;
