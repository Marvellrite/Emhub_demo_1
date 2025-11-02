const cities = [  "Akron", "Albuquerque", "Bridgeport","Concord", "Dayton", "El Paso", "Hartford", "Houston", "Indianapolis", "McAllen", "Mesa", "Milwaukee", "Nashville", "New Orleans", "Oklahoma City", "Omaha", "Orlando", "Palm Bay", "Providence", "Queens", "San Antonio", "Stony Brook", "Tucson", "West Hollywood" ]


const CitiesNearMe = ()=>{
    return(
        <section className=" mt-40 px-10">
            <div className=" flex justify-between"> <h2 className=" font-bold text-[36px]">Cities near me</h2> <a className=" text-foreground underline-offset-2 underline font-semibold">View all 500+ cities</a></div>

            <div className=" grid grid-cols-[repeat(4,minmax(210px,1fr))] gap-6 mt-6">
                {cities.map((city, index)=>{
                    return <div key={index}>{city}</div>
                })}
            </div>
        </section>
    )
}

export default CitiesNearMe