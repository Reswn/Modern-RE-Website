import { ABOUT_US_TEXT } from "@/constants";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-20 border-b pb-10">
      <div className="mb-8">
        <h2 className="mb-6 text-center text-3xl tracking-tighter text-black sm:text-4xl lg:text-5xl">
          About Us
        </h2>
        <p className="py-6 text-center text-lg tracking-tighter text-black lg:pr-20">
          {ABOUT_US_TEXT}
        </p>
      </div>
      <div className="flex flex-wrap text-center">
        <div className="w-full border-neutral-700 p-6 text-black lg:w-1/2 lg:border-r">
          <p className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-800 bg-clip-text text-5xl text-transparent lg:text-7xl">
            1000+
          </p>
          <p className="my-8 font-medium">Customers served</p>
        </div>
        <div className="w-full p-6 lg:w-1/2 ">
          <p className="bg-gradient-to-r from-green-400 to bg-green-800 bg-clip-text text-5xl text-transparent lg:textt-7xl">
            500+
          </p>
          <p className="my-8 font-medium  text-black">Properties Sold!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
