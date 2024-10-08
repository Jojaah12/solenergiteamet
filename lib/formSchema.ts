import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const zipRegex = new RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/);

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "Vänligen ange förnamn" }),
  lastName: z.string().min(1, { message: "Vänligen ange efternamn" }),
  email: z.string().min(1, { message: "Vänligen ange e-post" }).email({
    message: "Vänligen ange en giltig e-post adress",
  }),
  phoneNumber: z
    .string()
    .min(1, { message: "Vänligen ange telefonnummer" })
    .regex(phoneRegex, "Vänligen ange ett giltigt telefonnummer"),

  address: z.string().min(1, { message: "Vänligen ange adress" }),
  zipcode: z
    .string()
    .min(1, { message: "Vänligen ange postnummer" })
    .regex(zipRegex, "Vänligen ange ett giltigt postnummer"),
  city: z.string().min(1, { message: "Vänligen ange ort" }),
  message: z
    .string()
    .nonempty("Vänligen ange i vilket ärende du kontaktar oss"),
});

export type TFormSchema = z.infer<typeof formSchema>;
