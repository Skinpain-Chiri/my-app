import { sql } from "@vercel/postgres";
import { Perfume } from "./type";

export async function getPerfumes(searchQuery: string = '') {
    const result = await sql<Perfume>`SELECT * FROM perfumes WHERE name ILIKE ${`%${searchQuery}%`} ORDER BY date DESC`;
    const perfumes = result.rows.map((perfume) => {
        return {
            ...perfume,
            prize: perfume.prize.toFixed(2)
        }
    });
    await Promise.all(perfumes);
    return perfumes;
}

export async function getPerfumeById(id: string) {
    const result = await sql<Perfume>`SELECT * from perfumes WHERE id = ${id}`;
    const perfume = result.rows.map((perfume) => {
        return {
            ...perfume,
            prize: perfume.prize.toFixed(2)
        }
    });
    return perfume[0];
}