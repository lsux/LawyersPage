const SingleSector = ({
  sector,
}: {
  sector: {
    icon: string;
    title: string;
  };
}) => {
  const { icon, title } = sector;
  return (
    <div className="flex w-full justify-center">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-5 flex h-[120px] w-[120px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="text-center text-base font-bold text-black dark:text-white sm:text-base lg:text-base xl:text-base">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SingleSector;
