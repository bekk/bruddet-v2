import DiceFive from '@/assets/review/dice/DiceFive';
import DiceFour from '@/assets/review/dice/DiceFour';
import DiceOne from '@/assets/review/dice/DiceOne';
import DiceSix from '@/assets/review/dice/DiceSix';
import DiceThree from '@/assets/review/dice/DiceThree';
import DiceTwo from '@/assets/review/dice/DiceTwo';
import StarsFive from '@/assets/review/stars/StarsFive';
import StarsFour from '@/assets/review/stars/StarsFour';
import StarsOne from '@/assets/review/stars/StarsOne';
import StarsThree from '@/assets/review/stars/StarsThree';
import StarsTwo from '@/assets/review/stars/StarsTwo';

// ...existing code...
function getRating(rating: number, ratingType: string) {
  if (ratingType === 'star') {
    switch (rating) {
      case 1:
        return <StarsOne />;
      case 2:
        return <StarsTwo />;
      case 3:
        return <StarsThree />;
      case 4:
        return <StarsFour />;
      case 5:
        return <StarsFive />;
      default:
        return null;
    }
  } else if (ratingType === 'dice') {
    switch (rating) {
      case 1:
        return <DiceOne />;
      case 2:
        return <DiceTwo />;
      case 3:
        return <DiceThree />;
      case 4:
        return <DiceFour />;
      case 5:
        return <DiceFive />;
      case 6:
        return <DiceSix />;
      default:
        return null;
    }
  }
  return null;
}

export type ReviewComponentProps = {
  value: {
    content?: string;
    source?: string;
    company?: string;
    date?: string;
    link?: string;
    type?: string;
    score?: number;
  };
};

export default function ReviewComponent({ value }: ReviewComponentProps) {
  return (
    <blockquote className="flex flex-col text-center justify-center items-center gap-4">
      <span className="block text-2xl font-bold">{value.content}</span>
      <p className="not-italic text-lg">
        <span className="uppercase">{value.source}</span>
        {value.link ? (
          <>
            {value.source && ','} <a href={value.link}>{value.company}</a>
          </>
        ) : (
          <>
            {value.source && value.company && ','} {value.company}
          </>
        )}
      </p>

      {value?.score && value?.type && value.type != 'standard' ? (
        <div className="">{getRating(value.score, value.type)}</div>
      ) : null}
    </blockquote>
  );
}
