import { SERVICES_TEXT } from "@/constants";
import Image from "next/image";

const Service = () => {
  return (
    <div className="container mx-auto my-8 border-b pb-10 bg-blue-300 rounded-lg">
      <h2 className="text-black mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        Layanan Kami
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="p-6">
            <Image
              className="rounded-xl object-cover"
              src="/service.jpeg"
              width={600}
              height={600}
              alt="Layanan kami"
            />
          </div>
        </div>
        <div className="text-black w-full lg:w-1/2 px-6 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-6xl leading-snug">
            Kami hadir di <span className="font-bold">20+ provinsi</span>
            <span className="block">di Indonesia!</span>
          </h2>
          <p className="max-w-xl text-lg tracking-tight lg:pr-20">
            {SERVICES_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
