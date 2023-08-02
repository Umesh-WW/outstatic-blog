const Contactus = () => {
  return (
    <>
      <div className="md:flex max-w-[1024px] gap-[1rem] mx-auto ">
        <div className="container shadow-gray-500 shadow-md p-12 my-5">
          <header class="text-cyan-500 text-[40px] font-bold">
            <h1>Contact Us</h1>
          </header>
          <div class="my-8 px-0">
            <form action="#" class="space-y-8">
              <div>
                <label for="name" class="block mb-2  font-medium text-black">
                  Your Name
                </label>
                <input
                  type="text"
                  class="shadow-sm border border-black text-black text-[17px] block max-w-full p-2.5 "
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-[17px] font-medium text-black"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  class="shadow-sm border border-black text-black text-[17px] block max-w-full p-2.5 "
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-[17px] font-medium text-black"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="shadow-sm border border-black text-black text-[17px] block max-w-full p-2.5 "
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-[17px] font-medium text-black"
                >
                  Your message(Optional)
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-[17px] text-black bg-gray-50 shadow-sm border border-black"
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-[17px] font-medium text-center text-white bg-black sm:w-fit "
              >
               Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
