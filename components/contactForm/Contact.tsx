"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TFormSchema, formSchema } from "@/lib/formSchema";

import { ModalContainer } from "../ModalContainer";
import Input from "./Input";
import TextArea from "./TextArea";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageState, setMessageState] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (e: TFormSchema) => {
    setLoading(true);
    axios
      .post("/api/mail", {
        firstName: e.firstName,
        lastName: e.lastName,
        email: e.email,
        phoneNumber: e.phoneNumber,
        address: e.address,
        zipcode: e.zipcode,
        city: e.city,
        message: e.message,
      })
      .then((res) => {
        if (res.status === 200) {
          reset();
          setLoading(false);
          setSuccess(true);
          setMessageState(res.data.message);
          setIsModalOpen(true);
        } else {
          setLoading(false);
          setMessageState(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessageState(String(err.message));
      });
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="text-gray-600 bg-gray-300 body-font h-screen relative"
    >
      <div className="px-5 py-14 mx-auto">
        <div className="flex flex-col text-center w-full h-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Boka konsultation
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Fyll i formuläret nedan för att boka in en kostnadsfri konsultation
            med oss.
          </p>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -m-2">
              <Input
                register={register("firstName")}
                label="Förnamn"
                error={errors.firstName?.message}
              />

              <Input
                register={register("lastName")}
                label="Efternamn"
                error={errors.lastName?.message}
              />
              <Input
                register={register("email")}
                label="E-post"
                error={errors.email?.message}
              />
              <Input
                register={register("phoneNumber")}
                label="Telefonnummer"
                placeholder="+46 733 00 00 00"
                error={errors.phoneNumber?.message}
              />
              <Input
                register={register("address")}
                label="Adress"
                error={errors.address?.message}
                className="lg:w-full md:w-full"
              />
              <Input
                register={register("zipcode")}
                label="Postnummer"
                error={errors.zipcode?.message}
              />
              <Input
                register={register("city")}
                label="Ort"
                error={errors.city?.message}
              />
              <TextArea
                register={register("message")}
                label="Meddelande"
                placeholder="Beskriv gärna i vilket ärende du kontaktar oss"
                error={errors.message?.message}
              />
              <div className="p-2 w-full">
                <button
                  type="submit"
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
                  Genom att klicka på “Skicka” bekräftar jag att jag läst
                  <br />
                  <Link href="/">
                    <span className="flex text-black underline">
                      Solenergi Teamet Integritetspolicy
                    </span>
                  </Link>
                </p>
              </div>
              <ModalContainer
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
              >
                <div>
                  <p>
                    Tack för att du kontaktat Solenergiteamet! Vi hör av oss
                    till dig inom 24 timmar.
                  </p>
                </div>
              </ModalContainer>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
