import { createClient } from "@supabase/supabase-js";
import { auth } from "./firebase.js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

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
