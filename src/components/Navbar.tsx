import React, {useState, useEffect} from "react";
import { Button } from "./ui/button";


const Navbar: React.FC = () => {

    const [ isWhite, setIsWhite ] = useState<boolean>(false); 

    useEffect(
        ()=>{
            window.addEventListener("scroll", ()=>{
                const currentPosition = window.scrollY;
               if(currentPosition>0) {
                    setIsWhite(true);
               }
               else{
               setIsWhite(false)} 
               } )   
        }, []
    )

  return (
    <nav className={` ${isWhite?"bg-background":"bg-transparent"} p-0 w-full px-10 fixed top-0 z-10 h-16 transition-colors ease-in duration-200`}>
        <div className=" flex justify-between items-center h-full">
            <div className=" flex gap-3 items-center">
                <Button size={"icon-lg"} variant={"ghost"} className=" rounded-full hover:bg-slate-700/15"><MenuIcon /></Button>
                <Button variant={"link"} className=" no-underline p-0 flex"><img className=" w-[89px] " src="/logo.svg" alt="hero Image" /></Button>
            </div>

            <div className=" flex gap-4">
                <Button className="mr-2 no-underline" variant={"link"}>Get a ride <GetARideIcon/></Button>
                <Button variant={"secondary"} className=" bg-background rounded-[500px] font-semibold p-3 text-sm">Log in</Button>
                <Button  className=" rounded-[500px] font-semibold text-sm p-3">Sign up</Button>
            </div>
        </div>
    </nav>
        )
}

const GetARideIcon =() => (
    
    <div className="er eg al bc db"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><title>Arrow launch</title><g fill="currentColor"><path d="M21 15v7H2V3h7v3H5v13h13v-4h3Z"></path><path d="M12 1v3h5.9l-8 7.9 2.2 2.2 7.9-8V12h3V1H12Z"></path></g></svg></div>)


const MenuIcon =()=>(
    <svg className=" size-5" width="20" height="20" viewBox="0 0 24 24" fill="none"><title>Three lines</title><path fill-rule="evenodd" clip-rule="evenodd" d="M23 4H1v3h22V4Zm0 7H1v3h22v-3ZM1 18h22v3H1v-3Z" fill="currentColor"></path></svg>
)

export default Navbar;