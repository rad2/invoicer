import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <article
      className={`${lusitana.className} flex flex-row items-center leading-none  text-purple-400`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Invoicer</p>
    </article>
  );
}
