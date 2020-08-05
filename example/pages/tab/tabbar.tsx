import * as React from 'react';

import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article,
} from '../../../build/es';

import IconButton from '../home/images/icon_nav_button.png';
import IconMsg from '../home/images/icon_nav_msg.png';
import IconArticle from '../home/images/icon_nav_article.png';
import IconCell from '../home/images/icon_nav_cell.png';

const TabBarDemo = () => {
    const [tab, setTab] = React.useState(0);
    return (
        <Tab>
            <TabBody>
                <Article style={{ display: tab === 0 ? null : 'none' }}>
                    <h1>Page 1</h1>
                    <section>
                        <h2 className="title">Heading</h2>
                        <section>
                            <h3>1.1 Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute
                            </p>
                        </section>
                    </section>
                </Article>
                <Article style={{ display: tab === 1 ? null : 'none' }}>
                    <h1>Page 2</h1>
                    <section>
                        <h2 className="title">Heading</h2>
                        <section>
                            <h3>2.1 Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute
                            </p>
                        </section>
                    </section>
                </Article>
                <Article style={{ display: tab === 2 ? null : 'none' }}>
                    <h1>Page 3</h1>
                    <section>
                        <h2 className="title">Heading</h2>
                        <section>
                            <h3>3.1 Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute
                            </p>
                        </section>
                    </section>
                </Article>
                <Article style={{ display: tab === 3 ? null : 'none' }}>
                    <h1>Page 4</h1>
                    <section>
                        <h2 className="title">Heading</h2>
                        <section>
                            <h3>4.1 Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute
                            </p>
                        </section>
                    </section>
                </Article>
            </TabBody>
            <TabBar>
                <TabBarItem
                    active={tab === 0}
                    onClick={() => setTab(0)}
                    icon={<img alt="" src={IconButton} />}
                    label="Tab1"
                />
                <TabBarItem active={tab === 1} onClick={() => setTab(1)}>
                    <TabBarIcon>
                        <img alt="" src={IconMsg} />
                    </TabBarIcon>
                    <TabBarLabel>Tab2</TabBarLabel>
                </TabBarItem>
                <TabBarItem
                    active={tab === 2}
                    onClick={() => setTab(2)}
                    icon={<img alt="" src={IconArticle} />}
                    label="Tab3"
                />
                <TabBarItem
                    active={tab === 3}
                    onClick={() => setTab(3)}
                    icon={<img alt="" src={IconCell} />}
                    label="Tab4"
                />
            </TabBar>
        </Tab>
    );
};
export default TabBarDemo;
