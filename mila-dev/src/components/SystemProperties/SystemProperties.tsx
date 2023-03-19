'use client'

import { useState, FC } from 'react';

export default function SystemProperties () : FC {
  const [isOpen, setOpen] = useState<boolean>(false);
  return <section className={`${isOpen ? 'visible' : 'hidden'}`}>
    <div>
      <nav>
        <ul></ul>
      </nav>
    </div>
  </section>
};
