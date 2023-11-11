import { FunctionComponent } from 'react'
import * as Styled from './RecipesList.styled'
import { RecipesListTypes } from './types'

export const RecipesList: FunctionComponent<RecipesListTypes> = ({ recipes }) => {
  if (recipes.length === 0) {
    return <p>You have completed all todos!</p>
  }
  return (
    <Styled.List>
      {recipes.map((todo) => (
        <Styled.ListItem key={todo.id}>{todo.title}</Styled.ListItem>
      ))}
    </Styled.List>
  )
}
