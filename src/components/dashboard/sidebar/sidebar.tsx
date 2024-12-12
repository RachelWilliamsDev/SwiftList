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
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  const { open, toggleSidebar } = useSidebar();

  return (
    <DashboardSidebar collapsible="icon">
      <div className={cn('flex items-center', open ? 'justify-between p-2' : 'p-3')}>
        {open ? (
          <div className="flex items-center -space-x-2">
            <Image src="/SwiftListLogo.png" width={40} height={40} alt="Swift List Logo" />
            <span>wiftList</span>
          </div>
        ) : (
          <Image src="/SwiftListLogo.png" width={24} height={24} alt="Swift List Logo" />
        )}
        {open && <MenuIcon onClick={toggleSidebar} className="cursor-pointer" />}
      </div>
      <SidebarContent>
        {menuItems.map((section, i) => (
          <SidebarGroup key={i}>
            {section.title && <SidebarGroupLabel>{section.title}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.list.map((listItem, j) => (
                  <SidebarMenuItem key={listItem.title}>
                    <SidebarMenuButton asChild isActive>
                      <Link href={listItem.link}>
                        <listItem.icon />
                        <span>{listItem.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        {open && (
          <>
            <span className="px-4 text-xs font-thin">Toggle the sidebar with</span>
            <span className="px-4 text-xs font-thin">Ctrl/Cmd + B</span>
          </>
        )}
      </SidebarFooter>
    </DashboardSidebar>
    // <div className="">
    //   <ul>
    //     {menuItems.map((section, i) => (
    //       <li key={i}>
    //         <span>{section.title}</span>
    //         {section.list.map((listItem, j) => (
    //           <div key={j}>
    //             <MenuItem item={listItem} />
    //           </div>
    //         ))}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};
export default Sidebar;
