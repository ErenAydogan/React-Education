import reactImg from './assets/react-core-concepts.png';
const reactDescription = ['Fundamental', 'Crucial', 'Core'];
import { CORE_CONCEPTS } from './data.js';

function genRandomInt(max){
  return Math.floor(Math.random() * max);
}

function Header() {
  const description = reactDescription[genRandomInt(3)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom"/>
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="{props.title}" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}