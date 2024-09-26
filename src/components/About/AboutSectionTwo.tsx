import {
  MISSION,
  MISSION_DESCRIPTION,
  VISION,
  VISION_DESCRIPTION,
} from "@/texts";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 max-w-[100%] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about1.jpg"
                alt="about image"
                width={1500}
                height={1000}
                className="rounded drop-shadow-three"
              />
            </div>
          </div>
          <div className="w-full justify-end px-4 lg:flex lg:w-1/2">
            <div className="max-w-[570px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {MISSION}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {MISSION_DESCRIPTION}
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {VISION}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {VISION_DESCRIPTION}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
