import {Menu} from "@/app/components/layout/Navigation/MenuContainer/Menu";
import {firstMenu, userMenu} from "@/app/components/layout/Navigation/MenuContainer/menu.item";
import {GenreMenu} from "@/app/components/layout/Navigation/MenuContainer/genres/GenreMenu";


export const MenuContainer = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </div>
  )
}