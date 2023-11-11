export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      recipe_ingredients: {
        Row: {
          amount: number | null
          id: string
          inserted_at: string
          title: string
          user_id: string
        }
        Insert: {
          amount?: number | null
          id?: string
          inserted_at?: string
          title: string
          user_id: string
        }
        Update: {
          amount?: number | null
          id?: string
          inserted_at?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ingredients_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      recipes: {
        Row: {
          content: string[] | null
          id: string
          ingredients: Json | null
          inserted_at: string
          persons: number
          preperationTime: number
          source: string | null
          title: string
          user_id: string
        }
        Insert: {
          content?: string[] | null
          id?: string
          ingredients?: Json | null
          inserted_at?: string
          persons?: number
          preperationTime?: number
          source?: string | null
          title: string
          user_id: string
        }
        Update: {
          content?: string[] | null
          id?: string
          ingredients?: Json | null
          inserted_at?: string
          persons?: number
          preperationTime?: number
          source?: string | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      todo: {
        Row: {
          created_at: string | null
          id: number
          is_complete: boolean | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_complete?: boolean | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_complete?: boolean | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      weekmenu: {
        Row: {
          archived: boolean | null
          id: string
          inserted_at: string
          user_id: string
        }
        Insert: {
          archived?: boolean | null
          id?: string
          inserted_at?: string
          user_id: string
        }
        Update: {
          archived?: boolean | null
          id?: string
          inserted_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "weekmenu_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      weekmenu_days: {
        Row: {
          id: string
          inserted_at: string
          user_id: string
          weekmenu: string
        }
        Insert: {
          id?: string
          inserted_at?: string
          user_id: string
          weekmenu: string
        }
        Update: {
          id?: string
          inserted_at?: string
          user_id?: string
          weekmenu?: string
        }
        Relationships: [
          {
            foreignKeyName: "weekmenu_days_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekmenu_days_weekmenu_fkey"
            columns: ["weekmenu"]
            isOneToOne: false
            referencedRelation: "weekmenu"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      transcripts: {
        Row: {
          title: string | null
        }
        Insert: {
          title?: string | null
        }
        Update: {
          title?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
