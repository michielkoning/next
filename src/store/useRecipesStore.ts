import { Tables } from '@/types/Tables'
import { create } from 'zustand'

type RecipeState = {
  recipes: Tables<'todo'>[],
  setRecipes: (recipes: Tables<'todo'>[]) => void
  addRecipe: (recipe: Tables<'todo'>) => void

}

const useRecipesStore = create<RecipeState>((set) => ({
  recipes: [],
  setRecipes: (recipes) => set(() => ({ recipes })),
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // fetch: async (pond) => {
  //   const response = await fetch(pond)
  //   set({ fishies: await response.json() })
  // },
  addRecipe: async (recipe) => {
    set((state) => {
      return { recipes: [...state.recipes, recipe] }
    })
  }
}))



export default useRecipesStore