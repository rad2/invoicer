'use client'
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ArrowUturnDownIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Subscriptions', href: '/dashboard/subscriptions', icon: ArrowUturnDownIcon },
  { name: 'Inventory', href: '/dashboard/inventory', icon: WrenchScrewdriverIcon },
  { name: 'Reports', href: '/dashboard/reports', icon: ChartBarIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-md font-medium hover:bg-gray-300 hover:text-orange-400 md:flex-none md:justify-start md:p-2 md:px-3',
               {
                 'bg-gray-700 text-orange-400': pathname === link.href,
               },
              )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
