import { useState } from 'react';
import { PageCorpo } from '../../../components/PageCorpo';
type Tab = {
  name: string;
  href: string;
};
const tabs: Tab[] = [
  {
    name: 'Identificação',
    href: 'indentificacao',
  },
  {
    name: 'Endereço',
    href: 'endereco',
  },
  {
    name: 'Filiação',
    href: 'filiacao',
  },
];
export default function Atleta() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <PageCorpo title='Cadastro' center>
      <div className='flex items-center justify-center flex-1 sm:w-1/2 xl:w-1/3'>
        <div className='mb-4 mx-0 sm:ml-4 xl:mr-4 w-full max-w-2xl '>
          <div className='shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full p-4'>
            <header>TITULO</header>
            <form action='' className='min-h-[500px]  '>
              <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 '>
                <ul className='flex flex-wrap -mb-px'>
                  {tabs.map((tab, index) => (
                    <li key={tab.href} className='mr-2'>
                      <a
                        href={`#${tab.href}`}
                        className={
                          tabIndex === index
                            ? 'inline-block p-4 text-gray-600 rounded-t-lg border-b-2 border-green-600 active dark:text-green-500 dark:border-green-500'
                            : 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                        }
                        onClick={() => setTabIndex(index)}
                      >
                        {tab.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div id='tabContents'>
                <div className={tabIndex === 0 ? 'flex flex-col' : 'hidden'}>
                  <div>
                    <label htmlFor='nome'>Nome</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                  <div>
                    <label htmlFor='apelido'>Apelido</label>
                    <input type='text' className='input-default' id='apelido' />
                  </div>
                  <div>
                    <label htmlFor='nome'>Identidade</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                  <div>
                    <label htmlFor='nome'>CPF</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                  <div>
                    <label htmlFor='nome'>Nascimento</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                  <div>
                    <label htmlFor='nome'>Instagram</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                  <div>
                    <label htmlFor='nome'>Celular</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                </div>
                <div className={tabIndex === 1 ? 'flex flex-col' : 'hidden'}>
                  <div>
                    <label htmlFor='nome'>CEP</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                  <div>
                    <label htmlFor='nome'>Rua</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                  <div>
                    <label htmlFor='nome'>Número</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                  <div>
                    <label htmlFor='nome'>Bairro</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                  <div>
                    <label htmlFor='nome'>Cidade</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                  <div>
                    <label htmlFor='nome'>Estado</label>
                    <input type='text' className='input-default' id='nome' />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageCorpo>
  );
}
