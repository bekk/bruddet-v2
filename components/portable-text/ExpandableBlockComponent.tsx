import { PortableText } from "next-sanity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { portableTextComponents } from "./components";

interface ExpandableBlockProps {
  value: {
    title: string;
    content: any; // Adjust the type as necessary based on the expected content structure
  };
}

export default function ExpandableBlockComponent({
  value,
}: ExpandableBlockProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={value.title}>
        <AccordionTrigger>{value.title}</AccordionTrigger>
        <AccordionContent>
          <PortableText
            components={portableTextComponents}
            value={value.content}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
