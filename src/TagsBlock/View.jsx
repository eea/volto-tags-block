import React from 'react';
import TagList from '@eeacms/volto-tags-block/Tags/Tags';

const View = ({ data, mode }) => {
  const { items = [], title, position } = data;

  if (!items.length && mode === 'edit') return <p>Add Tag items</p>;
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
                href={item.href || '#'}
                openLinkInNewTab={!!item.openLinkInNewTab}
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
