//components
import AuthDisplay from "../components/auth/authDisplay";
import AuthLogo from "../components/auth/authLogo";
//layout
export default function Auth({image, title, children}){
    return(
        <>
            <div className="h-screen flex">
                {/* Form Wrapper */}
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <AuthLogo title={title} />
                        {children}
                    </div>
                </div>

                {/* Display Wrapper */}
                <AuthDisplay image={image} />
            </div>
        </>
    )
}