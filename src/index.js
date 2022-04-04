import installTagsBlock from './TagsBlock';

const applyConfig = (config) => {
  return [installTagsBlock].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
