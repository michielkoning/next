import type { Database } from "./Supabase";

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
