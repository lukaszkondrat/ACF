import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cwazcjwfiyxyerjahrxc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3YXpjandmaXl4eWVyamFocnhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NDA5MjgsImV4cCI6MjAyMjExNjkyOH0.MrBlgzw0_iE0M1paLePXmDiR5wm_t-fF8YqFZjyUIdM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
