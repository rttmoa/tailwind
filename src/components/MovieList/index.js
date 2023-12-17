import Nav from './Nav'
import NavItem from './NavItem'
import List from './List'
import ListItem from './ListItem'
import { movies } from './MovieData'

export default function Movies() {
  return (
    <div className="w-1/2 bg-slate-400 divide-y divide-slate-10">
      <Nav>
        <NavItem href="/new" isActive>New Releases</NavItem>
        <NavItem href="/top" isActive>Top Rated</NavItem>
        <NavItem href="/picks" isActive>Vincents Picks</NavItem>
      </Nav>
      <List>
        {movies && movies.map(moive => {
          return <ListItem key={moive.id} movie={moive}></ListItem>
        })}
      </List>
    </div>
  )
}