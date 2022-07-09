import { CurrencyCircleDollar, GenderFemale, GenderMale } from 'phosphor-react';

type ModalidadeItem = {
  name: string;
  answerable: string;
  phone: string;
  naipe: 'Feminino' | 'Masculino';
};
const data: ModalidadeItem[] = [
  {
    name: 'Basquete',
    naipe: 'Feminino',
    answerable: 'Mário Ramirez',
    phone: '(81) 9 9633-6663',
  },
  {
    name: 'Basquete Master',
    naipe: 'Masculino',
    answerable: 'Antônio Carlos Affini',
    phone: '(11) 9 7595-1914',
  },
];
export function Modalidades() {
  return (
    <div className='mb-4 mx-0 sm:ml-4 xl:mr-4'>
      <div className='shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full p-4'>
        <p className='font-bold text-md  text-black dark:text-white'>
          Modalidades
          <span className='text-sm text-gray-500 dark:text-gray-300  ml-2'>
            (2)
          </span>
        </p>
        <ul>
          {data.map(({ name, answerable, phone, naipe }) => (
            <li
              key={phone}
              className='flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800'
            >
              <div
                className={`flex items-center justify-between text-sm w-full `}
              >
                <span className='w-[220px]'>
                  {name}
                  <p className='text-xs'>{answerable}</p>
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
