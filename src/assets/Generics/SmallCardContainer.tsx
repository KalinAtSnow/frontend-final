import { useState, useEffect } from "react";

const SmallCardContainer: React.FC<{
  cardUrl: string;
  alt?: string;
}> = ({ cardUrl, alt }) => {
  const [dataSaver, setDataSaver] = useState<boolean>(false);
  useEffect(() => {
    setDataSaver(localStorage.getItem("dataSaver") === "true");
  }, []);
  return (
    <div>
      <img
        src={dataSaver ? cardUrl : ""}
        alt={alt}
        className="h-40 min-w-28 max-w-28"
      />
    </div>
  );
};
export default SmallCardContainer;
