import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import { NAMESPACES, Namespace, Rule, NAMESPACE_CONFIG } from '../../../config';
import { RuleTable } from '@/components/RuleTable';
import Header from '@/components/Header';
import { getQuery, defaultTo } from '@/utils/utils';

import './index.less';

const App: React.FC = () => {
  const query = getQuery();
  const [namespace, setNamespace] = useState(defaultTo<Namespace>(query.rule, NAMESPACES[0], NAMESPACES));
  const [hideOff, toggleHideOff] = useState(query.hideOff === '1');
  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(true);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [namespace]);

  return (
    <div
      onClick={() => {
        if (menuCollapsed) return;
        setMenuCollapsed(true)
      }}
    >
      <Header
        namespace={namespace}
        hideOff={hideOff}
        setNamespace={setNamespace}
        toggleHideOff={toggleHideOff}
        onHeaderCollapse={(ev: any) => {
          setMenuCollapsed(val => !val);
          ev.stopPropagation();
        }}
      />
      <div className={['menu', menuCollapsed ? '' : 'mobile-menu-show'].join(" ")}>
        <div className="menu-container">
          <ul>
            {
              Object.values<Rule>(NAMESPACE_CONFIG[namespace].ruleConfig).map(({ name }) => {
                return (
                  <li key={name}>
                    <a href={`/#${name}`}>{name}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="content-wrapper">
        <RuleTable namespace={namespace} hideOff={hideOff}/>
      </div>
      <ReactTooltip
        className="site-react-tooltip"
        place="top"
        type="error"
        effect="solid"
        delayHide={100}
        html={true}
      />
    </div>
  );
};

export default App
