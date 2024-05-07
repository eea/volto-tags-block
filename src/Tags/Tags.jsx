import React from 'react';
import cx from 'classnames';
import { Icon } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { getFieldURL } from '@eeacms/volto-tags-block/helpers';

function TagList({ children, position }) {
  return <div className={cx('eea tags', position)}>{children}</div>;
}

TagList.Title = ({ children }) => (
  <span className="tags-title">{children}</span>
);

TagList.Content = ({ children }) => (
  <div className="tags-content">{children}</div>
);

TagList.Tag = ({ children, href, openLinkInNewTab, showTagIcon }) => {
  return href ? (
    <UniversalLink
      className="tag link"
      href={getFieldURL(href)}
      openLinkInNewTab={openLinkInNewTab}
    >
      {showTagIcon && <Icon className={`icon`} name="hashtag" />}
      <span className="name">{children}</span>
    </UniversalLink>
  ) : (
    <div className="tag">
      {showTagIcon && <Icon className={`icon`} name="hashtag" />}
      <span className="name">{children}</span>
    </div>
  );
};

export default TagList;
