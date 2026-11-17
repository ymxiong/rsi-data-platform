import {
  removeModelFromFamily,
  removeRelationFromFamily,
} from '@/standard/VisualModel/FamilyVisual';
import { ModelVisual } from '@/standard/VisualModel/ModelVisual';
import { RelationVisual } from '@/standard/VisualModel/RelationVisual';
import { VisualModel } from '@/standard/VisualModel/VisualModel';
import { values } from 'lodash';
import { deleteElement } from './diagramHandler';

export const handleModelDelete = (
  visualDiagramRef: any,
  modelId: string,
  coreVisualModel: VisualModel,
): VisualModel => {
  const visualModel = { ...coreVisualModel };
  const modelVisual: ModelVisual = visualModel.models[modelId];
  visualModel.families[modelVisual.familyId] = removeModelFromFamily(
    visualModel.families[modelVisual.familyId],
    modelId,
  );
  const leftRelations: { [id: string]: RelationVisual } = {};
  const deleteRelationIds: string[] = [];
  values(visualModel.relations).forEach(relation => {
    if (relation.relation.modelMainId !== modelId && relation.relation.modelRelatedId !== modelId) {
      leftRelations[relation.id] = relation;
    } else {
      deleteRelationIds.push(relation.id);
    }
  });
  visualModel.relations = leftRelations;

  visualModel.families[modelVisual.familyId] = removeRelationFromFamily(
    visualModel.families[modelVisual.familyId],
    deleteRelationIds,
  );

  delete visualModel.models[modelId];
  deleteElement(visualDiagramRef, modelId);
  return visualModel;
};
