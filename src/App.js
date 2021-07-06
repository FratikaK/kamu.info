import './App.css';
import {Link, animateScroll as scroll} from "react-scroll";

function Nav() {
    return (
        <nav>
            <ul>
                <Link to={"about"} spy={true} smooth={true} duration={500}>
                    <li><a href={""}>About</a></li>
                </Link>
                <Link to={"dev"} spy={true} smooth={true} duration={500}>
                    <li><a href={""}>Language</a></li>
                </Link>
                <Link to={"games"} spy={true} smooth={true} duration={500}>
                    <li><a href={""}>Games</a></li>
                </Link>
                <Link to={"contact"} spy={true} smooth={true} duration={500}>
                    <li><a href={""}>Contact</a></li>
                </Link>
            </ul>
        </nav>
    );
}

function MainVisual() {
    return (
        <div id={"main-visual"}>
            <picture>
                <img src={"images/MyPicture.png"} alt={""}/>
            </picture>
        </div>
    )
}

function AboutSection() {
    return (
        <section id={"about"} className={"wrapper"}>
            <h2 className={"sec-title"}>About Me</h2>
            <h2 className={"sec-title"}><img src={"images/logo.jpg"} alt={""}/></h2>
            <div className={"AboutRight"}>
                <ul id={"aboutName"}>
                    <li>Kamu Nyan</li>
                    <li>Minecraft Server Plugin Developer</li>
                    <li>BackEnd Main Programmer</li>
                </ul>
                <p>FF14とMinecraftをメインにゲームしつつ、プログラムで遊び、
                    FF14ではAnimaのFCハウス、MinecraftはharucraftとAziNetworkに滞在しています。</p>
            </div>
        </section>
    )
}

function MyProgrammingLanguageSection() {
    return (
        <section id={"dev"} className={"wrapper"}>
            <h2 className={"sec-title"}>Program Language</h2>
            <ul>
                <li><img src={"images/java.svg"} alt={""}/></li>
                <li><img src={"images/kotlin.svg"} alt={""}/></li>
                <li><img src={"images/javascript.svg"} alt={""}/></li>
                <li><img src={"images/gopher.svg"} alt={""}/></li>
                <li><img src={"images/python.svg"} alt={""}/></li>
                <li><img src={"images/typescript.svg"} alt={""}/></li>
            </ul>
        </section>
    )
}

function MyGamesSection() {
    return (
        <section id={"games"} className={"wrapper"}>
            <h2 className={"sec-title"}>My Games</h2>
            <ul id={"gameSection"}>
                <li>
                    <h4>FINAL FANTASY XIV</h4>
                    <img src={"images/ffxiv.png"} alt={""}/>
                    <ul>
                        <li><b>DC</b> : Mana</li>
                        <li><b>World</b> : Anima</li>
                        <li><b>MainCharacter</b> : Kamu Wraith</li>
                        <li><b>FreeCompany</b> : harucraft</li>
                    </ul>
                </li>
                <li>
                    <h4>Minecraft</h4>
                    <img src={"images/minecraft.png"} alt={""}/>
                    <ul>
                        <li><b>MinecraftID</b> : kamunyan</li>
                        <li>Spigot Plugin Develop</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

function ContactSection() {
    return (
        <section id={"contact"} className={"wrapper"}>
            <h2 className={"sec-title"}>Contact</h2>
            <ul>
                <li><a href={"https://twitter.com/cumnya_"}><img src={"images/twitter.svg"} alt={""}/></a></li>
                <li><a href={"https://github.com/FratikaK"}><img src={"images/github.png"} alt={""}/></a></li>
            </ul>
        </section>
    );
}


function App() {
    return (
        <div id={"wrap"}>
            <header id={"header"}>
                <h1 className={"site-title"}><img src={"images/icon.jpg"} alt={""}/></h1>
                <Nav/>
            </header>
            <main>
                <MainVisual/>
                <AboutSection/>
                <MyProgrammingLanguageSection/>
                <MyGamesSection/>
                <ContactSection/>
            </main>
            <footer>
                <Link to={"header"} spy={true} smooth={true} duration={500}>
                    <p className="btn-circle-flat">↑</p>
                </Link>
            </footer>
        </div>
    );
}

export default App;
