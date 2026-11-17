import { refreshModelPageVisualModelState } from '@/pages/Model/models/action';
import {
  RelationStandard,
  relationStandardTemplate,
} from '@/standard/CodeStandard/RelationStandard';
import { ModelVisual } from '@/standard/VisualModel/ModelVisual';
import { RelationVisual, relationVisualTemplate } from '@/standard/VisualModel/RelationVisual';
import { VisualModel } from '@/standard/VisualModel/VisualModel';
import { LinkStandard, linkStandardTemplate } from '@/standard/VisualStandard/LinkStandard';
import { message } from 'antd';
import { Dispatch } from 'redux';

export const handleRelationCreate = (
  dispatch: Dispatch,
  modelMainId: string,
  modelRelatedId: string,
  color: string,
  coreVisualModel: VisualModel,
  modelFrom: any,
  modelTo: any,
): VisualModel => {
  const visualModel = { ...coreVisualModel };
  // 不支持自关联
  if (modelMainId === modelRelatedId) return visualModel;
  const modelMain: ModelVisual = visualModel.models[modelMainId];
  const modelRelated: ModelVisual = visualModel.models[modelRelatedId];

  if (modelFrom.fieldType !== modelTo.fieldType) {
    message.error('类型不同，不能连接');
    return visualModel;
  }

  const id: string = `@${modelMain.familyId}/${modelMain.model.name}$${modelRelated.model.name}$${modelFrom.fieldKey}2${modelTo.fieldKey}`;
  const fieldFrom = modelMain.fields.filter(value => value.field.name === modelFrom.fieldKey);
  const fieldTo = modelRelated.fields.filter(value => value.field.name === modelTo.fieldKey);
  if (fieldFrom.length === 0 || fieldTo.length === 0) {
    message.error('找不到字段名');
    return visualModel;
  }
  const fromModelTitle = modelMain.model.modelTitle
    .replaceAll('板块', '')
    .replaceAll('管理', '')
    .replaceAll('模块', '');
  const toModelTitle = modelRelated.model.modelTitle
    .replaceAll('板块', '')
    .replaceAll('管理', '')
    .replaceAll('模块', '');
  const fromFieldKey = fieldFrom[0].field.fieldTitle.replace(fromModelTitle, '');

  const relationStandard: RelationStandard = relationStandardTemplate(
    id,
    modelMain,
    modelRelated,
    modelFrom.fieldKey,
    modelTo.fieldKey,
    modelRelated.model.name,
    `${fromModelTitle}的${fromFieldKey}关联的${toModelTitle}`,
  );

  if (visualModel.relations[id]) {
    message.error('重复连接');
    return visualModel;
  }

  const linkStandard: LinkStandard = linkStandardTemplate(id, color);

  const relationVisual: RelationVisual = relationVisualTemplate(relationStandard, linkStandard);

  visualModel.relations[id] = relationVisual;
  visualModel.families[modelMain.familyId].family.relationIds.push(id);

  dispatch(refreshModelPageVisualModelState(visualModel));
  return visualModel;
};
