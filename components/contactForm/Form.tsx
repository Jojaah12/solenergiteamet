"use client";
import { validate } from "@/lib/validate";
import Link from "next/link";
import { useState } from "react";

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
  address: string;
  postnummer: string;
  city: string;
  message: string;
}

interface IErrors extends Partial<IValues> {}

const Form = () => {
  const [values, setValues] = useState<IValues>({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    address: "",
    postnummer: "",
    city: "",
    message: "",
  });

  /*   const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const errors = validate();
    if (errors && Object.keys(errors).length > 0) {

    }
  } */

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
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Förnamn
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Efternamn
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  E-post
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Telefonnummer
                </label>
                <input
                  placeholder="+4673 123 12 31"
                  type="text"
                  id="number"
                  name="number"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Adress
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Postnummer
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Ort
                </label>
                <input
                  type="text"
                  id="ort"
                  name="ort"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
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

export default Form;
