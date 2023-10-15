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
        link: "https://www.twitch.tv/directory/category/league-of-legends",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
        alt: "Imagem do jogo League of Legends",
        title: "League of Legends"
      },
      {
        link: "https://www.twitch.tv/directory/category/mobile-legends-bang-bang",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/494184-188x250.jpg",
        alt: "Imagem do jogo Mobile Legends",
        title: "Mobile Legends"
      },
      {
        link: "https://www.twitch.tv/directory/category/stardew-valley",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/490744-188x250.jpg",
        alt: "Imagem do jogo Stardew Valley",
        title: "Stardew Valley"
      },
      {
        link: "https://www.twitch.tv/directory/category/outer-wilds",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/489335-188x250.jpg",
        alt: "Imagem do jogo Outer Wilds",
        title: "Outler Wilds"
      },
      {
        link: "https://www.twitch.tv/directory/category/just-chatting",
        img: "https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg",
        alt: "Imagem de Just Chatting",
        title: "Just Chatting"
      }
    ]
  },
  {
    title: "Canais e streamers",
    legend: "Lista de canais e transmissões que não perco!",
    className: "channel-list",
    listItems: [
      {
        link: "https://www.twitch.tv/eskimozin",
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/aaa62dbc-7df8-409e-9549-c9f97d7745cc-profile_image-150x150.png",
        alt: "Imagem de Eskimozin",
        title: "Eskimozin"
      },
      {
        link: "https://www.twitch.tv/lazulilaska",
        img: "https://static-cdn.jtvnw.net/jtv_user_pictures/e37986de-30e0-40af-a878-54e4ec1df319-profile_image-150x150.png",
        alt: "Imagem de Lazulilaska",
        title: "Lazulilaska"
      },
      {
        link: "https://www.youtube.com/@cellinkee",
        img: "https://yt3.googleusercontent.com/OtLtWOv11udRAMOxG3v45vT0ePmJP_aEli_KzQIng96dzEJGoctW_p5NIwKOTXqO1O-7rJEKPQ=s176-c-k-c0x00ffffff-no-rj",
        alt: "Imagem de Cellinke",
        title: "Cellinke"
      },
      {
        link: "https://www.youtube.com/@gabrielcriador",
        img: "https://yt3.googleusercontent.com/a21n_R-4h9Lk8-NWrA_NkqK20QmwHQylDJan4L9SwG3ICsLMGt2CbB8s_CEgqouTDXD1IecS5Q=s176-c-k-c0x00ffffff-no-rj",
        alt: "Imagem de Gabriel, o Criador",
        title: "Gabriel, o Criador"
      },
      {
        link: "https://www.youtube.com/@LubaTV",
        img: "https://yt3.googleusercontent.com/qPeHdtHtfsDwx09wLVlnmWOirPkWiapmmb4066uAhLNQEC5lvFCUpu3DhYMvC7nxGuUSRkR21Q=s176-c-k-c0x00ffffff-no-rj",
        alt: "Imagem de LubaTV",
        title: "LubaTV"
      },
      {
        link: "https://www.youtube.com/@ande",
        img: "https://yt3.googleusercontent.com/CGk2Y-lGFk5vxhYDmBdjDNDVyPVRREoHYsIGwvpEc9FxmYd9lHlX2TUNpH4vdwPpb-T3hXcScQ=s176-c-k-c0x00ffffff-no-rj",
        alt: "Imagem de Ande",
        title: "Ande"
      }
    ]
  },
  {
    title: "Minhas redes",
    legend: "Se conecte comigo agora mesmo!",
    className: "social-list",
    listItems: [
      {
        link: "https://github.com/gabrieszin",
        img: "./img/github.svg",
        alt: "GitHub"
      },
      {
        link: "https://www.linkedin.com/in/gabrielribeirodev/",
        img: "./img/linkedin.svg",
        alt: "Linkedin"
      },
      {
        link: "https://www.behance.net/devgabrielribeiro",
        img: "./img/behance.svg",
        alt: "Behance"
      },
      {
        link: "https://cursos.alura.com.br/emprega-one/profile/devgabrielribeiro",
        img: "./img/oracle-one.svg",
        alt: "Oracle ONE"
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
