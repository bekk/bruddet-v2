import { stegaClean } from 'next-sanity';

export interface QuoteBombProps {
  value: {
    quote: string;
    creditsSource: string;
    creditsMedia: string;
  };
}

export default function QuoteBombComponent({ value }: QuoteBombProps) {
  const { quote, creditsSource, creditsMedia } = value;
  const cleanQuote = stegaClean(quote);
  const lengthOfString = cleanQuote.length;

  const getFontSize = () => {
    if (lengthOfString < 30) {
      return '80px';
    } else if (lengthOfString >= 30 && lengthOfString < 45) {
      return '70px';
    } else if (lengthOfString >= 45 && lengthOfString < 60) {
      return '55px';
    } else if (lengthOfString >= 60 && lengthOfString < 80) {
      return '45px';
    } else if (lengthOfString >= 80 && lengthOfString < 90) {
      return '40px';
    } else if (lengthOfString >= 90 && lengthOfString < 100) {
      return '35px';
    } else {
      return '20px';
    }
  };

  const getLineHeight = () => {
    if (lengthOfString < 30) {
      return '70px';
    } else if (lengthOfString >= 30 && lengthOfString < 45) {
      return '55px';
    } else if (lengthOfString >= 45 && lengthOfString < 60) {
      return '50px';
    } else if (lengthOfString >= 60 && lengthOfString < 80) {
      return '45px';
    } else if (lengthOfString >= 80 && lengthOfString < 90) {
      return '40px';
    } else if (lengthOfString >= 85 && lengthOfString < 100) {
      return '35px';
    } else {
      return '20px';
    }
  };

  const fontSize = getFontSize();
  const lineHeight = getLineHeight();

  return (
    <div className="flex flex-col items-center">
      <svg
        width="474"
        viewBox="0 0 474 360"
        fill="none"
        style={{ maxWidth: '15em' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="imageMask"
          d="M54 78.0296L105 16.8473L185 0L358 24.8276L402 106.404L474 208.374L422 283.744L392 343.153L190 360L68 343.153L61 287.291L9 222.562L0 180.887L68 116.158L54 78.0296Z"
          className="fill-primary"
        />

        <foreignObject x="80" y="30" width="290" height="300">
          <div
            className="flex items-center justify-center h-full"
            style={{
              fontSize: fontSize,
              lineHeight: lineHeight,
            }}
          >
            <span className="p-0 m-0 text-primary-foreground">{quote}</span>
          </div>
        </foreignObject>
      </svg>
      {(creditsMedia || creditsSource) && (
        <div className="flex flex-col items-center my-8">
          <p>{creditsSource}</p>
          <p>{creditsMedia}</p>
        </div>
      )}
    </div>
  );
}
