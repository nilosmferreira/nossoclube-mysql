import { PageCorpo } from '../../../components/PageCorpo';

export default function Crud() {
  return (
    <PageCorpo title='Modalidade' center>
      <div className='flex items-center justify-center flex-1 sm:w-1/2 xl:w-1/3'>
        <div className='mb-4 mx-0 sm:ml-4 xl:mr-4 w-full max-w-2xl '>
          <div className='shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full p-4'>
            <header>TITULO</header>
            <form action='submit' className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <div className='w-full'>
                  <label htmlFor='name'>Nome</label>
                  <input type='text' className='input-default' />
                </div>
                <div className='flex flex-col min-w-fit'>
                  <span className='text-gray-700 text-xs'>Naipe</span>
                  <div className='flex flex-1 items-center '>
                    <label htmlFor='naipe'>
                      <input
                        type='radio'
                        name='naipe'
                        id='naipe'
                        value='Feminino'
                        checked
                        className='w-5 h-5 text-blue-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
                      />
                      <span className='text-gray-700 text-xs hover:text-green-700 ml-1'>
                        Feminino
                      </span>
                    </label>
                    <label htmlFor='masculino' className='ml-2'>
                      <input
                        type='radio'
                        name='naipe'
                        id='naipe'
                        value='Masculino'
                        className='w-5 h-5 text-blue-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
                      />
                      <span className='text-gray-700 text-xs hover:text-green-700 ml-1'>
                        Masculino
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='answerable'>Responsável</label>
                  <input type='text' className='input-default' />
                </div>
                <div>
                  <label htmlFor='phone'>Celular</label>
                  <input type='text' className='input-default' />
                </div>
                <div>
                  <label htmlFor='phone'>Telefone</label>
                  <input type='text' className='input-default' />
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
