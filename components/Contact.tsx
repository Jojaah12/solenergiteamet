import Link from "next/link";

const Contact = () => {
  return (
    <section className="text-gray-600 bg-gray-300 body-font min-h-screen relative">
      <form>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Boka konsultation
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Fyll i formuläret nedan för att boka in en kostnadsfri
              konsultation med oss.
            </p>
            <label className="relative mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Default select
            </label>
            <select
              data-te-select-init
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="1">Privat</option>
              <option value="2">Företag</option>
            </select>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Ditt namn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#DBA737] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Adress
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#DBA737] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                postnummer
              </label>
              <input
                type="number"
                id="zip"
                name="zip"
                className="remove-arrow w-full bg-white rounded border border-gray-300 focus:border-[#DBA737] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-[#DBA737] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Meddelande
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-[#DBA737] border-0 py-2 px-6 focus:outline-none hover:bg-[#B78C26] rounded text-lg">
              Skicka
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Genom att klicka på “Skicka” bekräftar jag att jag läst
              <Link href="/">
                <span></span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
