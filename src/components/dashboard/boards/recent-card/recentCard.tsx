import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import { BookDashedIcon, GlobeIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';

const RecentCard = ({ title, src, edit, type }: RecentCardProps) => {
  return (
    <div className="relative flex h-24 w-48 flex-col justify-between overflow-hidden rounded-sm p-2">
      <Text as="h2" className="z-10 text-white">
        {title}
      </Text>

      <Image
        src={src}
        width={200}
        height={200}
        alt={title}
        objectFit="cover"
        className="absolute left-0 top-0 z-0"
      />
      <div className="z-10 flex flex-row items-center space-x-2">
        {type === 'template' && (
          <span>
            <Badge variant="secondary" className="space-x-2">
              <BookDashedIcon size={14} /> <span>Template</span>
            </Badge>
          </span>
        )}
        {edit === 'world' ? (
          <Tooltip>
            <TooltipTrigger>
              <GlobeIcon size={14} className="text-white" />
            </TooltipTrigger>
            <TooltipContent>
              <Text as="p">
                Anyone on the internet can see this board. Only board members can edit.
              </Text>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        ) : (
          <Tooltip>
            <TooltipTrigger>
              <UsersIcon size={14} className="text-white" />
            </TooltipTrigger>
            <TooltipContent>
              <Text as="p">All members of the workspace can edit this board</Text>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>
  );
};
export default RecentCard;
