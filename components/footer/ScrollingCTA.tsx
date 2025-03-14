type ScrollingCTAProps = {
  text: string;
};

type DotProps = {
  color?: string;
  className?: string;
};
function Dot({ color }: DotProps) {
  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 14"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline' }}
    >
      <path
        d="M2.84995 1.67519L0 8.06132L1.21154 11.5019L5.57364 13.5L11 8.34373L8.40257 3.05081L6.00956 0.5L2.84995 1.67519Z"
        className={`fill-${color}`}
      />
    </svg>
  );
}

export default function ScrollingCTA({ text }: ScrollingCTAProps) {
  // Target a consistent total text length (100) to maintain uniform scrolling speed.
  // Increasing this value will speed up scrolling. Decreasing it will slow it down.
  const desiredLength = 100;
  const multiplier = text.length < desiredLength ? Math.ceil(desiredLength / text.length) : 1;

  // Create an array of text+dot elements to properly map through them
  const createMarqueeItems = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <span key={i}>
        <span className="mx-4 font-bold">{text}</span>
        <Dot color="primary" />
      </span>
    ));
  };
  return (
    <>
      <div className="animate-marquee whitespace-nowrap">{createMarqueeItems(multiplier)}</div>
      <div className="absolute flex justify-center items-center animate-marquee2 whitespace-nowrap">
        {createMarqueeItems(multiplier)}
      </div>
    </>
  );
}
