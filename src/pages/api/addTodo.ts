// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Tables } from '@/types/Tables'
import { getSupabase } from '../../utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'
import { PostgrestError } from '@supabase/supabase-js'

type ResponseData = Tables<'todo'> | PostgrestError

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { userID, todo } = req.body
  const supabase = getSupabase(userID)
  const { data, error } = await supabase.from('todo').insert({ title: todo }).select().single()
  if (error) {
    return res.status(400).json(error)
  }
  res.status(200).json(data)
}
