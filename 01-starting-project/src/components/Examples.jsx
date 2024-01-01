import { useState } from 'react';
import TabButton from '../components/TabButton';
import Section from './Section';
import { EXAMPLES } from '../data';

function Examples() {
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
    <Section id="examples" title="Examples">
    <menu>
      <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')} buttonName="Components" />
      <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')} buttonName="JSX" />
      <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')} buttonName="Props" />
      <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')} buttonName="State" />
    </menu>
    {tabContent}
  </Section>
  );
}

export default Examples;