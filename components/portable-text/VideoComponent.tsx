import MuxPlayer from "@mux/mux-player-react";

interface VideoProps {
  disableCookies: boolean;
  muxVideo: {
    asset: {
      playbackId: string;
    };
  };
  title: string;
}

export default function VideoComponent({ value }: { value: VideoProps }) {
  const { disableCookies, muxVideo, title } = value;
  return (
    <div>
      <MuxPlayer
        disableCookies={disableCookies}
        playbackId={muxVideo.asset.playbackId}
        title={title}
      />
    </div>
  );
}
