'use client';
import { Accordion } from '@/components/ui/accordion';
import {
  Sidebar as DashboardSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { menuItems } from '@/constants';
import { cn } from '@/lib/utils';
import { useAuth, useOrganization, useOrganizationList } from '@clerk/nextjs';
import { LogInIcon, LogOutIcon, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AccordionMenuItem from './accordion-menu-item';

const Sidebar = ({ storageKey = 'expandedAccordionItems' }: SidebarProps) => {
  const { open, toggleSidebar } = useSidebar();
  const { userId } = useAuth();
  const pathname = usePathname();

  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleAccordionChange = (value: string[]) => {
    setExpandedItems(value);
  };

  useEffect(() => {
    const savedState = localStorage.getItem(storageKey);
    if (savedState) {
      setExpandedItems(JSON.parse(savedState));
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(expandedItems));
  }, [expandedItems, storageKey]);

  const { organization: activeOrganization, isLoaded: isLoadedOrg } = useOrganization();

  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return <></>;
  }

  return (
    <DashboardSidebar collapsible="icon">
      <div className={cn('flex items-center', open ? 'justify-between px-2 py-5' : 'px-3 py-5')}>
        <div className="flex items-center">
          <Image
            src="/SwiftListLogo.png"
            width={open ? 40 : 24} // Dynamically change width based on `open`
            height={open ? 40 : 24} // Dynamically change height based on `open`
            alt="Swift List Logo"
          />
          {open && <span>wiftList</span>}
        </div>

        {open && <MenuIcon onClick={toggleSidebar} className="cursor-pointer" />}
      </div>

      <SidebarContent>
        {menuItems.map((section, i) => (
          <SidebarGroup key={i}>
            {section.title && <SidebarGroupLabel>{section.title}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.list.map((listItem) => {
                  const isActive = pathname === listItem.link;

                  return (
                    <SidebarMenuItem key={listItem.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link href={listItem.link}>
                          <listItem.icon />
                          <span>{listItem.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Accordion
                  type="multiple"
                  value={expandedItems}
                  onValueChange={handleAccordionChange}
                  className="space-y-2"
                >
                  {userMemberships.data.map(({ organization }) => {
                    const isActive = organization.id === activeOrganization?.id;
                    const isExpanded = expandedItems.includes(organization.id); // Check if this item is expanded

                    return (
                      <AccordionMenuItem
                        key={organization.id}
                        value={organization.id}
                        isActive={isActive}
                        isExpanded={isExpanded}
                        name={organization.name}
                        imageUrl={organization.imageUrl}
                      />
                    );
                  })}
                </Accordion>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="py-5">
        {open && (
          <>
            <span className="px-2 text-xs font-thin">Toggle the sidebar with</span>
            <span className="px-2 text-xs font-thin">Ctrl/Cmd + B</span>
          </>
        )}
        <SidebarMenuButton>
          {userId ? (
            <div className="flex items-center gap-2">
              <LogOutIcon size={16} /> <span>Logout</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <LogInIcon size={16} /> <span>Login</span>
            </div>
          )}
        </SidebarMenuButton>
      </SidebarFooter>
    </DashboardSidebar>
  );
};
export default Sidebar;
