import SideNav from '@/app/ui/dashboard/sidenav';
import AcmeLogo from '@/app/ui/acme-logo';
import Header from '../ui/dashboard/header';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
       <> 
        <Header />
        <section className='ml-60 h-screen p-10'>{children}</section>    
       </>
  );
}