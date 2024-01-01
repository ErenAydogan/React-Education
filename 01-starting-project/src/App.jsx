import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

export default function App() {
  return (
    <> {/* It is used to avoid to use another div or fragment*/}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}