import React from "react";
import { Input } from "./ui/input";
import { MapPin } from 'lucide-react';
import { Button } from "./ui/button";


const Hero: React.FC = () => (
    <section className=" px-12 flex items-center text-center  h-[647px] bg-[url('/hero.webp')] bg-cover bg-center">
        <div>
            <h1 className=" text-left mb-10 text-[52px] font-bold">Order delivery near you</h1>
            <div>
                <div className=" max-w-209 flex gap-2 items-stretch h-14">

                    <div className=" rounded-lg bg-background flex gap-3 items-center py-2 px-4 grow ">
                        <MapPin className=" size-5"/>
                        <Input className="  min-w-[400px] h-12 rounded-lg  shadow-none border-none  focus-visible:ring-0 placeholder:font-semibold placeholder:text-lg" type="text" placeholder="Enter delivery address" />
                    </div>

                    <button className=" flex items-center bg-background hover:bg-background text-foreground rounded-none " > <div className=" size-12 flex justify-center items-center"><Clock/></div>  <span className=" text-lg font-semibold  ">Deliver Now</span> <div className="size-12 flex justify-center items-center "><Down/></div> </button>

                    <button className=" py-3 px-4 text-background text-lg font-semibold bg-foreground rounded-lg hover:bg-foreground">Search here</button>


                </div>
                    <div className=" text-left mt-6 "> <span className=" font-medium"> Or</span> <Button className=" p-0 underline-offset-2 underline" variant={"link"}>Sign In</Button></div>
            </div>

        </div>
    </section>
)

const Clock = () => (
    <div className="fn fo fp"><svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="When" role="img" focusable="false"><path d="M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z" fill="#000000"></path></svg></div>
)

const Down = ()=>(
    <div className="fn fo fp"><svg width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z" fill="#000000" transform="rotate(180, 12, 12)"></path></svg></div>
)

export default Hero