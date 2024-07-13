const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl text-blue-500 mt-6 font-semibold">{title}</h2>
      <p className="lg:w-3/2 mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeader;
