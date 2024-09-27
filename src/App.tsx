import { useState } from 'react';

import CardInformation from './components/InfoSheet';
import SVGPath from './components/SVGPath';
import data from './data/indonesia.json';
import { IProvince } from './interfaces/IProvince';

export default function App() {
  const [open, setOpen] = useState(false);
  const [province, setProvince] = useState<IProvince | null>(null);

  const handlePathClick = (id: string) => {
    const selectedProvince = data.find((p) => p.id === id);
    if (selectedProvince) {
      setProvince(selectedProvince);
      setOpen(true);
    }
  };

  return (
    <section className='grid h-screen place-items-center'>
      <svg width='1000' height='350'>
        {data.map(({ id, name, d }) => (
          <SVGPath
            key={id}
            id={id}
            name={name}
            d={d}
            onPathClick={() => handlePathClick(id)}
          />
        ))}
      </svg>
      <CardInformation open={open} onOpenChange={setOpen} province={province} />
    </section>
  );
}
