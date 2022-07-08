export default function Login() {
  return (
    <main className='flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative'>
      <div className='w-full md:w-1/2 sm:w-1/2 xl:w-[450px] '>
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
                className='input-default'
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
                className='input-default'
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
              className='text-end text-xs text-gray-500 hover:text-gray-600 rounded-md transition-colors focus:p-1 focus:outline-none 
              focus:ring-1 focus:ring-offset-1 focus:ring-offset-transparent
              focus:ring-green-500'
            >
              Esqueceu o Usuário ou Senha?
            </a>
            <button type='submit' className='btn-default transition-colors'>
              Entrar
            </button>
          </footer>
        </div>
      </div>
    </main>
  );
}
