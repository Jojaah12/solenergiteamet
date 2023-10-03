"use client";
import Link from "next/link";
import { useState } from "react";
import { ModalContainer } from "../ModalContainer";

import Input from "./Input";
import TextArea from "./TextArea";

import axios from "axios";

import { validate } from "@/lib/validate";
import { useForm } from "react-hook-form";

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipcode: string;
  city: string;
  message: string;
}

interface IErrors extends Partial<IValues> {}
const Contact = () => {
  const { register, handleSubmit } = useForm();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipcode: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageState, setMessageState] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const OldHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(formValues);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    axios
      .post("/api/mail", {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        phoneNumber: formValues.phoneNumber,
        address: formValues.address,
        zipcode: formValues.zipcode,
        city: formValues.city,
        message: formValues.message,
      })
      .then((res) => {
        if (res.status === 200) {
          setFormValues({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            zipcode: "",
            city: "",
            message: "",
          });
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
                error={errors.firstName}
                errorMessage={!!errors.firstName ? errors.firstName : ""}
              />
              <Input
                register={register("lastName")}
                label="Efternamn"
                error={errors.lastName}
                errorMessage={!!errors.lastName ? errors.lastName : ""}
              />
              <Input
                register={register("email")}
                label="E-post"
                error={errors.email}
                errorMessage={!!errors.email ? errors.email : ""}
              />
              <Input
                register={register("phoneNumber")}
                label="Telefonnummer"
                placeholder="+4673 00 00 000"
                error={errors.phoneNumber}
                errorMessage={!!errors.phoneNumber ? errors.phoneNumber : ""}
              />
              <Input
                register={register("address")}
                label="Adress"
                error={errors.address}
                className="lg:w-full md:w-full"
                errorMessage={!!errors.address ? errors.address : ""}
              />
              <Input
                register={register("zipcode")}
                label="Postnummer"
                error={errors.zipcode}
                errorMessage={!!errors.zipcode ? errors.zipcode : ""}
              />
              <Input
                register={register("city")}
                label="Ort"
                error={errors.city}
                errorMessage={!!errors.city ? errors.city : ""}
              />
              <TextArea
                register={register("message")}
                label="Meddelande"
                placeholder="Ditt meddelande..."
                error={!!errors.message}
                errorMessage={!!errors.message ? errors.message : ""}
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
                    Tack för att du har kontaktat oss. Vi kommer att svara inom
                    24 timmar.
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
