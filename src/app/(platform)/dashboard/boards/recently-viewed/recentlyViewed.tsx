import RecentCard from '@/components/dashboard/boards/recent-card/recentCard';
import Container from '@/components/global/container/container';
import { Text } from '@/components/ui/text';
import { recentItems } from '@/constants';
import { ClockArrowUpIcon } from 'lucide-react';

const RecentlyViewed = () => {
  return (
    <Container>
      <Text as={'h2'} className="flex items-center space-x-1">
        <ClockArrowUpIcon size={24} /> <span>Recently viewed</span>
      </Text>
      <div className="my-8 flex flex-row space-x-4">
        {recentItems.map((template) => (
          <RecentCard
            key={template.title}
            title={template.title}
            src={template.src}
            type={template.type}
            edit={template.edit}
          />
        ))}
      </div>
    </Container>
  );
};
export default RecentlyViewed;
