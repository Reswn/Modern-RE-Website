import { FAQ } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // ganti sesuai dengan lokasi komponen Accordion kamu

const Faq = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="mb-20 text-center text-3xl tracking-tighter text-black sm:text-4xl lg:text-5xl">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-black">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-black">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
