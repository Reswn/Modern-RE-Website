import { FEATURED_PROPERTIES } from "@/constants";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

const FeaturedProperties = () => {
  return (
    <div className="container mx-auto border-b py-6 pb-10">
      <h2 className="text-center text-3xl tracking-tighter text-black sm:text-4xl lg:text-5xl">
        Featured Properties
      </h2>
      <div className="flex flex-wrap">
        {FEATURED_PROPERTIES.map((property, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <Link href="#" className="m-2 inline-block">
              <div className="p-8 bg-white rounded-md shadow-md">
                <Image
                  className="mb-8 rounded-md object-cover"
                  src={property.image}
                  width={300}
                  height={300}
                  alt={property.name}
                />
                <div className="text-center text-black">
                  <h6 className="mb-2 mt-2 font-medium">{property.name}</h6>
                  <span className="block mb-2">${property.price}</span>
                  <div className="mt-2 flex items-center justify-center text-black">
                    <Star fill="gold" strokeWidth={0} className="mr-2" />
                    <span className="text-sm">
                      {property.rating} ({property.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
