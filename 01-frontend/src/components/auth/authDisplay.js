export default function AuthDisplay({image}){
    return(
        <div className="hidden lg:block relative w-0 flex-1">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={image}
              alt="Neptune Chain Services"
            />
        </div>
    )
}