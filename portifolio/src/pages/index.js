import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { theme } from "../../tailwind.config"
import { ProjectCard } from "../components/project-card"

import grandshooter from "../images/grandshooter.png"
import musikinesia from "../images/musikinesia.jpeg"
import reator from "../images/reatorbacterias.png"
import produzindoav from "../images/produzindoav.jpeg"
import abreojogo from "../images/abreojogo.jpg"
import thai from "../images/thai.jpg"
import izabel from "../images/izabel.jpg"
import abuso from "../images/abuso.jpg"
import terraavista from "../images/terraavista.png"
import houndmouth from "../images/houndmouth.jpg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="flex flex-row space-x-40 mt-16">
      <div className="flex flex-col">
        <h1 className="mb-8">Sou o Lucas Fonseca, um apaixonado por <span style={{color: theme.colors.primary}}>arte</span> e <span style={{color: theme.colors.primary}}>tecnologia</span></h1>
        <p>Focado em misturar arte e código para criar experiências incríveis.
    Já produzi conteúdo audiovisual, jogos e softwares. Atualmente sou responsável pela experiência do usuário de softwares para o varejo.</p>
        <div>
          <button className="btn font-bold py-2 px-4 rounded text-xs flex flex-row font-sans"
            style={{backgroundColor: theme.colors.primary, color: "white"}}
          >
            Explore meu trabalho
          </button>
        </div>
      </div>
      <div>
        <StaticImage
          src="../images/profile.jpg"
          // src="https://raw.githubusercontent.com/lucasl2f/lucasl2f.github.io/source/gatsby-site/src/images/profile.jpg"
          className="rounded-4xl w-56 h-56"
        />
      </div>
    </div>
    <div className="mt-24 w-full">
      <h2 className="text-center">Trabalhos</h2>
      <div className="flex flex-row space-x-4">
        <ProjectCard
          src={grandshooter}
          name="Grand Shooter"
          description="Jogo de tiro em primeira pessoa para dispositivos móveis"
        />
        <ProjectCard
          src={musikinesia}
          name="Musikinésia"
          description="Jogo educativo para ensinar os conceitos básicos da teoria musical"
        />
        <ProjectCard
          src={reator}
          name="Reactor de bactérias"
          description="Modelagem e composição 3D de um sistema de filtragem usando reatores"
        />
        <ProjectCard
          src={produzindoav}
          name="Produzindo Audiovisual"
          description="Jogo educativo para ensinar professores de EAD a preparar o material das aulas"
        />
      </div>
    </div>
    <div className="mt-24 w-full">
      <h2 className="text-center">Curtas</h2>
      <div className="flex flex-row space-x-4">
        <ProjectCard
          src={abreojogo}
          name="Abre o jogo"
          description="Toni Ferreira, técnico da seleção brasileira, resolve procurar ajuda de um psicólogo para lidar com suas angústias e frustrações."
        />
        <ProjectCard
          src={thai}
          name="Thai"
          description="Thai tem 15 anos e está começando a entender quem é. Em uma festa com sua irmão, tem um encontro que vai mudar sua perspectiva de si e do mundo."
        />
        <ProjectCard
          src={izabel}
          name="Izabel"
          description="Documentário que faz um passeio pela Vila Izabel em São Carlos, a fim de conhecer seus antigos moradores e compreender como suas histórias de vida se relacionam com a história do bairro fundado por ex-escravos."
        />
        <ProjectCard
          src={abuso}
          name="Abuso"
          description="O curta incita a reflexão sobre as consequências do poder da mídia quanto à disseminação de informações."
        />
        <ProjectCard
          src={terraavista}
          name="Terra à Vista"
          description="Trailer para divulgação do jogo digital, que conta a história das famílias Rapposo e Ferroni na disputa pela herança deixada por um parente em comum."
        />
        <ProjectCard
          src={houndmouth}
          name="Houndmouth - Casino"
          description="Clipe produzido para um concurso da banda Houndmouth."
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
