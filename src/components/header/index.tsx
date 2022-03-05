import { Badge, Menu } from "antd"
import Image from "next/image";

import logoHeader from 'assets/images/logo-header.svg';
import { DefaultButton } from "components/button";

import styles from './header.module.scss';
import { LogoutOutlined } from "@ant-design/icons";
import Router from "next/router";
import { menuItems } from "domain/types";
import { Dispatch, SetStateAction } from "react";

const { Item } = Menu

type Props = {
  currentTab: menuItems
  setCurrentTab: Dispatch<SetStateAction<menuItems>>
}

const Header = ({ currentTab, setCurrentTab }: Props) => {
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
            Favoritos <Badge count={1} style={{
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