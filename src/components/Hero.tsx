"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      <div aria-hidden className={styles.bg} />
      <div aria-hidden className={styles.stars} />
      <div aria-hidden className={styles.nebulaLeft} />
      <div aria-hidden className={styles.nebulaRight} />
      <div aria-hidden className={styles.galaxyBand} />

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <span className={styles.badge}>
              <span className={styles.badgeDot} />
              Open to work
            </span>

            <p className={styles.greeting}>Olá, eu sou</p>
            <h1 className={styles.name}>Bianca</h1>
            <h2 className={styles.role}>Frontend Developer</h2>

            <p className={styles.description}>
              Desenvolvedora frontend focada em interfaces modernas e com
              experiência em React, design centrado no usuário.
            </p>

            <div className={styles.actions}>
              <a href="#projects" className="btn btnPrimaryHero">
                Ver Projetos
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#contact" className="btn btnOutlineHero">
                Entre em contato
              </a>
            </div>
          </div>

          <div className={styles.avatarCol}>
            <div aria-hidden className={styles.orbPurple} />
            <div aria-hidden className={styles.orbCyan} />
            <div aria-hidden className={styles.orbGreen} />

            <div className={styles.avatarWrap}>             

              <div className={styles.avatarRing}>
                <div className={styles.avatarGlow} />

                <svg
                  className={styles.ringSvg}
                  viewBox="0 0 500 500"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="ringGradient"
                      x1="80"
                      y1="70"
                      x2="430"
                      y2="430"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="rgba(255,120,190,0.95)" />
                      <stop offset="22%" stopColor="rgba(194,104,255,0.95)" />
                      <stop offset="48%" stopColor="rgba(118,132,255,0.92)" />
                      <stop offset="74%" stopColor="rgba(96,220,255,0.98)" />
                      <stop offset="100%" stopColor="rgba(112,255,220,0.9)" />
                    </linearGradient>

                    <filter
                      id="softGlow"
                      x="-30%"
                      y="-30%"
                      width="160%"
                      height="160%"
                    >
                      <feGaussianBlur stdDeviation="6" result="blur1" />
                    </filter>

                    <filter
                      id="outerGlow"
                      x="-40%"
                      y="-40%"
                      width="180%"
                      height="180%"
                    >
                      <feGaussianBlur stdDeviation="14" result="blur2" />
                    </filter>

                    <filter
                      id="specGlow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="10" result="blur3" />
                    </filter>
                  </defs>

                  {/* halo externo difuso */}
                  <circle
                    cx="250"
                    cy="250"
                    r="236"
                    fill="none"
                    stroke="rgba(119, 130, 255, 0.16)"
                    strokeWidth="1"
                    filter="url(#outerGlow)"
                  />

                  {/* anel fino brilhante */}
                  <circle
                    cx="250"
                    cy="250"
                    r="228"
                    fill="none"
                    stroke="url(#ringGradient)"
                    strokeWidth="2"
                    filter="url(#softGlow)"
                    opacity="0.95"
                  />

                  {/* anel principal limpo */}
                  <circle
                    cx="250"
                    cy="250"
                    r="228"
                    fill="none"
                    stroke="url(#ringGradient)"
                    strokeWidth="1.4"
                    opacity="0.95"
                  />

                  {/* highlight topo direito */}
                  <ellipse
                    cx="410"
                    cy="122"
                    rx="34"
                    ry="18"
                    fill="rgba(255,255,255,0.34)"
                    filter="url(#specGlow)"
                    opacity="0.65"
                    transform="rotate(-28 410 122)"
                  />

                  {/* brilho azul topo direito */}
                  <ellipse
                    cx="396"
                    cy="138"
                    rx="42"
                    ry="20"
                    fill="rgba(122,220,255,0.22)"
                    filter="url(#specGlow)"
                    opacity="0.7"
                    transform="rotate(-28 396 138)"
                  />

                  {/* brilho rosado topo esquerdo */}
                  <ellipse
                    cx="108"
                    cy="112"
                    rx="28"
                    ry="14"
                    fill="rgba(255,126,196,0.18)"
                    filter="url(#specGlow)"
                    opacity="0.7"
                    transform="rotate(-32 108 112)"
                  />

                  {/* brilho ciano inferior direito */}
                  <ellipse
                    cx="404"
                    cy="394"
                    rx="30"
                    ry="16"
                    fill="rgba(98,244,255,0.14)"
                    filter="url(#specGlow)"
                    opacity="0.55"
                    transform="rotate(24 404 394)"
                  />
                </svg>

                <div className={styles.avatarInner}>
                  <Image
                    src="/images/perfil.jpg"
                    alt="Foto da Bianca"
                    fill
                    className={styles.avatarImg}
                    priority
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 460px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
          Scroll para explorar
        </div>
      </div>
    </section>
  );
}
