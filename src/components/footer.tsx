

const Footer = ()=>(
    <footer className=" mt-20 pt-[72px] px-10">
        <div className=" flex ">
            <div className=" flex flex-col grow-2 justify-between">
                <div className=" w-[134px]"><img src="/logo.svg" alt="Logo of Uber eats" /></div>
                    <div className=" flex gap-3">
                        <img src="" alt="" />
                    </div>

                    <div className=" flex gap-2">
                        <div className=" w-[135px]"><img src="/applestore.svg" alt="Get on apple store image" /></div>
                        <div className=" w-[135px]"><img src="/googleplay.png" alt="Get on google play store" /></div>
                    </div>
                   
            </div>

            <div className=" grid grid-cols-[repeat(2,minmax(236px,1fr))] gap-y-4">
            {footerTexts.map((text, index)=>{
                return(
                    <a href="#" key={index}>{text}</a>
                )
            })}

            </div>
        </div>
        <hr className=" my-10"/>

    </footer>
)

const LanguageSvg = ()=>(<svg aria-label="Select a language" role="img" focusable="false" viewBox="0 0 16 15" className=" size-4 er eg ge hn"><path d="M12.267 6.667H9.733l-.933 2.2c-.467-.2-1-.534-1.533-.934.866-.866 1.6-2 2-3.266h1.4v-2h-4v-2h-2v2h-4v2h1.466c.4 1.266 1.134 2.4 1.934 3.266-1.4.934-2.734 1.467-2.734 1.467v2.133L2 11.267c.133-.067 1.867-.667 3.667-2 .8.6 1.666 1.066 2.333 1.4l-1.8 4h2.2l.867-2h3.466l.867 2h2.2zm-5.2-2a6.79 6.79 0 01-1.4 2c-.534-.6-1.067-1.267-1.4-2zm3.066 6L11 8.733l.867 1.934z"></path></svg>)


const footerTexts = [
  "Get Help",
  "Buy gift cards",
  "Add your restaurant",
  "Sign up to deliver",
  "Create a business account",
  "Promotions",
  "Restaurants near me",
  "View all cities",
  "View all countries",
  "Pickup near me",
  "About Uber Eats",
  "Shop groceries",
  <span className=" flex gap-2 items-center"><LanguageSvg/> English</span>,
];


export default Footer;