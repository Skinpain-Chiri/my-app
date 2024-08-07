import { sql } from "@vercel/postgres";
import { Perfume } from "./type";

export async function getPerfumes(searchQuery: string) {
    const result = await sql<Perfume>`SELECT * FROM perfumes WHERE name ILIKE ${`%${searchQuery}%`}`;
    const perfumes = result.rows.map((perfume) => {
        return {
            ...perfume,
            prize: perfume.prize.toFixed(2)
        }
    });
    await Promise.all(perfumes);
    return perfumes;
}