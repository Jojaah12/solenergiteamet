import Link from "next/link";
import Input from "./Input";
import TextArea from "./TextArea";

const Contact = () => {
  return (
    <section className="text-gray-600 bg-gray-300 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Boka konsultation
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Fyll i formuläret nedan för att boka in en kostnadsfri
            konsultation med oss.
          </p>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <Input id="firstName" label="Förnamn" placeholder="" />
            <Input id="lastName" label="Efternamn" placeholder=" " />
            <Input id="email" label="E-post" placeholder="" />
            <Input
              id="number"
              label="Telefonnummer"
              placeholder="+4673 00 00 000"
            />
            <Input
              id="name"
              label="Adress"
              className="lg:w-full"
              placeholder=""
            />
            <Input id="zip" label="Postnummer" placeholder="" />
            <Input id="ort" label="Ort" placeholder="" />
            <TextArea
              id="message"
              label="Meddelande"
              placeholder="Ditt meddelande..."
            />

            <div className="p-2 w-full">
              <button
                type="button"
                className="text-white bg-[#DBA737] hover:bg-[#B78C26] focus:ring-4 
              focus:outline-none focus:ring-[#FFD700] font-semibold rounded-lg text-medium px-5 
              py-2.5 text-center inline-flex items-center justify-center 
              dark:bg-[#B78C26] "
              >
                Skicka
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Genom att klicka på “Skicka” bekräftar jag att jag
                läst
                <br />
                <Link href="/">
                  <span className="flex text-black underline">
                    Solenergi Teamet Integritetspolicy
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
