import { MAIN_SECTORS, MAIN_SECTORS_DESCRIPTION, SECTORS } from "@/texts";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";

const Sectors = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={MAIN_SECTORS}
            paragraph={MAIN_SECTORS_DESCRIPTION}
            center
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-5">
            {SECTORS.map((sector) => (
              <SingleFeature key={sector.code} sector={sector} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sectors;
