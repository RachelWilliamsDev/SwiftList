import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const AccordionMenuItem = ({
  value,
  isActive,
  imageUrl,
  isExpanded,
  name,
}: AccordionMenuItemProps) => {
  const routes = [
    {
      label: 'Boards',
      icon: <Layout className="mr-2 size-4" />,
      link: `/organization/${value}`,
    },
    {
      label: 'Activity',
      icon: <Activity className="mr-2 size-4" />,
      link: `/organization/${value}/activity`,
    },
    {
      label: 'Settings',
      icon: <Settings className="mr-2 size-4" />,
      link: `/organization/${value}/settings`,
    },
    {
      label: 'Billing',
      icon: <CreditCard className="mr-2 size-4" />,
      link: `/organization/${value}/billing`,
    },
  ];

  const router = useRouter();
  const pathname = usePathname();

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={value} className="border-none">
      <AccordionTrigger
        onClick={() => {}}
        className={cn(
          'flex items-center gap-x-2 rounded-md p-1.5',
          isActive && !isExpanded && 'bg-secondary'
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="relative h-7 w-7">
            <Image fill src={imageUrl} alt="Organization" className="rounded-sm object-cover" />
          </div>
          <span>{name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-foreground">
        {routes.map((route) => (
          <Button
            key={route.link}
            size="sm"
            onClick={() => onClick(route.link)}
            className={cn(
              'mb-1 w-full justify-start pl-10 font-normal',
              pathname === route.link && 'bg-secondary'
            )}
            variant="ghost"
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
export default AccordionMenuItem;
