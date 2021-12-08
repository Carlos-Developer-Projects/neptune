export default function Image({imageSrc, imageAlt}){
    return(
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-70">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-center object-cover sm:w-full sm:h-full"
        />
      </div>
    )
}