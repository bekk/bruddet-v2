import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-xl mb-5">
        Takk for at du meldte deg på vårt nyhetsbrev
      </h1>
      <Link href="/">
        <Button>Hjem</Button>
      </Link>
    </div>
  );
}
