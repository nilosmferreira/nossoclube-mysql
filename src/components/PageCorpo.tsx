import Head from 'next/head';
import { LogoVitaliza } from './LogoVitaliza';
type PageCorpoProps = {
  title: string;
};
export function PageCorpo({ title }: PageCorpoProps) {
  return (
    /* Fundo */
    <main className='bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative'>
      {/*Alinhamento*/}
      <Head>
        <title>Vitaliza - {title}</title>
      </Head>
      <div className='flex items-start justify-between'>
        <div className='h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80'>
          <aside className='bg-white h-full rounded-2xl dark:bg-gray-700'>
            <div className='flex items-center justify-center pt-6'>
              <LogoVitaliza height={60} width={60} />
            </div>
            <nav className='mt-6'>Menu Lateral</nav>
          </aside>
        </div>
        <div className='flex flex-col w-full pl-0 md:p-4 md:space-y-4'>
          <header className='w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40'>
            {title}
          </header>
          <div className='overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0'>
            Corpo
          </div>
        </div>
      </div>
    </main>
  );
}
