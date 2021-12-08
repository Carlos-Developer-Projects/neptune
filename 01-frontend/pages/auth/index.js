//dependencies
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { useMoralis } from "react-moralis";
//layout
import Auth from '../../src/layouts/auth';
//components
import Link from 'next/link';
import Meta from '../../src/components/global/meta';
import AuthButton from '../../src/components/auth/authButton';
import InputGroup from '../../src/components/forms/inputGroup';
//data
//page
export default function(){
    //state
    const { signup, isAuthenticated, isAuthenticating } = useMoralis();
    const router = useRouter();
    const image = "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80";
    const title="Sign Up";
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[username, setUsername] = useState("");
    const alternateRoute = "/auth/signin";
    //functions
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await signup(username, password, email);
        if(isAuthenticated) router.push('/user');
    };
    const handleChange = (e)=>{
        e.preventDefault();
        console.log(e.target.id);
        switch(e.target.id){
          case "email":
            setEmail(e.target.value);
            break;
          case "password":
            setPassword(e.target.value);
            break;
          case "username":
            setUsername(e.target.value);
            break;
          default:
            break;
        }
    };
    //lifecycle
    useEffect(()=>{
        
    },[isAuthenticated]);
    //render
    return(
        <>
            <Meta title="SignUp | Neptune Chain Services" />
            <Auth image={image} title={title}>
            <div className="mt-8">
                <div className="mt-6">
                {isAuthenticating && <p>Please Wait...</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <InputGroup label="Username" id="username" name="username" type="text" required={true} onChange={handleChange} value={username} />
                    <InputGroup label="Email address" id="email" name="email" type="email" required={true} onChange={handleChange} value={email} />
                    <InputGroup label="Password" id="password" name="password" type="password" required={true} onChange={handleChange} value={password} />

                    <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <Link href="/auth/reset">
                            <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </Link>
                    </div>
                    </div>

                    <AuthButton text="Sign Up" />
                </form>

                <div className="flex items-center justify-between mt-10">
                    <div className="text-sm">
                        <Link href={alternateRoute}>
                        <a className="font-medium text-indigo-600 hover:text-indigo-500">Already a member? Sign in here.</a>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            </Auth>
        </>
    )
}