export default function VideoComponent({
  value,
}: {
  muxVideo: { asset: { playbackId: string } };
  title: string;
}) {
  console.log(value);
  return (
    <div>
      <p>VideoComponent</p>
    </div>
  );
}
