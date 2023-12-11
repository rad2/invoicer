import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <aside className='flex'>
        <div className='fixed w-60 flex flex-col justify-between h-screen -mt-[21px] border-r bg-slate-700'>
          <div className='flex flex-col justify-center  py-12 gap-2'>
             <NavLinks />
          </div>
        </div>
      </aside>
  );
}
