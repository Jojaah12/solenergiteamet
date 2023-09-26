import { z } from "zod";

export const ContactFormSchema = z.object({
  firstName: z.string().min(2).max(50).optional(),
  lastName: z.string().min(2).max(50).optional(),
  email: z.string().email().min(5).max(100).optional(),
  phoneNumber: z.string().min(10).max(20).optional(),
  address: z.string().min(5).max(100).optional(),
  zipcode: z.string().min(5).max(20).optional(),
  city: z.string().min(2).max(50).optional(),
  message: z.string().min(10).max(500).optional(),
});
