import { removeRelationFromFamily } from '@/standard/VisualModel/FamilyVisual';
import { ModelVisual } from '@/standard/VisualModel/ModelVisual';
import { RelationVisual } from '@/standard/VisualModel/RelationVisual';
import { VisualModel } from '@/standard/VisualModel/VisualModel';
import { deleteLink } from './diagramHandler';

export const handleRelationDelete = (
  visualDiagramRef: any,
  relationId: string,
  coreVisualModel: VisualModel,
): VisualModel => {
  const visualModel = coreVisualModel;
  const relationVisual: RelationVisual = visualModel.relations[relationId];
  if (!relationVisual) return coreVisualModel;
  const modelVisual: ModelVisual = visualModel.models[relationVisual.relation.modelMainId];
  if (!modelVisual) return coreVisualModel;

  const deleteRelationIds: string[] = [];
  deleteRelationIds.push(relationId);
  visualModel.families[modelVisual.familyId] = removeRelationFromFamily(
    visualModel.families[modelVisual.familyId],
    deleteRelationIds,
  );

  delete visualModel.relations[relationId];
  deleteLink(visualDiagramRef, relationId);
  return visualModel;
};
