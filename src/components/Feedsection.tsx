import React from "react";

const FeedSection: React.FC = () => {
    return (
        <section className=" mt-20 px-10">
            
            <div className=" flex ">
                <div className=" flex flex-col gap-0 items-start space-y-2 px-3">
                    <div><img src="/feed.webp" alt="feed your employees" /></div>
                    <p className=" text-[28px] font-bold">Feed your employees</p>
                    <a className=" text-foreground p-0 underline-offset-2 font-semibold underline">Create a business account</a>
                </div>
                <div className=" flex flex-col gap-0 items-start space-y-2 px-3">
                    <div><img src="/restaurant.webp" alt="feed your employees" /></div>
                    <p className=" text-[28px] font-bold">Your restaurant, delivered</p>
                    <a className=" text-foreground p-0 underline-offset-2 font-semibold underline">Add your restaurant</a>
                </div>
                <div className=" flex flex-col gap-0 items-start space-y-2 px-3">
                    <div><img src="/deliver.webp" alt="feed your employees" /></div>
                    <p className=" text-[28px] font-bold">Feed your employees</p>
                    <a className=" text-foreground p-0 underline-offset-2 font-semibold underline">Sign up to deliver</a>
                </div>
            </div>
        </section>
    )
}

export default FeedSection