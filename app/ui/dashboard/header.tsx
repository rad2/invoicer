import { Square3Stack3DIcon, UserIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import SideNav from './sidenav';

export default function Header() {
  return (
      <main>
         
      <nav className={`${lusitana.className} flex  border-b border-gray-100 mb-5 px-6 h-20 justify-between items-center bg-slate-700` }>
      <section className='flex items-center gap-4  text-purple-400' >
            <Square3Stack3DIcon className="h-12 w-12 rotate-[15deg] " />
            <p className="text-[44px] ">Invoicer</p>
      </section> 
        <section className='flex items-center gap-4 '>
          <UserIcon className='text-purple-400 hover:text-orange-400 w-7' />
          
       <form>
            <button className="flex gap-2 items-center text-purple-400 hover:text-orange-400">
                <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
      </section>
      </nav>
      <SideNav />
   

    </main>
  )
}
