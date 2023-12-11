import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import clsx from 'clsx';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

     <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className={clsx(
      "rounded-xl bg-gray-50 p-2 shadow-sm",
       {
         'bg-green-500': title === 'Collected',
         'bg-red-500': title === 'Pending',
         'bg-orange-500': title === 'Total Invoices',
         'bg-sky-500': title === 'Total Customers'
       }
    )}>
      <div className="flex p-4">
        {Icon ? <Icon className="h-8 w-8 text-gray-700" /> : null}
        <h3 className="ml-2 text-lg font-semibold">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-gray-100 px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
