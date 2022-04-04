import React from 'react';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'semantic-ui-react';

function TagList({ children, position }) {
  return <div className={cx('eea tags', position)}>{children}</div>;
}

TagList.Title = ({ children }) => (
  <span className="tags-title">{children}</span>
);

TagList.Content = ({ children }) => (
  <div className="tags-content">{children}</div>
);

TagList.Tag = ({ children, href, openLinkInNewTab }) => {
  return (
    <UniversalLink
      className="tag"
      href={href}
      openLinkInNewTab={openLinkInNewTab}
    >
      <Icon className={`icon`} name="hashtag" />
      <span className="name">{children}</span>
    </UniversalLink>
  );
};

export default TagList;
