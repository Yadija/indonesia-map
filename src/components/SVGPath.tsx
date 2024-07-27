interface SVGPathProps {
  id: string;
  name: string;
  d: string;
}

export default function SVGPath({ id, name, d }: SVGPathProps) {
  return (
    <path
      id={id}
      name={name}
      d={d}
      strokeWidth='.5'
      className='stroke-slate-300 transition hover:fill-orange-500'
    >
      <title>{name}</title>
    </path>
  );
}
