import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const formSchema = z.object({
  firstName: z.string().min(1, { message: "Vänligen ange förnamn" }),
  lastName: z.string().min(1, { message: "Vänligen ange efternamn" }),
  email: z.string().min(1, { message: "Vänligen ange email" }).email({
    message: "Vänligen ange en giltig email",
  }),
  phoneNumber: z
    .string()
    .min(1, { message: "Vänligen ange giltigt telefonnummer" })
    .regex(phoneRegex, "Vänligen ange ett giltigt telefonnummer"),

  address: z.string().min(1, { message: "Vänligen ange adress" }),
  zipcode: z.string().min(1, { message: "Vänligen ange postnummer" }),
  city: z.string().min(1, { message: "Vänligen ange ort" }),
  message: z.string(),
});

export type TFormSchema = z.infer<typeof formSchema>;
