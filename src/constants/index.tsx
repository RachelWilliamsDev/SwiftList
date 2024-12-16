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

export const templateCategories = [
  'Popular',
  'Small Business',
  'Design',
  'Education',
  'Engineering-IT',
  'Marketing',
  'Human Resources',
  'Operations',
  'Sales CRM',
];

export const popularTemplates = [
  {
    title: 'Project Management',
    src: '/templates/lights.jpg',
  },
  {
    title: 'Kanban Board',
    src: '/templates/geometric.jpg',
  },
  {
    title: 'Simple Project Board',
    src: '/templates/leaf.jpg',
  },
  {
    title: 'Remote Team Hub',
    src: '/templates/multi-lights.jpg',
  },
];

export const recentItems = [
  {
    title: 'Project Management',
    src: '/templates/lights.jpg',
    edit: 'world',
    type: 'template',
  },
  {
    title: 'Kanban team',
    src: '/templates/geometric.jpg',
    edit: 'members',
    type: 'team',
  },
  {
    title: 'SwiftList team',
    src: '/templates/leaf.jpg',
    edit: 'members',
    type: 'team',
  },
  {
    title: 'Remote Team Hub',
    src: '/templates/multi-lights.jpg',
    edit: 'world',
    type: 'template',
  },
];
