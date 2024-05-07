import React from 'react';
import cx from 'classnames';
import { Icon } from 'semantic-ui-react';
import { ConditionalLink } from '@plone/volto/components';
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
  return (
    <div className={`tag ${href ? 'link' : ''}`}>
      <ConditionalLink
        condition={href}
        to={href ? getFieldURL(href) : null}
        openLinkInNewTab={openLinkInNewTab}
      >
        {showTagIcon && <Icon className={`icon`} name="hashtag" />}
        <span className="name">{children}</span>
      </ConditionalLink>
    </div>
  );
};

export default TagList;
