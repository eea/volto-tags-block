import iconSVG from '@plone/volto/icons/tag.svg';
import TagsBlockEdit from './Edit';
import TagsBlockView from './View';

export default (config) => {
  config.blocks.blocksConfig.tags_block = {
    id: 'tags_block',
    title: 'Tags',
    icon: iconSVG,
    group: 'common',
    view: TagsBlockView,
    edit: TagsBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };
  return config;
};
