export default function Login() {
  return (
    <main className='flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative'>
      <div className='w-full sm:w-1/2 xl:w-1/3'>
        <div className='shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full'>
          <header>
            <h1 className='font-bold text-md text-black dark:text-white ml-2 text-center py-4'>
              Bem-vindo
            </h1>
          </header>
          <section className='flex flex-col gap-2'>
            <div>
              <label htmlFor='username' className='text-gray-700 text-sm'>
                Usuário
              </label>
              <input
                className='flex-1 appearance-none border border-none w-full py-2 px-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
                type='text'
                name='username'
                id='username'
                placeholder='badrabbit'
              />
            </div>
            <div>
              <label htmlFor='password' className='text-gray-700 text-sm'>
                Senha
              </label>
              <input
                className='flex-1 appearance-none border border-none w-full py-2 px-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
                placeholder='*********'
                type='password'
                name='password'
                id='password'
              />
            </div>
          </section>
          <footer className='flex flex-col gap-2 mt-4'>
            <a
              href='#'
              className='text-end text-xs text-gray-500 hover:text-gray-600 rounded-lg transition-colors'
            >
              Esqueceu o Usuário ou Senha?
            </a>
            <button
              type='submit'
              className='p-2 bg-blue-600 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-hover focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-transparent
            focus:ring-green-500
            transtion-colors uppercase text-white font-bold'
            >
              Entrar
            </button>
          </footer>
        </div>
      </div>
    </main>
  );
}
