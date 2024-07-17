import "./App.css";
import first from "./media/first.svg";
import secound from "./media/secound.svg";
import third from "./media/third.svg";
import fourth from "./media/fourth.svg";
import arrow from "./media/arrow.svg";
import desktoplogo from "./media/desktoplogo.svg"
import p1 from "./media/p1.svg"
import p2 from "./media/p2.svg"
import p3 from "./media/p3.svg"
import p4 from "./media/p4.svg"
import cursor from "./media/cursor.svg"
import marker from "./media/marker 1.svg"
import phoneflip from "./media/phone-flip 1.svg"
import envelope from "./media/envelope 1.svg"

function App() {
  return (
    <>
      <navbar>
        <div className=" bg-[#FDFEF0]">
          <div className="flex w-[90%] m-auto justify-between items py-4">
            <div className="font-bold text-xl text-pink-500">Medium Escape</div>
            <div className="pr-3">
              <ul className="flex gap-6 font-normal cursor-pointer">
                <li>Home</li>
                <li>Our Services</li>
                <li>Portfolio</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </navbar>
      <section className="bg-[#FDFEF0] relative">
        <div className="w-[90%] flex flex-col m-auto justify-center items-center gap-7 py-32">
          <div className="text-5xl leading-[80px] font-bold text-center  ">
            We help <span className="bg-[#7ab3fe4f]">brands</span> engage <br /> with their audience.
          </div>
          <div>
            <button
              className="bg-pink-400 py-3 px-8 text-white rounded-lg
             text-base shadow-[5px_5px_0px_0px_rgba(203,253,19,0.5)]"
            >
              Get Started
            </button>
          </div>
          <img className="w-40 absolute left-0 top-5 drop-shadow-[5px_5px_0px_rgba(122,180,254,0.5)] " src={first} />
          <img className="w-20 absolute left-44 bottom-32 drop-shadow-[5px_5px_0px_rgba(255,105,179,0.5)]" src={secound} />
          <img className="w-32 absolute right-60 bottom-6 drop-shadow-[5px_5px_0px_rgba(255,105,179,0.5)]" src={third} />
          <img className="w-32 absolute right-0 top-48 drop-shadow-[5px_5px_0px_rgba(122,180,254,0.5)]" src={fourth} />
          <img className=" absolute top-48 left-[56%]" src={cursor} />
        </div>
      </section>

      <section className="bg-[#FDFEF0]">
        <div className="w-[90%] m-auto py-16 flex flex-col justify-center items-center">
          <div className="text-4xl font-bold pb-9">Our Services</div>
          <div className="w-[100%] grid grid-cols-3 gap-2">
            <div className="bg-white px-6 py-5 border-8 border-black rounded-3xl ">
              <div className=" font-bold text-2xl text-pink-400">
                Web Design
              </div>
              <div className="py-5 pb-14">
                Creating beautiful, easy-to-use websites <br /> that attract and
                engage visitors.
              </div>
            </div>
            <div className="row-span-2 bg-white px-6 py-5 border-8 border-black rounded-3xl "> 
              <div className="font-bold text-2xl text-pink-400">Digital Marketing</div>
              <div className="py-5 pb-14">Growing your business online with smart, effective marketing strategies. </div>
              <img className="w-[80%] m-auto" src={desktoplogo} />
            </div>
            <div className="bg-white px-6 py-5 border-8 border-black rounded-3xl  ">
              <div className=" font-bold text-2xl text-[#C03AFF]">
                Social Media <br/> Content Creation
              </div>
              <div className="py-5 pb-14">
                Making fun and engaging posts to boost your social media
                presence.
              </div>
            </div>
            <div className="bg-white px-6 py-5 border-8 border-black rounded-3xl  ">
              <div className=" font-bold text-2xl text-[#7AB4FE]">
                Paid Adds
              </div>
              <div className="py-5 pb-14">
                Running targeted ads that drive traffic and increase sales.
              </div>
            </div>
            <div className="bg-white px-6 py-5 border-8 border-black rounded-3xl  ">
              <div className=" font-bold text-2xl text-[#CBFD13]">SEO</div>
              <div className="py-5 pb-14">
                Improving your website’s ranking so more people can find you on
                search engines.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FDFEF0] relative">
        <div className="w-[90%] m-auto py-5 flex flex-col justify-center items-center pb-96">
          <div className="text-3xl font-bold pb-12">Our Portfolio</div>
          <div className="flex">
              <img className="w-18 absolute left-0" src={p1} />
              <img className="w-[37%] absolute left-[11%]" src={p3} />
              <img className="w-[37%] absolute right-[11%]" src={p2} />
              <img className="w-18 absolute right-0" src={p4} />
          </div>
        </div>
      </section>

      <section className="bg-[#FDFEF0] py-40 relative">
        <div className="bg-white w-[90%] mx-auto py-20 flex flex-col justify-center items-center">
          <div className="text-5xl font-bold text-center leading-[70px] pb-12">
            Ready to take your Buisness to <br /> the next level?
          </div>
          <button
            className="bg-pink-400 py-3 px-8 text-white rounded-lg
             text-base shadow-[5px_5px_0px_0px_rgba(203,253,19,0.5)]"
          >
            Contact Us
          </button>
          <img className="w-20 absolute right-[32%] top-[48%]" src={arrow} />
        </div>
      </section>
      <footer className="bg-[#FDFEF0]">
        <div className="flex w-[90%] m-auto justify-between py-10">
          <div className="flex flex-col">
            <div className="font-bold text-xl text-pink-500">Medium Escape</div>
            <div>
              Empowering Your Online Journey <br /> with Creative Excellence.
            </div>
          </div>
          <div className="flex flex-col cursor-pointer gap-2">
            <div className="font-bold text-lg ">Quick Links</div>
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Portfolio</div>
            <div>Contact</div>
          </div>
          <div className="flex flex-col cursor-pointer gap-2">
            <div className="font-bold text-lg ">Legal</div>
            <div>Privacy Policy</div>
            <div>Term of Service</div>
          </div>
          <div className="flex flex-col cursor-pointer gap-2">
            <div className="font-bold text-lg ">Contact</div>
            <div className="flex"> <img className="pr-1" src={marker}/> Lorem ipsum dollar</div>
            <div className="flex"> <img className="pr-1" src={phoneflip}/> +1 234 56789</div>
            <div className="flex"> <img className="pr-1" src={envelope}/> mediumescape@email.com</div>
          </div>
        </div>
      </footer>
      <div className="bg-[#FDFEF0] flex justify-center items-center py-4">
        © 2024 Medium Escape. All Rights Reserved.
      </div>
    </>
  );
}

export default App;
