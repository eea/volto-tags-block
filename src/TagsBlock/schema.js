const tagSchema = {
  title: 'Tag item',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['category', 'color', 'href', 'openLinkInNewTab'],
    },
  ],
  properties: {
    category: {
      title: 'Category',
      widget: 'textarea',
    },
    color: {
      title: 'Color',
      defaultValue: 'teal',
      choices: [
        ['teal', 'Teal'],
        ['blue-dark', 'Blue dark'],
        ['blue-light', 'Blue light'],
      ],
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
      fields: ['title', 'position', 'items'],
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
    items: {
      title: 'Tag items',
      widget: 'object_list',
      schema: tagSchema,
    },
  },

  required: [],
};
