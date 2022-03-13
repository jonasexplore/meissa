import { Dispatch, SetStateAction } from "react";
import { Badge, Menu } from "antd"
import { LogoutOutlined } from "@ant-design/icons";
import Image from "next/image";
import Router from "next/router";

import logoHeader from 'assets/images/logo-header.svg';
import { DefaultButton } from "components/buttons";
import { menuItems } from "models/enums";

import styles from './header.module.scss';

const { Item } = Menu

type Props = {
  currentTab: menuItems
  setCurrentTab: Dispatch<SetStateAction<menuItems>>
  numberOfFavorites?: number
}

const Header = ({ currentTab, setCurrentTab, numberOfFavorites }: Props) => {
  const router = Router.router;

  const handleClosed = () => {
    router?.push('/auth/login')
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Image src={logoHeader} width={75} height={30} alt="pokemon" />
        <Menu
          selectedKeys={[currentTab]}
          mode="horizontal"
          className={styles.menu}
          onClick={({ key }) => setCurrentTab(key as menuItems)}
        >
          <Item key={menuItems.favorites}>
            Favoritos <Badge count={numberOfFavorites || 0} style={{
              backgroundColor: "#000",
              borderColor: "#000"
            }} />
          </Item>
          <Item key={menuItems.search}>Procurar</Item>
          <Item key={menuItems.all}>Ver todos</Item>
        </Menu>
        <DefaultButton
          className={styles.button}
          onClick={handleClosed}
        >
          Sair <LogoutOutlined />
        </DefaultButton>
      </div>
    </div >
  )
}


export { Header }