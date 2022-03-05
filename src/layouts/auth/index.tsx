import { useState } from "react"
import { Form, Layout, Typography } from "antd"
import Image from "next/image"

import { DefaultButton } from "components/button"
import { DefaultInput } from "components/input"

import logo from 'assets/images/logo.svg'

import styles from './styles.module.scss'
import Router from "next/router"

const AuthLayout = () => {
  const [loading, setLoading] = useState(false)

  const router = Router.router;

  const handleAuth = () => {
    setLoading(true)

    setTimeout(() => {
      router?.push('/')
    }, 2000)
  }

  return (
    <Layout className={styles.authLayout}>
      <Form className={styles.authForm}>
        <Image src={logo} width={200} height={76} alt="pokemon" />
        <Typography.Title className={styles.authTitle}>
          Comece a coletar pokémons!
        </Typography.Title>
        <DefaultInput type="email" placeholder="Email" />
        <DefaultInput type="password" placeholder="Senha" />
        <DefaultButton
          loading={loading}
          onClick={handleAuth}
        >
          Entrar
        </DefaultButton>
      </Form>
    </Layout>
  )
}

export { AuthLayout }