import ProductsList from '../../components/ProductList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starwars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import Game from '../../Models/Game'

const pronomes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4 ',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4 ',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4 ',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4 ',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4 ',
    title: 'Diablo 4',
    system: 'PS5',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 6,
    category: 'Ação',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4 ',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 7,
    category: 'Ação',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4 ',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 8,
    category: 'Ação',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4 ',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  }
]

const Categories = () => (
  <>
    <ProductsList games={pronomes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="AÇÃO" background="black" />
    <ProductsList games={pronomes} title="AVENTURA" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
