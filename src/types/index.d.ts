declare type DashboardLayoutProps = {
  children: React.ReactNode;
};

declare type MenuItemDetails = {
  title: string;
  icon: React.ComponentType;
  link: string;
};

declare type MenuItem = {
  title: string;
  list: MenuItemDetails[];
};
