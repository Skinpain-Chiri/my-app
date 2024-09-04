"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type formState = {
    errors?: {
        name?: string[],
        prize?: string[],
        picture?: string[]
    };
}

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/bmp",
    "image/webp"
];

const Constraints = z.object({
    id: z.string(),
    name: z.
    string({ invalid_type_error: "Please type the name" })
    .min(1, { message: "Name must be at least 1 character" }),
    prize: z.coerce.number()
    .gt(0, { message: "Prize must be more than $0" }),
    picture: z.any()
    .refine((file) => { if (file.name === "" || file.size === 0) return false; else return true; })
    .refine((file) => file.size < MAX_FILE_SIZE, { message: "File must be lesser than 5MB" })
    .refine((file) => ACCEPTED_TYPES.includes(file.type), { message: "File must be an image format" })
});

const createPerfumeSchema = Constraints.omit({ id: true });


export async function addPerfume(prevState: formState, newPerfume: FormData) {
    const validatedData = createPerfumeSchema.safeParse({
        name: newPerfume.get('name'),
        prize: newPerfume.get('prize'),
        picture: newPerfume.get('picture')
    });
    
    if (!validatedData.success) {
        return { errors: validatedData.error.flatten().fieldErrors }
    }

    const { name, prize, picture } = validatedData.data;
    // Generate random ID
    const id = randomUUID();

     // Define the directory to save uploaded images
     const uploadDir = path.join(process.cwd(), "/public/");

     if (!fs.existsSync(uploadDir)) {
     fs.mkdirSync(uploadDir, { recursive: true });
     }

     // Get the file from FormData
     const file = picture as File;
     const fileExtension = path.extname(file.name);
     const fileName = `${id}${fileExtension}`;

     // Define the path where the file will be saved
     const filePath = path.join(uploadDir, fileName);

    try {
        // Save the file to the server
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(filePath, buffer);

        // Create a new perfume in the database'
        await sql`INSERT INTO perfumes(id, name, prize, picture) VALUES(${id}, ${name}, ${prize}, ${fileName})`;

        revalidatePath('/admin');
    } catch (error) {

        console.error(`There was an error: ${error}`);

        // Delete the file from the server 
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        return { errors: { name: ["Error adding perfume. Please try again"] } }
    } 

    redirect('/admin');
} 