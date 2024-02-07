import { z } from "zod";

export const studentSchema = z.object({
  id: z.string(),
  nama: z.string(),
  universitas: z.string(),
  jenjang: z.string(),
  jurusan: z.string(),
  kota: z.string(),
  jalurPenerimaan: z.string(),
  tahunMasuk: z.string(),
});

export type Task = z.infer<typeof studentSchema>;
