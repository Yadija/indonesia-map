import { useState } from 'react';

// components
import InfoSheet from './components/InfoSheet';
import SVGElement from './components/SVGElement';
// data
import indonesiaMap from './data/indonesia-map.json';
// interfaces
import { IProvince } from './interfaces/IProvince';

export default function App() {
  const [open, setOpen] = useState(false);
  const [province, setProvince] = useState<IProvince | null>(null);

  const handlePathClick = (id: string) => {
    const selectedProvince = indonesiaMap.find((map) => map.id === id);
    if (selectedProvince) {
      setProvince(selectedProvince);
      setOpen(true);
    }
  };

  return (
    <section className='grid h-screen place-items-center'>
      <SVGElement shapes={indonesiaMap} onPathClick={handlePathClick}></SVGElement>
      <InfoSheet open={open} onOpenChange={setOpen} province={province} />
    </section>
  );
}
