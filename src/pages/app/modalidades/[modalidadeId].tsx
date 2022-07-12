import { PageCorpo } from '../../../components/PageCorpo';

export default function Crud() {
  return (
    <PageCorpo title='Modalidade' center>
      <div className='flex items-center justify-center flex-1 sm:w-1/2 xl:w-1/3'>
        <div className='mb-4 mx-0 sm:ml-4 xl:mr-4 w-full max-w-2xl '>
          <div className='shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full p-4'>
            <header>TITULO</header>
            <form action='submit'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col md:grid gap-2 grid-cols-4'>
                  <div className='col-span-3'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' className='input-default' />
                  </div>
                  <div>
                    <span className='text-gray-700 text-xs'>Naipe</span>
                    <div className='mt-1.5 flex '>
                      <label htmlFor='naipe' className='flex items-center'>
                        <input
                          type='radio'
                          name='naipe'
                          id='naipe'
                          value='Feminino'
                          defaultChecked
                          className='w-4 h-4 text-blue-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
                        />
                        <span className='text-gray-700 text-xs hover:text-green-700 ml-1'>
                          Feminino
                        </span>
                      </label>
                      <label
                        htmlFor='masculino'
                        className='ml-1 flex items-center'
                      >
                        <input
                          type='radio'
                          name='naipe'
                          id='naipe'
                          value='Masculino'
                          className='w-4 h-4 text-blue-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
                        />
                        <span className='text-gray-700 text-xs hover:text-green-700 ml-1'>
                          Masculino
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor='answerable'>Responsável</label>
                  <input type='text' className='input-default' />
                </div>
                <div className='block sm:grid grid-cols-2 gap-2 '>
                  <div>
                    <label htmlFor='phone'>Celular</label>
                    <input
                      type='text'
                      className='input-default'
                      placeholder='(81) 9 9999-9999'
                    />
                  </div>
                  <div>
                    <label htmlFor='phone'>Telefone</label>
                    <input
                      type='text'
                      className='input-default'
                      placeholder='(81) 9999-9999'
                    />
                  </div>
                </div>
              </div>
            </form>
            <footer className='flex justify-center items-center gap-4 p-4'>
              <button type='submit' className='btn-default'>
                Salvar
              </button>
              <button className='btn-cancel'>Cancelar</button>
            </footer>
          </div>
        </div>
      </div>
    </PageCorpo>
  );
}
