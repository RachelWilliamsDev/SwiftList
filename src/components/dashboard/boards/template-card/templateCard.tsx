import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import Image from 'next/image';

const TemplateCard = ({ title, src }: TemplateCardProps) => {
  return (
    <div className="relative flex h-24 w-48 flex-col overflow-hidden rounded-sm">
      <div className="z-10 flex flex-col p-2">
        <span>
          <Badge variant="secondary">Template</Badge>
        </span>
        <Text as="h2" className="text-white">
          {title}
        </Text>
      </div>

      <Image
        src={src}
        width={200}
        height={200}
        alt={title}
        objectFit="cover"
        className="absolute left-0 top-0 z-0"
      />
    </div>
  );
};
export default TemplateCard;
