'use client';

import { container, item, itemX } from '@animation/animation';
import stylesGlobal from '@scss/global.module.scss';
import ContatoIcons from '@src/components/Contact';
import Footer from '@src/components/Footer';
import Skills from '@src/components/Skills';
import useProfile from '@src/hooks/useProfile';
import { motion } from 'framer-motion';
import styles from './desktop.module.scss';

export default function LobbyDesktop() {
  const { profile } = useProfile();

  return (
    <>
      <motion.main variants={container} initial='hidden' animate='visible' className={stylesGlobal.container}>
        <section className={styles.home}>

          <section className={styles.title}>
            <motion.figure variants={item}>
              <img src={profile?.foto} alt='foto de perfil' />
            </motion.figure>

            <motion.section className={styles.description}>
              <h1>
                Soluções & <b>Criatividade</b>
                <small> Desenvolvedor Front-end</small>
              </h1>

              <motion.section variants={item} className={styles.about}>
                <p>Douglas Fernandes, 28 anos / São Paulo-SP</p>
                <ContatoIcons />
              </motion.section>
            </motion.section>
          </section>

        </section>

        <motion.section variants={itemX} className={styles.skills}>
          <p>Conhecimento nas principais tecnologias do mercado</p>
          <Skills />
        </motion.section>

      </motion.main>
    </>
  );
}
