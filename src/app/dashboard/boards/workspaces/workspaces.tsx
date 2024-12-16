import { Button } from '@/components/ui/button';
import GuestWorkspaces from './guest-workspaces/guestWorkspaces';
import YourWorkspaces from './your-workspaces/yourWorkspaces';
const Workspaces = () => {
  return (
    <>
      <YourWorkspaces />
      <GuestWorkspaces />
      <span>
        <Button>View all closed boards</Button>
      </span>
    </>
  );
};
export default Workspaces;
