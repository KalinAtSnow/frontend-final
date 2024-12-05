import { useEffect, useState } from "react";

const FullCardContainer: React.FC<{
  cardUrl: string;
  alt?: string;
}> = ({ cardUrl, alt }) => {
  const [dataSaver, setDataSaver] = useState<boolean>(false);
  useEffect(() => {
    setDataSaver(localStorage.getItem("dataSaver") === "true");
  }, []);

  return (
    <img
      src={dataSaver ? cardUrl : ""}
      alt={alt}
      className="hover:scale-105 hover:shadow-lg w-full max-w-44 min-w-44 sm:max-w-52 sm:min-w-52 md:max-w-56 md:min-w-56  rounded shadow-inner p-2"
    />
  );
};
export default FullCardContainer;
