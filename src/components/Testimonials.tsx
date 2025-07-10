import { TESTIMONIALS } from "@/constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="container mx-auto my-8 border-b pb-10 bg-blue-300 rounded-lg">
      <h2 className=" text-black mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        Apa Kata Klien Kami
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="w-full rounded-md p-4 md:w-1/2 lg:w-1/4">
            <div className="flex flex-col items-center text-center bg-white shadow-md p-6 rounded-lg">
              <Image
                className="mb-4 rounded-full border-4 border-neutral-400"
                src={testimonial.image}
                width={80}
                height={80}
                alt={testimonial.name}
              />
              <h4 className="text-lg font-semibold text-black">
                {testimonial.name}
              </h4>
              <span className="text-sm text-neutral-600">
                {testimonial.instagram}
              </span>
              <p className="my-4 text-black">{testimonial.feedback}</p>
              <p className="text-sm text-neutral-500">
                {testimonial.city_country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
