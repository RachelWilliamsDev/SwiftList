import {
  BookDashedIcon,
  ClockArrowUpIcon,
  HomeIcon,
  LayoutDashboardIcon,
  PlusIcon,
  StarIcon,
} from 'lucide-react';

export const menuItems: MenuItem[] = [
  {
    title: '',
    list: [
      {
        title: 'Dashboard',
        icon: HomeIcon,
        link: '/dashboard',
      },
      {
        title: 'Boards',
        icon: LayoutDashboardIcon,
        link: '/dashboard/boards',
      },
      {
        title: 'Recent',
        icon: ClockArrowUpIcon,
        link: '/dashboard/recent',
      },
      {
        title: 'Starred',
        icon: StarIcon,
        link: '/dashboard/starred',
      },
      {
        title: 'Templates',
        icon: BookDashedIcon,
        link: '/dashboard/templates',
      },
    ],
  },
  {
    title: 'Workspaces',
    list: [
      {
        title: 'Create a Workspace',
        icon: PlusIcon,
        link: '',
      },
    ],
  },
];
