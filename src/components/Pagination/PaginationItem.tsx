type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
};
export function PaginationItem({
  number,
  isCurrent,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <button
        disabled
        className='text-xs w-4 text-green-500 disabled:text-green-800 disabled:cursor-default'
      >
        {number}
      </button>
    );
  } else {
    return (
      <button
        disabled
        className='text-xs w-4 text-gray-700 hover:text-gray-500 '
        onClick={() => onPageChange(number)}
      >
        {number}
      </button>
    );
  }
}
