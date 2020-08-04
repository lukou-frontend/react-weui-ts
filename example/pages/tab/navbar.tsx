import * as React from 'react';

import {
  Tab,
  TabBody,
  NavBar,
  NavBarItem,
  Article
} from '../../../build/es';

const NavBarDemo = () => {
  const [tab, setTab] = React.useState(0)
  return (
    <Tab>
      <NavBar>
        <NavBarItem label='Nav1' active={tab === 0} onClick={() => setTab(0)}></NavBarItem>
        <NavBarItem label='Nav2' active={tab === 1} onClick={() => setTab(1)}></NavBarItem>
        <NavBarItem label='Nav3' active={tab === 2} onClick={() => setTab(2)}></NavBarItem>
      </NavBar>
      <TabBody>
        <Article style={{ display: tab === 0 ? null : 'none' }}>
          <h1>Page 1</h1>
          <section>
            <h2 className="title">Heading</h2>
            <section>
              <h3>1.1 Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
            </section>
          </section>
        </Article>
        <Article style={{ display: tab === 1 ? null : 'none' }}>
          <h1>Page 2</h1>
          <section>
            <h2 className="title">Heading</h2>
            <section>
              <h3>2.1 Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
            </section>
            <section>
              <h3>2.2 Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
        </Article>
        <Article style={{ display: tab === 2 ? null : 'none' }}>
          <h1>Page 3</h1>
          <section>
            <h2 className="title">Heading</h2>
            <section>
              <h3>3.1 Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
            </section>
            <section>
              <h3>3.2 Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
          </section>
        </Article>
      </TabBody>
    </Tab>
  );
};
export default NavBarDemo
