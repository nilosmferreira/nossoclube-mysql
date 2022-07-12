/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';
import { LogoVitaliza } from './LogoVitaliza';
import { NavBar } from './NavBar';
import { Profile } from './Profile';
type PageCorpoProps = {
  title: string;
  children: ReactNode;
  center?: boolean;
};
export function PageCorpo({ title, children, center = false }: PageCorpoProps) {
  return (
    /* Fundo */
    <main className='bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden relative'>
      {/*Alinhamento*/}
      {/* <Head>
        <title>Vitaliza - {title}</title>
      </Head> */}
      <div className='flex items-start justify-between max-w-screen-xl mx-auto'>
        <div className='h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80'>
          <aside className='bg-white h-full rounded-2xl dark:bg-gray-700'>
            <div className='flex items-center justify-center pt-4'>
              <LogoVitaliza height={60} width={60} />
            </div>
            <NavBar />
          </aside>
        </div>
        <div className='flex flex-col w-full pl-0 md:p-4 md:space-y-4'>
          <header className='w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40'>
            <div className='relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center'>
              <div className='relative items-center justify-between pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0'>
                <div className='block lg:hidden'>
                  <button>
                    <LogoVitaliza />
                  </button>
                </div>
                <span className='text-lg text-gray-500 font-bold uppercase text-start'>
                  {title}
                </span>
                <Profile />
              </div>
            </div>
          </header>
          <div className='overflow-auto h-screen relative pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0'>
            <div
              className={`flex flex-col flex-wrap sm:flex-row ${
                center && 'h-full w-full'
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
