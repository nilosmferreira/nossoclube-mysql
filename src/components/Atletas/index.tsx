import { GenderFemale, GenderMale } from 'phosphor-react';

type AtletaItem = {
  name: string;
  phone: string;
  modalidade: string;
  naipe: 'Feminino' | 'Masculino';
};
const data: AtletaItem[] = [
  {
    name: 'Antônio Carlos Affini Junior',
    phone: '(81) 9 9633-6663',
    modalidade: 'Basquete Master',
    naipe: 'Masculino',
  },
  {
    name: 'Antônio Carlos Affini',
    phone: '(11) 9 7595-1914',
    modalidade: 'Basquete Master',
    naipe: 'Masculino',
  },
  {
    name: 'Nilo Sérgio Marques Ferreira',
    phone: '(81) 9 8802-8192',
    modalidade: 'Basquete Master',
    naipe: 'Masculino',
  },
  {
    name: 'Mário Eduardo Ramirez',
    phone: '(81) 9 8802-8192',
    modalidade: 'Basquete',
    naipe: 'Masculino',
  },
];
export function Atletas() {
  return (
    <div className='mb-4 mx-0 sm:ml-4 xl:mr-4'>
      <div className='shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full p-4'>
        <p className='font-bold text-md  text-black dark:text-white'>
          Atletas
          <span className='text-sm text-gray-500 dark:text-gray-300  ml-2'>
            (3)
          </span>
        </p>
        <ul>
          {data.map(({ name, phone, modalidade, naipe }) => (
            <li
              key={phone}
              className='flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800'
            >
              <div
                className={`flex items-center justify-between text-sm w-full `}
              >
                <span className='w-[220px]'>
                  {name}
                  <p className='text-xs'>{modalidade}</p>
                </span>
                <span>{phone}</span>
                {naipe === 'Feminino' ? (
                  <GenderFemale className='text-pink-400' />
                ) : (
                  <GenderMale className='text-blue-400' />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
