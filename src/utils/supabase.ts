import type { Database } from '@/types/Supabase'
import { createClient } from '@supabase/supabase-js'
import jwt from 'jsonwebtoken'

const getSupabase = (userId?: string) => {
  if (!userId) {
    return createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
    )
  } else {
    const payload = {
      userId,
      exp: Math.floor(Date.now() / 1000) + 60 * 60
    }
    const token = jwt.sign(payload, process.env.SUPABASE_JWT_SECRET ?? '')

    return createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
      {
        global: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      }
    )
  }
}

export { getSupabase }
