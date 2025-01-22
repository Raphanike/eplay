import styes, { styled } from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styes.header`
  background-color: ${cores.cinza};
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    }
  `

export const Links = styes.ul`
  display: flex;
  gap: 24px;
  margin-left: 40px;
  `

export const LinkItem = styes.li`
  marigin-right: 16px;

`
export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
