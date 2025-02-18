interface VideoProps {
  muxVideo: {
    asset: {
      playbackId: string;
    };
  };
  title: string;
}

export default function VideoComponent({ value }: { value: VideoProps }) {
  return (
    <div>
      <p>VideoComponent</p>
    </div>
  );
}
