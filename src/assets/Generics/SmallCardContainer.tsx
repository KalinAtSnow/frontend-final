const SmallCardContainer: React.FC<{
    cardUrl: string;
    alt?: string;
  }> = ({ cardUrl, alt }) => {
    return (
        <div>
          <img src={cardUrl} alt={alt} className="h-40 min-w-28 max-w-28" />
        </div>
    );
  };
  export default SmallCardContainer