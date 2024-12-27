import { OrganizationProfile } from '@clerk/nextjs';

const SettingsPage = () => {
  return (
    <div className="w-full flex-1">
      <OrganizationProfile
        routing="hash"
        appearance={{
          elements: {
            rootBox: 'w-[100%] ',
            cardBox: 'w-[100%] grid-cols-[1fr_4fr] drop-shadow-none shadow-none border',
            navbar: 'w-[100%]',
            scrollBox: 'border-none shadow-none',
          },
        }}
      />
    </div>
  );
};
export default SettingsPage;
