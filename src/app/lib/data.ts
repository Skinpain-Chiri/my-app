import { sql } from "@vercel/postgres";
import { Perfume } from "./type";

export async function getPerfumes() {
    const result = await sql<Perfume>`SELECT * FROM perfumes`;
    const perfumes = result.rows.map((perfume) => {
        return {
            ...perfume,
            prize: perfume.prize.toFixed(2)
        }
    });
    await Promise.all(perfumes);
    return perfumes;
}