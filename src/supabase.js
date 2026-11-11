import { createClient } from "@supabase/supabase-js";
import { auth } from "./firebase.js";

const supabaseUrl = "https://rdbqcqnwazvjakktnptv.supabase.co";

const supabasePublishableKey = "sb_publishable_8wfFb0nlSTzAhaoSQH1yXg_EoOhV-WR";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,
  {
    accessToken: async () => {
      const user = auth.currentUser;

      if (!user) {
        return null;
      }

      return await user.getIdToken();
    }
  }
);
