import { CurrencyCircleDollar } from 'phosphor-react';

type ColaboradorItem = {
  name: string;
  phone: string;
  role: string;
  isPaid: boolean;
  isDirection: boolean;
};
const data: ColaboradorItem[] = [
  {
    name: 'Antônio Carlos Affini Junior',
    role: 'Vice-Presidente',
    isDirection: true,
    isPaid: false,
    phone: '(81) 9 9633-6663',
  },
  {
    name: 'Antônio Carlos Affini',
    role: 'Presidente',
    isDirection: true,
    isPaid: false,
    phone: '(11) 9 7595-1914',
  },
  {
    name: 'Nilo Sérgio Marques Ferreira',
    role: 'Diretor Financeiro',
    isDirection: true,
    isPaid: false,
    phone: '(81) 9 8802-8192',
  },
  {
    name: 'Mário Eduardo Ramirez',
    role: 'Treinador Basquete',
    isDirection: false,
    isPaid: true,
    phone: '(81) 9 8802-8192',
  },
];
export function Colaboradores() {
  return (
    <div className='mb-4 mx-0 sm:ml-4 xl:mr-4'>
      <div className='shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full p-4'>
        <p className='font-bold text-md  text-black dark:text-white'>
          Colaboradores
          <span className='text-sm text-gray-500 dark:text-gray-300  ml-2'>
            (3)
          </span>
        </p>
        <ul>
          {data.map(({ name, isDirection, isPaid, phone, role }) => (
            <li
              key={phone}
              className='flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800'
            >
              <div
                className={`flex items-center justify-between text-sm w-full ${
                  isDirection && 'border-l-2 px-1 border-green-400'
                }`}
              >
                <span className='w-[220px]'>
                  {name}
                  <p className='text-xs'>{role}</p>
                </span>
                <span>{phone}</span>
                <CurrencyCircleDollar
                  className={!isPaid ? 'text-red-400' : 'text-green-400'}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
