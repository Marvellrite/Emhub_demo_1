const Countries = [
  "Australia",
  "Belgium",
  "Canada",
  "Chile",
  "Costa Rica",
  "Dominican Republic",
  "Ecuador",
  "El Salvador",
  "France",
  "Germany",
  "Guatemala",
  "Ireland",
  "Italy",
  "Japan",
  "Kenya",
  "Luxembourg",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Panama",
  "Poland",
  "Portugal",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Taiwan (ROC)",
  "United Kingdom",
  "United States"
];


const CountriesNearMe = ()=>{
    return(
        <section className=" mt-20 px-10">
            <div className=" flex justify-between"> <h2 className=" font-bold text-[36px]">Countries with Uber Eats</h2> <a className=" text-foreground underline-offset-2 underline font-semibold">View all Countries</a></div>

            <div className=" grid grid-cols-[repeat(4,minmax(210px,1fr))] gap-6 mt-6">
                {Countries.map((countries, index)=>{
                    return <a key={index}>{countries}</a>
                })}
            </div>
        </section>
    )
}

export default CountriesNearMe