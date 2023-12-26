import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

export default function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button.');

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} buttonName="Components" />
            <TabButton onSelect={() => handleSelect('jsx')} buttonName="JSX" />
            <TabButton onSelect={() => handleSelect('props')} buttonName="Props" />
            <TabButton onSelect={() => handleSelect('state')} buttonName="State" />
          </menu>
          <div id="tab-content">
            <p>Please select a topic.</p>
            <h3>{ EXAMPLES[selectedTopic].title }</h3>
            <p>{ EXAMPLES[selectedTopic].description }</p>
            <pre>
              <code>
                { EXAMPLES[selectedTopic].code }
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}