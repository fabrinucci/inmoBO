'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '../icons';

export const ThemeSwitch = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return (
      <img
        className='h-6 w-6'
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        alt='Loading Light/Dark Toggle'
        title='Loading Light/Dark Toggle'
      />
    );
  }

  if (resolvedTheme === 'dark') {
    return (
      <button className='text-white' onClick={() => setTheme('light')}>
        <SunIcon />
      </button>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <button className='text-white' onClick={() => setTheme('dark')}>
        <MoonIcon />
      </button>
    );
  }
};
