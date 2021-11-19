export interface HomeRecipe{
  label: string,
  image: string
}

export interface HomeLink{
  href: string,
}

export interface HomeLinks{
  self: HomeLink
}

export interface HomeHit{
  recipe: Array<HomeRecipe>
  _links: HomeLinks
}
