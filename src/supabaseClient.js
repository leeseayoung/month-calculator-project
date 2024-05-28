import { createClient } from "@supabase/supabase-js";

// 1) project url
const SUPABASE_PROJECT_URL = "https://ckqcayuxemnnscdptuew.supabase.co";

// 2) anon key
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrcWNheXV4ZW1ubnNjZHB0dWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4OTIyNjYsImV4cCI6MjAzMjQ2ODI2Nn0.1ao4sdf176gGjFXOeISqpYFhPDWl-f_eD0c5AhHiIVg";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);
export default supabase;
