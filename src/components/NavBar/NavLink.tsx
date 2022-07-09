import { IconProps } from 'phosphor-react';
import { HTMLProps } from 'react';
import { ActiveLink } from './ActiveLink';
interface NavLinkProps extends HTMLProps<HTMLAnchorElement> {
  caption: string;
  href: string;
  shouldMatchExactHref?: boolean;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function NavLink({
  caption,
  href,
  Icon,
  shouldMatchExactHref = true,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref shouldMatchExactHref>
      <a {...rest}>
        <span className='text-left'>
          {<Icon size={20} className='fill-current' />}
        </span>
        <span className='mx-4 text-sm font-normal'>{caption}</span>
      </a>
    </ActiveLink>
  );
}
