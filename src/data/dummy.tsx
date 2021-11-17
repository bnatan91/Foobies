export interface Dummy {
  id: number,
  name: string,
  photoUrl: string
}

export const dummySlider: Array<Dummy> = [
  {
    id: 0,
    name: 'burgers',
    photoUrl: 'assets/burgers.webp'
  },
  {
    id: 1,
    name: 'burgers1',
    photoUrl: 'assets/burgers.png'
  },
  {
    id: 2,
    name: 'chicken',
    photoUrl: '/assets/chicken.png'
  },
  {
    id: 3,
    name: 'chicken2',
    photoUrl: '/assets/chicken2.jpeg'
  }
]