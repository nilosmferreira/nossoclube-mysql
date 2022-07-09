import {
  House,
  IconProps,
  IdentificationCard,
  PersonSimpleRun,
  Trophy,
  UserCircleGear,
  UserGear,
} from 'phosphor-react';
import { NavLink } from './NavLink';
type Item = {
  caption: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};
const menus: Item[] = [
  {
    caption: 'Dashboard',
    href: '/app',
    icon: House,
  },
  {
    caption: 'Responsável',
    href: '/app/responsaveis',
    icon: IdentificationCard,
  },
  {
    caption: 'Modalidade',
    href: '/app/modalidades',
    icon: Trophy,
  },
  {
    caption: 'Atleta',
    href: '/app/atletas',
    icon: PersonSimpleRun,
  },
  {
    caption: 'Configuração',
    href: '/app/perfil',
    icon: UserGear,
  },
];
export function NavBar() {
  return (
    <nav>
      <div>
        {menus.map((menu) => (
          <NavLink
            Icon={menu.icon}
            caption={menu.caption}
            href={menu.href}
            key={menu.href}
          />
          // <a
          //   href='#'
          //   key={menu.href}
          //   className='w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start dark:text-gray-200 hover:text-green-500'
          // >
          //   <span className='text-left'>
          //     {<menu.icon size={20} className='fill-current' />}
          //   </span>
          //   <span className='mx-4 text-sm font-normal'>{menu.caption}</span>
          // </a>
        ))}
      </div>
    </nav>
  );
}
