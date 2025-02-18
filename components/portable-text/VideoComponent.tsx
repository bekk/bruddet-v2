interface VideoProps {
  muxVideo: {
    asset: {
      playbackId: string;
    };
  };
  title: string;
}

export default function VideoComponent({ props }: { props: VideoProps }) {
  console.log(props);
  return (
    <div>
      <p>VideoComponent</p>
    </div>
  );
}
