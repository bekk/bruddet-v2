import { Badge } from "@/components/ui/badge";


export default function Page() {
    return (
        <>
        <div className="wrap">
            {Array.from({length: 100}).map((_, i) => (
                <Badge className="mr-2" variant={"outline"} key={i}>Hello</Badge>
            ))}
        </div>
        </>
    );
}