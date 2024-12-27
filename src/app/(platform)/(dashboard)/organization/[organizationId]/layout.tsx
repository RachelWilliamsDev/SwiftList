import OrgControl from '@/components/dashboard/organization/org-control';

const OrganizationLayout = ({ children }: OrganizationLayoutProps) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};
export default OrganizationLayout;
