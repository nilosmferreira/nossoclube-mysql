/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { ReactElement } from 'react';
import { LogoVitaliza } from './LogoVitaliza';
import { NavBar } from './NavBar';
type PageCorpoProps = {
  title: string;
  children?: ReactElement;
};
export function PageCorpo({ title }: PageCorpoProps) {
  return (
    /* Fundo */
    <main className='bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative'>
      {/*Alinhamento*/}
      {/* <Head>
        <title>Vitaliza - {title}</title>
      </Head> */}
      <div className='flex items-start justify-between'>
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
                <div className='flex flex-row'>
                  <img
                    alt='profil'
                    src='https://github.com/nilosmferreira.png'
                    className=' object-cover rounded-full h-12 w-12 '
                  />
                  <div className='hidden md:block ml-2'>
                    <p className='text-base text-gray-800'>Nilo Ferreira</p>
                    <span className='text-base text-gray-500'>Desenv</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className='overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0'>
            Corpo
          </div>
        </div>
      </div>
    </main>
  );
}
