import Link from 'next/link';

const MenuItem = ({ item }: { item: MenuItemDetails }) => {
  return (
    <Link href={item.link} className="">
      <item.icon />
      {item.title}
    </Link>
  );
};
export default MenuItem;
