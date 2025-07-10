import { FOOTER } from "@/constants";
import Link from "next/link";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-blue-900 py-20 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap border-b border-neutral-700">
          {/* Brand Section */}
          <div className="w-full p-4 sm:w-1/2 lg:w-6/12">
            <h2 className="text-xl font-semibold">Reales</h2>
            <p className="py-8 text-sm lg:max-w-sm">{FOOTER.description}</p>
            <div className="my-10 flex flex-wrap gap-4">
              <FacebookIcon />
              <InstagramIcon />
              <GithubIcon />
              <TwitterIcon />
            </div>
          </div>

          {/* Link Categories */}
          {FOOTER.categories.map((category, index) => (
            <div key={index} className="w-full p-4 sm:w-1/2 lg:w-2/12">
              <h3 className="pb-4 font-semibold uppercase">{category.name}</h3>
              <ul>
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="my-2">
                    <Link
                      href={link.url}
                      className="text-sm text-white hover:text-neutral-400"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center text-sm text-neutral-500">
          {FOOTER.copyright}
        </p>
      </div>
    </div>
  );
};

export default Footer;
