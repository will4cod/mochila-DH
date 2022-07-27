// import Header from "../components/Header";

import { GetStaticProps } from "next";
import Image from 'next/image';
import { useEffect } from "react"
import Link from 'next/link';
import {api } from '../Services/api';
import { format, parseISO} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { convertDurationToTimeString } from "../Utils/convertDurationToTimeString";
import styles from './home.module.scss';
import { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

// spa - puxa informação depois que carrega a pagina, mecanismos de busca não encontra nada
// useEffect(() => {
//   fetch('http://localhost:3333/episodes')
//   .then(response => response.json())
//   .then(data => console.log(data));
// }, [])


// ssr - puxa informação antes do carregamento da pagina pelo servidor next
// mecanismos de busca encontram as informações 

// export async function getServerSideProps(){

//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json();

//   return{
//     props: {
//       episodes: data,
//     }
//   }
// }

// ssg - gera html estatico, gera uma pagina para todos consumirem
// export async function getStaticProps(){

//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json();

//   return{
//     props: {
//       episodes: data,
//     },
//     revalidate: 60 * 60 * 8,
//   }
// }

type Episode = {
  id: string,
  title: string,
  thumbnail: string,
  members: string,
  publishedAt: string,
  duration: number,
  durationAsString: string ,
  description: string,
  url: string,
}

type HomeProps = {
  episodes: Episode[];
  latestEpisodes: Episode[];
  allEpisodes: Episode[];
}

export default function Home({episodes, latestEpisodes, allEpisodes}: HomeProps) {

  const {play} = useContext(PlayerContext);

  return (
    <div className={styles.homepage}>
      <section className={styles.latestEpisodes}>
        <h2>Ultimos lançamentos</h2>

        <ul>
          {latestEpisodes.map(episode => {
            return(
              <li key={episode.id}>
                <Image width={192} height={192} src={episode.thumbnail} alt={episode.title} objectFit='cover'/>

                <div className={styles.episodeDetails}>
                  <Link href={`/episode/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                <button type='button' onClick={() => play(episode)}>
                  <img src="/play-green.svg" alt="Tocar episodio"/>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <section className={styles.allEpisodes}>
          <h2>Todos episodios</h2>

          <table cellSpacing={0}>
            <thead>
              <tr>
                <th></th>
                <th>Poadcast</th>
                <th>Integrantes</th>
                <th>Data</th>
                <th>Duração</th>
              </tr>
            </thead>  
              <tbody>
                {allEpisodes.map(episode =>{
                  return(
                    <tr key={episode.id}>
                      <td style={{width: 72}}><Image width={120} height={120} src={episode.thumbnail} alt={episode.title} objectFit='cover' /> </td>
                      <td>
                        <Link href={`/episode/${episode.id}`}>
                          <a>{episode.title}</a>
                        </Link>
                      </td>
                      <td>{episode.members}</td>
                      <td style={{width: 100}}>{episode.publishedAt}</td>
                      <td>{episode.durationAsString}</td>
                      <td>
                        <button type='button'>
                          <img src="/play-green.svg" alt="Tocar episodio"/>
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            
          </table>
      </section>
    </div>
    )
  }
  
  export  const getStaticProps: GetStaticProps = async () => {

    const { data } = await api.get('episodes', {
      params: {
        _limit: 12,
        _sort: 'published_at',
        _order: 'desc'
      }
    });

    const episodes = data.map(episode => {
      return{
        id: episode.id,
        title: episode.title,
        thumbnail: episode.thumbnail,
        members: episode.members,
        publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {locale: ptBR}),
        duration:  Number(episode.file.duration),
        durationAsString: convertDurationToTimeString( Number(episode.file.duration)),
        description: episode.description,
        url: episode.file.url,

      };
    })

    const latestEpisodes = episodes.slice(0,2);
    const allEpisodes = episodes.slice(2, episodes.length);

    return{
      props: {
        episodes: episodes,
        latestEpisodes,
        allEpisodes,
      },
      revalidate: 60 * 60 * 8,
    }
}
