import Ibsen from './images/Ibsen';

type Props = {
  socialMediaText?: string | null | undefined;
};

export const SocialMedia = ({ socialMediaText }: Props) => (
  <div className="flex flex-col gap-4 p-12 lg:fixed lg:bottom-16 sm:w-[60%] lg:w-[25%]">
    <Ibsen />
    <p className="text-base">{socialMediaText}</p>
    <div className="flex gap-4">
      <a className="hover:underline" href="https://www.instagram.com/fjaereheia_amfi/">
        INSTAGRAM
      </a>
      <a className="hover:underline" href="https://www.facebook.com/Fjareheia/">
        FACEBOOK
      </a>
    </div>
  </div>
);
