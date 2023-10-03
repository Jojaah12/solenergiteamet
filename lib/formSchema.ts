import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "Du måste ange förnamn" }),
  lastName: z.string().min(1, { message: "Du måste ange efternamn" }),
  email: z.string().min(1, { message: "Du måste ange email" }).email({
    message: "Något stämmer inte med email adressen",
  }),
  phoneNumber: z
    .string()
    .min(1, { message: "Du måste ange telefonnummer" })
    .regex(phoneRegex, "Något stämmer inte med telefonnumret"),
  address: z.string().min(1, { message: "Du måste ange adress" }),
  zipcode: z.string().min(1, { message: "Du måste ange postnummer" }),
  city: z.string().min(1, { message: "Du måste ange stad" }),
  message: z.string().min(1, { message: "Beskriv gärna ditt ärende" }),
});

export type TFormSchema = z.infer<typeof formSchema>;
