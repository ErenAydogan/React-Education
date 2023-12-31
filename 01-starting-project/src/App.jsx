import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';

export default function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic!</p>;

  if (selectedTopic) {
    tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre> 
        {EXAMPLES[selectedTopic].code}
      </pre>
    </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')} buttonName="Components" />
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')} buttonName="JSX" />
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')} buttonName="Props" />
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')} buttonName="State" />
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}