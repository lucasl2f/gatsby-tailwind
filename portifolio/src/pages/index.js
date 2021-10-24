import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { theme } from "../../tailwind.config"
import { ProjectCard } from "../components/project-card"

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
          src="https://raw.githubusercontent.com/lucasl2f/lucasl2f.github.io/source/gatsby-site/src/images/profile.jpg"
          className="rounded-4xl w-56 h-56"
        />
      </div>
    </div>
    <div className="mt-24 w-full">
      <h2 className="text-center">Trabalhos</h2>
      <div className="flex flex-row space-x-4">
        <ProjectCard
          src="https://raw.githubusercontent.com/lucasl2f/lucasl2f.github.io/source/gatsby-site/src/images/profile.jpg"
          name="Grand Shooter"
          description="Jogo de tiro em primeira pessoa para dispositivos móveis"
        />
        <ProjectCard
          src="https://raw.githubusercontent.com/lucasl2f/lucasl2f.github.io/source/gatsby-site/src/images/profile.jpg"
          name="Grand Shooter"
          description="Jogo de tiro em primeira pessoa para dispositivos móveis"
        />
        <ProjectCard
          src="https://raw.githubusercontent.com/lucasl2f/lucasl2f.github.io/source/gatsby-site/src/images/profile.jpg"
          name="Grand Shooter"
          description="Jogo de tiro em primeira pessoa para dispositivos móveis"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
