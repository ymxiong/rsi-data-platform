const familyId = 'com.horsecoder.agent';
const favoritesId = `@${familyId}/userFavoritesQueryAgent`;
const userId = `@${familyId}/userAgent`;
const relationId = `@${familyId}/userFavoritesOwner`;

const favoritesFields = [
  { notes: '用户收藏查询Agent ID', name: 'id', length: '32', type: 'String', fieldTitle: '用户收藏查询Agent ID' },
  { notes: '用户ID', editable: true, notnull: true, name: 'userId', length: '32', type: 'String', fieldTitle: '用户ID', filterTypes: ['equal', 'in'] },
];
const userFields = [
  { notes: '用户查询Agent ID', name: 'id', length: '32', type: 'String', fieldTitle: '用户查询Agent ID' },
  { notes: '用户名', editable: true, notnull: true, name: 'name', length: '64', type: 'String', fieldTitle: '用户名', filterTypes: ['equal'] },
];

export const user_favorites_test = {
  id: 'horsecoder',
  elements: [
    {
      id: favoritesId,
      name: '用户收藏查询Agent',
      type: 'model',
      color: '#5cdbd3',
      x: 800,
      y: 75,
      select: false,
      locked: false,
      pendant: {
        data: {
          type: 'model',
          detail: {
            id: favoritesId,
            model: {
              module: 'sys', modelTitle: '用户收藏查询Agent', name: 'userFavoritesQueryAgent',
              id: favoritesId, pk: ['id'], fields: favoritesFields, order: 'id desc',
            },
            component: { id: favoritesId, modelId: favoritesId, isCollapse: false, x: 800, y: 75 },
            fields: favoritesFields.map((field) => ({ field })),
            familyId,
            thirdParty: false,
            size: { width: 125, height: 75 },
          },
        },
      },
    },
    {
      id: userId,
      name: '用户查询Agent',
      type: 'model',
      color: '#95de64',
      x: 800,
      y: 375,
      select: false,
      locked: false,
      pendant: {
        data: {
          type: 'model',
          detail: {
            id: userId,
            model: {
              module: 'sys', modelTitle: '用户查询Agent', name: 'userAgent',
              id: userId, pk: ['id'], fields: userFields, order: 'id desc',
            },
            component: { id: userId, modelId: userId, isCollapse: false, x: 800, y: 175 },
            fields: userFields.map((field) => ({ field })),
            familyId,
            thirdParty: false,
            size: { width: 125, height: 75 },
          },
        },
      },
    },
  ],
  links: [
    {
      id: relationId,
      name: '关联用户',
      color: '#ffa940',
      type: 'relation',
      points: [
        { x: 862.5, y: 150 },
        { x: 862.5, y: 175 },
      ],
      fromElementId: favoritesId,
      toElementId: userId,
      pendant: {
        data: {
          type: 'relation',
          detail: {
            id: relationId,
            relation: {
              relationType: 'ONE2ONE',
              modelMainKey: ['userId'],
              relationName: 'userFavoritesOwner',
              modelMainId: favoritesId,
              modelRelatedKey: ['id'],
              modelRelatedId: userId,
              relationTitle: '用户收藏查询关联用户',
              id: relationId,
            },
            link: { id: relationId, relationId, color: '#ffa940', points: [] },
            thirdParty: false,
          },
        },
      },
    },
  ],
};
