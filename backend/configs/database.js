import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const connect = async () => {
  try {
    console.log("✅ Connected to Supabase successfully!");
  } catch (error) {
    console.error("❌ Error connecting to Supabase:", error.message);
  }
};
