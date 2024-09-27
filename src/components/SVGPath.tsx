interface SVGPathProps {
  id: string;
  name: string;
  d: string;
  onPathClick: () => void;
}

export default function SVGPath({ id, name, d, onPathClick }: SVGPathProps) {
  return (
    <path
      id={id}
      d={d}
      strokeWidth='.5'
      onClick={onPathClick}
      className='cursor-pointer fill-[#f00] stroke-slate-300 transition hover:fill-white hover:stroke-[#f00]'
    >
      <title>{name}</title>
    </path>
  );
}
