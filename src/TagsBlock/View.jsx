import React from 'react';
import TagList from '@eeacms/volto-tags-block/Tags/Tags';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  addTagItems: {
    id: 'Add Tag Items',
    defaultMessage: 'Add Tag Items',
  }
})

const View = ({ data, mode }) => {
  const intl = useIntl()
  const { items = [], title, position, showTagIcon } = data;

  if (!items.length && mode === 'edit') return <p>{intl.formatMessage(messages.addTagItems)}</p>;

  return (
    <TagList position={position}>
      <TagList.Title>{title}</TagList.Title>
      <TagList.Content>
        {items.map(
          (item) =>
            item.category && (
              <TagList.Tag
                className={item.class}
                color={item.color || 'teal'}
                {...(mode !== 'edit' && item.href ? { href: item.href } : {})}
                openLinkInNewTab={!!item.openLinkInNewTab}
                showTagIcon={showTagIcon}
                key={item.category}
              >
                {item.category}
              </TagList.Tag>
            ),
        )}
      </TagList.Content>
    </TagList>
  );
};

export default View;
