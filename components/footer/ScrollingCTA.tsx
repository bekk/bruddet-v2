type ScrollingCTAProps = {
  text: string;
};

export default function ScrollingCTA({ text }: ScrollingCTAProps) {
  return (
    <div className="font-bold">
      <div className="animate-marquee whitespace-nowrap">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="m-4">
            {text}
          </span>
        ))}
      </div>
      <div className="absolute flex justify-center items-center animate-marquee2 whitespace-nowrap">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="m-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
