const tagSchema = {
  title: 'Tag item',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['category', 'href', 'openLinkInNewTab'],
    },
  ],
  properties: {
    category: {
      title: 'Text',
      widget: 'textarea',
    },
    href: {
      title: 'Link',
      widget: 'url',
    },
    openLinkInNewTab: {
      title: 'Open link in new tab',
      type: 'boolean',
    },
  },
  required: [],
};

export default {
  title: 'Tag block',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'position', 'showTagIcon', 'items'],
    },
  ],

  properties: {
    title: {
      title: 'Title',
      widget: 'textarea',
    },
    position: {
      title: 'Alignment',
      widget: 'align',
    },
    showTagIcon: {
      title: 'Enable tag items icon',
      type: 'boolean',
    },
    items: {
      title: 'Tag items',
      widget: 'object_list',
      schema: tagSchema,
    },
  },

  required: [],
};
