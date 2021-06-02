import React, { useEffect } from 'react';

import { LanguageSwtich } from '@/components/LanguageSwtich';
import { getLanguage, newUrl, replaceUrl, t } from '@/utils/utils';
import { NAMESPACES, Namespace } from '../../../../config';

import './index.less';

const Index: React.FC<{ namespace: any; hideOff: boolean; setNamespace: Function; toggleHideOff: Function, onHeaderCollapse: any }> = (props) => {
  const { namespace, hideOff, setNamespace, toggleHideOff, onHeaderCollapse } = props;

  const language = getLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, []);

  return (
    <div className="header">
      <div className="header-toggle" onClick={onHeaderCollapse}/>
      <div className="nav">
        <div className="site-title">eslint-config-magic</div>
        <LanguageSwtich language={language}/>
      </div>
      <form className="site-form">
        <select
          value={namespace}
          onChange={(e) => {
            setNamespace(e.target.value as Namespace);
            replaceUrl(newUrl({ query: { rule: e.target.value } }));
          }}
        >
          {NAMESPACES.map((namespace) => (
            <option key={namespace} value={namespace}>
              {namespace}
            </option>
          ))}
        </select>
        <label>
          <input
            type="checkbox"
            checked={hideOff}
            onChange={(e) => {
              toggleHideOff(e.target.checked);
              replaceUrl(newUrl({ query: { hideOff: e.target.checked } }));
            }}
          />
          {t('隐藏已禁用的规则')}
        </label>
      </form>
    </div>
  );
};

export default Index
