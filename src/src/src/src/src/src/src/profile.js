
import { supabase } from "./supabase.js";

// Save or update student profile
export async function saveUserProfile(user) {
  if (!user) {
    throw new Error("User is not logged in.");
  }

  const profile = {
    id: user.uid,
    full_name: user.displayName || "Student",
    email: user.email,
    avatar_url: user.photoURL || null
  };

  const { data, error } = await supabase
    .from("profiles")
    .upsert(profile, {
      onConflict: "id"
    })
    .select()
    .single();

  if (error) {
    console.error("Profile Save Error:", error);
    throw error;
  }

  return data;
}

// Get student profile
export async function getUserProfile(uid) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", uid)
    .maybeSingle();

  if (error) {
    console.error("Profile Fetch Error:", error);
    throw error;
  }

  return data;
}
  
