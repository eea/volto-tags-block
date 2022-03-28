import worldSVG from '@plone/volto/icons/world.svg';
import TagsBlockEdit from './Edit';
import TagsBlockView from './View';

export default (config) => {
  config.blocks.blocksConfig.tags_block = {
    id: 'tags_block',
    title: 'Tags block',
    icon: worldSVG,
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
