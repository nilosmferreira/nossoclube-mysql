import { cloneElement, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className: isActive
          ? 'w-full font-thin uppercase text-green-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-green-100 border-r-4 border-green-500 dark:from-gray-700 dark:to-gray-800'
          : 'w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start dark:text-gray-200 hover:text-green-500',
      })}
    </Link>
  );
}
