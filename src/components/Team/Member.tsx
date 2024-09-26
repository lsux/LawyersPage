import { EMAIL, PHONE_NUMBER_TEXT } from "@/texts";
import { Blog } from "@/types/blog";
import { IMember } from "@/types/team";
import Image from "next/image";
import Link from "next/link";

const Member = ({ member }: { member: IMember }) => {
  const { name, image, email, phoneNumber } = member;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          <Image
            src={image}
            alt="image"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {name}
            </Link>
          </h3>
          <p className="mb-4 border-b border-body-color border-opacity-10  text-base font-medium text-body-color dark:border-white dark:border-opacity-10"></p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  {EMAIL}
                </h4>
                <p className="text-xs text-body-color">{email}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                {PHONE_NUMBER_TEXT}
              </h4>
              <p className="text-xs text-body-color">{phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
