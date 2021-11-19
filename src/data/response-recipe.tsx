export interface Recipe{
  label: string,
  image: string
}

export interface Hit{
  recipe: Array<Recipe>
}