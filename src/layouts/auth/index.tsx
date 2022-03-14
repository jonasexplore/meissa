import { useState } from "react"
import { Form, Layout, Typography } from "antd"
import Image from "next/image"
import Router from "next/router"

import { DefaultButton } from "components/buttons"
import { DefaultInput } from "components/input"

import logo from 'assets/images/logo.svg'

import styles from './styles.module.scss'

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
      <Form className={styles.authForm} onFinish={handleAuth}>
        <Image src={logo} width={200} height={76} alt="pokemon" />
        <Typography.Title className={styles.authTitle}>
          Comece a coletar pokémons!
        </Typography.Title>
        <DefaultInput required type="email" placeholder="Email" />
        <DefaultInput required type="password" placeholder="Senha" />
        <DefaultButton
          htmlType="submit"
          loading={loading}
        >
          Entrar
        </DefaultButton>
      </Form>
    </Layout>
  )
}

export { AuthLayout }