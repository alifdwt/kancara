import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, { message: "Judul harus lebih dari 3 karakter" }),
  description: z
    .string()
    .min(3, { message: "Deskripsi harus lebih dari 3 karakter" })
    .max(400, { message: "Deskripsi harus kurang dari 400 karakter" }),
  location: z
    .string()
    .min(3, { message: "Lokasi harus lebih dari 3 karakter" })
    .max(400, { message: "Lokasi harus kurang dari 400 karakter" }),
  imageUrl: z.string().url(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
