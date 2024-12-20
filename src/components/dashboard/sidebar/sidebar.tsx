'use client';
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
import { useAuth, useUser } from '@clerk/nextjs';
import { LogInIcon, LogOutIcon, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const { open, toggleSidebar } = useSidebar();
  //TODO: update this after signup is implemented
  const { userId } = useAuth();
  const { user } = useUser();
  const pathname = usePathname();

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
