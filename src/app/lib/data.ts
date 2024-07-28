import { sql } from "@vercel/postgres";
import { Perfume } from "./type";

export async function getPerfumes() {
    try {
        const result = await sql<Perfume>`SELECT * FROM perfumes`;
        
        return result.rows.map((perfume) => {
            return {
                ...perfume,
                prize: perfume.prize.toFixed(2)
            }
        })
    } catch (error: any) {
        console.log(error.message);
    }
}