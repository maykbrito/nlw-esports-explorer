import './App.css';
import { Header } from './components/Header'
import { Main } from './components/Main'

const sections = [
  {
    title: "Meus jogos",
    legend: "Os games que eu mais curto jogar!",
    className: "games-list",
    listItems: [
      {
        link: "https://www.twitch.tv/directory/game/League-of-Legends",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
        alt: "Imagem do jogo League of Legends"
      },
      {
        link: "https://www.twitch.tv/directory/game/VALORANT",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
        alt: "Imagem do jogo Valorant"
      },
      {
        link: "https://www.twitch.tv/directory/game/Minecraft",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
        alt: "Imagem do jogo Minecraft"
      },
      {
        link: "https://www.twitch.tv/directory/game/Teamfight-Tactics",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
        alt: "Imagem do jogo TFT"
      }
    ]
  },
  {
    title: "Canais e streamers",
    legend: "Lista de canais e transmissões que não perco!",
    className: "channel-list",
    listItems: [
      {
        link: "https://www.twitch.tv/maykbrito",
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
        alt: "Imagem de Mayk Brito"
      },
      {
        link: "https://www.twitch.tv/alanzoka",
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-150x150.png",
        alt: "Imagem de Alanzoka"
      },
      {
        link: "https://www.twitch.tv/cellbit",
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-150x150.png",
        alt: "Imagemd de Cellbit",
      }
    ]
  },
  {
    title: "Minhas redes",
    legend: "Se conecte comigo agora mesmo!",
    className: "social-list",
    listItems: [
      {
        link: "https://www.twitch.tv/maykbrito",
        img: "./img/twitch.svg",
        alt: "Youtube"
      },
      {
        link: "https://www.twitter.com/maykbrito",
        img: "./img/twitter.svg",
        alt: "Youtube"
      },
      {
        link: "https://www.instagram.com/maykbrito",
        img: "./img/instagram.svg",
        alt: "Youtube"
      },
      {
        link: "https://www.youtube.com/maykbrito",
        img: "./img/youtube.svg",
        alt: "Youtube"
      }
    ]
  }
]

function App() {
  return(
    <div className="App">
      <Header className="Header"/>
      <Main className="Main"/>
    </div>
  );
}

export default App;
export { sections }
