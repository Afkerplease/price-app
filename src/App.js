import "./App.css";

function App() {
  return (
    <main className="bg-GrayishBlue h-[100vh] flex items-center ">
      <div className=" container bg-[white] w-[375px] mx-auto  rounded-[5px] md:w-[900px] ">
        <div className="p-8 md:p-10">
          <h1 className=" text-Cyan font-karla text-2xl mb-2 font-bold ">
            Join our community
          </h1>{" "}
          <h2 className="text-BrightYellow font-karla text-xl mb-2  ">
            30-day, hassle-free money back guarantee
          </h2>
          <p className=" text-LightGray text-[16px] font-karla font-[400] ">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className=" md:grid md:grid-cols-2 ">
          <div className="bg-Cyan p-8">
            <h1 className="text-[white] font-karla text-2xl mb-2 ">
              Monthly Subscription
            </h1>{" "}
            <span className="text-3xl text-[white]  font-bold ">$29</span>{" "}
            <span className=" text-LightGray ml-2 font-thin ">per month</span>
            <p className=" text-LightGray text-[16px] mt-2 md:mb-8 ">
              Full access for less than $1 a day
            </p>
            <button className="   w-[100%] bg-BrightYellow rounded-[10px] py-4 mt-4 text-[white] font-karla shadow-lg ">
              Sign Up{" "}
            </button>
          </div>{" "}
          <div className="p-8 bg-lightCyan">
            <h1 className=" text-2xl text-[white] ">Why Us</h1>
            <ul className=" mt-4">
              <li className=" text-LightGray font-thin ">
                Tutorials by industry experts
              </li>
              <li className=" text-LightGray font-thin  ">
                Peer & expert code review
              </li>
              <li className=" text-LightGray font-thin  ">Coding exercises</li>
              <li className=" text-LightGray font-thin  ">
                Access to our GitHub repos
              </li>
              <li className=" text-LightGray font-thin  ">Community forum</li>
              <li className=" text-LightGray font-thin  ">Flashcard decks</li>
              <li className=" text-LightGray  font-thin ">
                {" "}
                New videos every week
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
