import TemplateCard from '@/components/dashboard/boards/template-card/templateCard';
import Container from '@/components/global/container/container';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Text } from '@/components/ui/text';
import { popularTemplates, templateCategories } from '@/constants';
import { cn } from '@/lib/utils';
import { BookDashedIcon, ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const MostPopularTemplates = () => {
  const [activeCategory, setActiveCategory] = useState<string>(templateCategories[0]);

  return (
    <Container>
      <Text as={'h1'} className="flex items-center space-x-1">
        <BookDashedIcon size={24} /> <span>Most popular templates</span>
      </Text>
      <div className="flex flex-row items-center space-x-2">
        <Text as={'p'}>Get going faster with a template from the trello community or</Text>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex space-x-8 rounded-md border-2 border-accent px-4 py-2">
            <span>Choose a category</span> <ChevronDownIcon size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {templateCategories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(activeCategory === category ? 'bg-accent' : '')}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="my-8 flex flex-row space-x-4">
        {popularTemplates.map((template) => (
          <TemplateCard key={template.title} title={template.title} src={template.src} />
        ))}
      </div>
      <Link href="/dashboard/templates">
        <Text as="p" className="text-blue-600">
          Browse the full template gallery
        </Text>
      </Link>
    </Container>
  );
};
export default MostPopularTemplates;
