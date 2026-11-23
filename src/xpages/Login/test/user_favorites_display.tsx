const familyId = 'com.horsecoder.agent';
const userId = `@${familyId}/userAgent`;
const favoritesId = `@${familyId}/userFavoritesQueryAgent`;
const relationId = `@${familyId}/userFavoritesOwner`;

const userFields = [
  { notes: '用户ID', name: 'id', length: '32', type: 'String', fieldTitle: '用户ID' },
  { notes: '用户名', editable: true, notnull: true, name: 'name', length: '64', type: 'String', fieldTitle: '用户名', filterTypes: ['equal'] },
];
const favoritesFields = [
  { notes: '收藏ID', name: 'id', length: '32', type: 'String', fieldTitle: '收藏ID' },
  { notes: '用户ID', editable: true, notnull: true, name: 'userId', length: '32', type: 'String', fieldTitle: '用户ID', filterTypes: ['equal', 'in'] },
];

export const user_favorites_display = {
  id: 'horsecoder',
  elements: [
    {
      id: userId,
      name: '用户',
      type: 'model',
      color: '#95de64',
      x: 800,
      y: 75,
      select: false,
      locked: false,
      pendant: {
        data: {
          type: 'model',
          detail: {
            id: userId,
            model: {
              module: 'sys', modelTitle: '用户', name: 'userAgent',
              id: userId, pk: ['id'], fields: userFields, order: 'id desc',
            },
            component: { id: userId, modelId: userId, isCollapse: false, x: 800, y: 75 },
            fields: userFields.map((field) => ({ field })),
            familyId,
            thirdParty: false,
            size: { width: 125, height: 75 },
          },
        },
      },
    },
    {
      id: favoritesId,
      name: '用户收藏',
      type: 'model',
      color: '#5cdbd3',
      x: 800,
      y: 375,
      select: false,
      locked: false,
      pendant: {
        data: {
          type: 'model',
          detail: {
            id: favoritesId,
            model: {
              module: 'sys', modelTitle: '用户收藏', name: 'userFavoritesQueryAgent',
              id: favoritesId, pk: ['id'], fields: favoritesFields, order: 'id desc',
            },
            component: { id: favoritesId, modelId: favoritesId, isCollapse: false, x: 800, y: 375 },
            fields: favoritesFields.map((field) => ({ field })),
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
      name: '用户收藏',
      color: '#ffa940',
      type: 'relation',
      points: [
        { x: 862.5, y: 150 },
        { x: 862.5, y: 375 },
      ],
      fromElementId: userId,
      toElementId: favoritesId,
      pendant: {
        data: {
          type: 'relation',
          detail: {
            id: relationId,
            relation: {
              relationType: 'ONE2MANY',
              modelMainKey: ['id'],
              relationName: 'userFavoritesOwner',
              modelMainId: userId,
              modelRelatedKey: ['userId'],
              modelRelatedId: favoritesId,
              relationTitle: '用户关联收藏',
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
