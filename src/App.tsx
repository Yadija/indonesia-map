import SVGPath from './components/SVGPath';
import data from './data/indonesia.json';

export default function App() {
  return (
    <section className='grid h-screen place-items-center'>
      <svg width='1000' height='350'>
        {data.map(({ id, name, d }) => (
          <SVGPath key={id} id={id} name={name} d={d} />
        ))}
      </svg>
    </section>
  );
}
