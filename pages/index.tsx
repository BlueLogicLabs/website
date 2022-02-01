import type { NextPage } from 'next'
import Head from 'next/head'
import { Card, Col, Container, Link, Row, Spacer, Text } from "@nextui-org/react";
import styles from "../styles/Home.module.css";
import React from 'react';
import { useIsMobile } from '../utils/mq';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BlueLogic</title>
        <meta name="description" content="Next-generation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container css={{ pt: "90px" }} xs>
          <div className={styles['flexbox-row']}>
            <Text
              h1
              size={40}
              css={{
                textGradient: '45deg, $blue500 0%, $pink500 150%'
              }}
              weight="bold"
            >
              BlueLogic
            </Text>
          </div>
          <Text>Modern digital infrastructure for machines and humans.</Text>
          <div style={{ height: "40px" }}></div>
          <Text h2 size={20} css={{ textAlign: "left", pb: "10px" }}>Products</Text>
          <div style={{ display: "flex", gap: "30px", flexDirection: "column" }}>
            <ProjectCard img="/images/blueboat-icon-v1.svg" title={
              <>
                <Link href="https://github.com/losfair/blueboat" css={{ color: "white" }}>Blueboat<Text span css={{ fontSize: "12px", paddingLeft: "10px" }}><FaExternalLinkAlt /></Text></Link>
              </>
            } desc={<>
              A batteries-included, multi-tenant runtime for serverless web applications.
            </>} />
            <ProjectCard img="/images/windi-icon-v1.svg" title={
              <>
                <Link href="https://windi.app" css={{ color: "white" }}>Windi<Text span css={{ fontSize: "12px", paddingLeft: "10px" }}><FaExternalLinkAlt /></Text></Link>
              </>
            } desc="A knowledge management app that helps you take short notes, make sense of them, and share with your communities." />
          </div>
        </Container>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} BlueLogic LLC</p>
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Link css={{ color: "$blue300" }} href="mailto:hello@windi.app">hello@windi.app</Link> <span style={{ paddingInlineStart: "10px", paddingInlineEnd: "12px" }}>|</span> <Link href="https://github.com/BlueLogicLabs" css={{ color: "white" }}><FaGithub /></Link></p>
      </footer>
    </div>
  )
}

export default Home

function ProjectCard(opts: { img: string, title: React.ReactNode, desc: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    isMobile ?
      (<Card css={{ backgroundColor: "$gray800", alignItems: "start", pt: "20px" }}>
        <img alt="project icon" src={opts.img} style={{ height: "50px" }} />
        <div style={{ height: "20px" }}></div>
        <Col css={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
          <Spacer />
          <Text weight="bold" size={20}>{opts.title}</Text>
          <Text>{opts.desc}</Text>
          <Spacer />
        </Col>
      </Card>) : (
        <Card css={{ backgroundColor: "$gray800", height: "120px", alignItems: "start", pl: "10px" }}>
          <Row css={{ height: "100%", gap: "20px", alignItems: "center" }}>
            <img alt="project icon" src={opts.img} style={{ width: "50px" }}></img>
            <Col css={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", pt: "10px" }}>
              <Spacer />
              <Text weight="bold" size={20}>{opts.title}</Text>
              <Text>{opts.desc}</Text>
              <Spacer />
            </Col>
          </Row>
        </Card>
      )
  )
}