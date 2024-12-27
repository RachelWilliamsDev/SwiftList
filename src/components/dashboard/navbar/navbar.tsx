'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSidebar } from '@/components/ui/sidebar';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { BellIcon, MenuIcon, SearchIcon, SettingsIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);
  const { open, toggleSidebar, isMobile } = useSidebar();

  return (
    <div className="flex items-center justify-between pb-5">
      <div className="flex items-center gap-5">
        {!open || isMobile ? <MenuIcon onClick={toggleSidebar} className="cursor-pointer" /> : null}
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />
        <Breadcrumb>
          <BreadcrumbList>
            {paths.map((path, i) => {
              const href = i === 0 ? '/dashboard' : `/${paths.slice(0, i + 1).join('/')}`;

              return (
                <React.Fragment key={i}>
                  <BreadcrumbItem key={i}>
                    <BreadcrumbLink href={href} className="capitalize">
                      {path}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {i < paths.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-8" />
        </div>

        <div className="flex">
          <Button variant="ghost" size="icon">
            <BellIcon size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <SettingsIcon size={20} />
          </Button>
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
