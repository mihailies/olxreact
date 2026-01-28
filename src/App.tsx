// import { useState } from 'react'
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { PageSection } from "./layout/PageSection";
import { Search } from "./layout/Search";
{
  /* <style className="scss"></style>; */
}
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <PageSection>
        <Header />
      </PageSection>
      <PageSection bgColor="f5f5f5">
        <Search />
      </PageSection>

      <PageSection>Categorii principale</PageSection>
      <PageSection bgColor="f5f5f5">Anunturi promovate</PageSection>

      <PageSection style={{flexGrow:1}}>
        <ul style={{ flexGrow: 2 }}>
          <li>
            <s>add to git</s>
          </li>
          <li>add routes with React Router</li>
          <li>Categorii principale</li>
          <li>Anunturi promovate</li>
          <li>Footer</li>
        </ul>
      </PageSection>

      <PageSection bgColor="cbf7ee">
        <Footer />
      </PageSection>
    </>
  );
}

export default App;
