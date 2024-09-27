interface SVGElementProps {
  shapes: { id: string; name: string; d: string }[];
  onPathClick: (id: string) => void;
}

export default function SVGElement({ shapes, onPathClick }: SVGElementProps) {
  return (
    <svg width='1000' height='350'>
      {shapes.map(({ id, name, d }) => (
        <path
          key={id}
          id={id}
          d={d}
          strokeWidth='.5'
          onClick={() => onPathClick(id)}
          className='cursor-pointer fill-[#f00] stroke-slate-300 transition hover:fill-white hover:stroke-[#f00]'
        >
          <title>{name}</title>
        </path>
      ))}
    </svg>
  );
}
