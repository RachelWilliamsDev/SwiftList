declare type ChildrenProp = {
  children: React.ReactNode;
};

declare type DashboardLayoutProps = ChildrenProp & {
  //future props can go here
};
declare type WrapperProps = ChildrenProp & {
  //future props can go here
};

declare type ContainerProps = ChildrenProp & {
  delay?: number;
  className?: string;
  maxWidth?: string;
  padding?: string;
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

declare type TemplateCardProps = {
  title: string;
  src: string;
};

declare type RecentCardProps = {
  title: string;
  src: string;
  edit: string;
  type: string;
};
