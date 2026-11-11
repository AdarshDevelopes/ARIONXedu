import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rdbqcqnwazvjakktnptv.supabase.co";

const supabasePublishableKey = "sb_publishable_8wfFb0nlSTzAhaoSQH1yXg_EoOhV-WR";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);
