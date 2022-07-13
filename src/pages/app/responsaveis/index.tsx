import { NextPage } from 'next';
import { PencilLine, PlusCircle } from 'phosphor-react';
import modalidadesData from '../../../components/Modalidades';
import { PageCorpo } from '../../../components/PageCorpo';

type Responsavel = {
  name: string;
  phone: string;
  count_categories: number;
};

const responsaveisData: Responsavel[] = [
  {
    name: 'Antonio Carlos Affini Júnior',
    phone: '(81) 9  9963-9393',
    count_categories: 6,
  },
];
const Responsaveis: NextPage = () => {
  const setPage = (page: number) => {
    return;
  };
  return (
    <PageCorpo title='Modalidades' center>
      <div className='flex items-center justify-center flex-1 sm:w-1/2 xl:w-1/3'>
        <div className='mb-4 mx-0 sm:ml-4 xl:mr-4 w-full max-w-2xl '>
          <div className='shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full p-4'>
            <div className='relative'>
              <header className='flex items-center justify-between border-b border-green-500 pb-2'>
                <span className='text-lg text-gray-500 font-bold uppercase'>
                  Responsaveis
                </span>
                <button>
                  <PlusCircle
                    className='text-blue-800 w-10 h-10 hover:text-blue-500  focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-transparent
    focus:ring-green-500
     uppercase  font-bold'
                    alt='Incluir'
                  />
                </button>
              </header>
              <section className='mt-4 h-80'>
                <div className='flex'>
                  <span className='w-7/12 md:w-5/12 text-xs text-gray-700 font-bold '>
                    Nome
                    <p className='block md:hidden text-xs text-gray-700 font-bold '>
                      Telefone
                    </p>
                  </span>
                  <span className='hidden md:w-4/12 md:block text-xs text-gray-700 font-bold '>
                    Telefone
                  </span>
                  <span className='w-4/12 text-center text-xs text-gray-700 font-bold '>
                    Modalidade(s)
                  </span>
                  <span className='w-1/12 text-xs text-gray-700 font-bold '></span>
                </div>
                <ul className='h-full'>
                  {responsaveisData.map(({ count_categories, name, phone }) => (
                    <li key={phone}>
                      <div className='flex  text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800'>
                        <span className='w-7/12 md:w-5/12 text-xs text-gray-700  '>
                          {name}
                          <p className='block md:hidden text-xs text-gray-700  '>
                            {phone}
                          </p>
                        </span>
                        <span className='md:w-4/12 hidden md:block text-xs text-gray-700  '>
                          {phone}
                        </span>
                        <span className='w-4/12 text-center text-xs text-gray-700  '>
                          {count_categories}
                        </span>
                        <button className='w-1/12 flex md:items-center justify-end  mx-auto text-xs text-gray-700  '>
                          <PencilLine />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
              <footer className='flex mx-auto'>
                {/* <Pagination
                  totalCountOfRegisters={1000}
                  currentPage={3}
                  onPageChange={setPage}
                /> */}
                <nav aria-label='Page navigation example' className='mx-auto'>
                  <ul className='flex items-center -space-x-px'>
                    <li>
                      <a
                        href='#'
                        className='block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      >
                        <span className='sr-only'>Previous</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        aria-current='page'
                        className='z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      >
                        5
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      >
                        <span className='sr-only'>Next</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </PageCorpo>
  );
};
export default Responsaveis;
