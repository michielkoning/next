import { FunctionComponent } from 'react'
import * as Styled from './RecipesList.styled'
import { RecipesListTypes } from './types'
import Link from 'next/link'
import useRecipesStore from '@/store/useRecipesStore'

export const RecipesList: FunctionComponent = () => {
  const recipes = useRecipesStore((state) => state.recipes)

  if (recipes.length === 0) {
    return <p>You have completed all todos!</p>
  }
  return (
    <Styled.List>
      {recipes.map((todo) => (
        <Styled.ListItem key={todo.id}>
          <Link href={`/${todo.id}`}>{todo.title}</Link>
        </Styled.ListItem>
      ))}
    </Styled.List>
  )
}
