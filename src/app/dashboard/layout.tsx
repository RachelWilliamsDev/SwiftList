import Navbar from "@/components/dashboard/navbar/navbar";

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <div>{/* TODO: Add sidebar here */}</div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};
export default Layout;
