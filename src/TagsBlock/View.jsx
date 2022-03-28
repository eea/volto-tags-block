import React from 'react';
import Tags from '@eeacms/volto-tags-block/Tags/Tags';

const View = ({ data, mode }) => {
  const { items = [], title, position } = data;

  if (!items.length && mode === 'edit') return <p>Add Tag items</p>;
  return (
    <Tags position={position}>
      <Tags.Title>{title}</Tags.Title>
      {items.map(
        (item) =>
          item.category && (
            <Tags.Tag
              className={item.class}
              color={item.color || 'teal'}
              href={item.href}
              openLinkInNewTab={item.openLinkInNewTab}
            >
              {item.category}
            </Tags.Tag>
          ),
      )}
    </Tags>
  );
};

export default View;
