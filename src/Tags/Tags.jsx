import React from 'react';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';

function Tags({ children, position }) {
  return (
    <div className={cx('eea tags', position)}>
      <div>{children}</div>
    </div>
  );
}

Tags.Title = ({ children }) => <span className="title">{children}</span>;

Tags.Tag = ({ children, href, openLinkInNewTab, color }) => (
  <UniversalLink
    className={cx('tag', color)}
    href={href}
    openLinkInNewTab={openLinkInNewTab}
  >
    <span className="name">{children}</span>
  </UniversalLink>
);

export default Tags;
