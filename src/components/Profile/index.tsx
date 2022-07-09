import Link from 'next/link';
import Avatar from 'react-avatar';

export function Profile() {
  return (
    <Link href='/app/perfil'>
      <Avatar
        className='cursor-pointer hover:outline-none hover:ring-2 hover:ring-green-600 hover:border-transparent'
        size='3rem'
        round={true}
        name='Nilo Ferreira'
        src='https://github.com/nilosmferreira.png'
        alt='Perfil'
      />
    </Link>
  );
}
