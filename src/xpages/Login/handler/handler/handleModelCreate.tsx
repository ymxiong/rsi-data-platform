import { getInitComponentStandard, getInitModelStandard } from '@/standard/AppStandard/InitApp';
import { ModelStandard } from '@/standard/CodeStandard/ModelStandard';
import { addModelIntoFamily, FamilyVisual } from '@/standard/VisualModel/FamilyVisual';
import { ModelVisual, modelVisualTemplate } from '@/standard/VisualModel/ModelVisual';
import { VisualModel } from '@/standard/VisualModel/VisualModel';
import { ComponentStandard } from '@/standard/VisualStandard/ComponentStandard';
import { INIT_POINT } from '@/utils/design/Point';
import { INIT_SIZE } from '@/utils/design/Size';
import { randomString } from '@/utils/random';
import { keys, values } from 'lodash';
import { getOffset } from './diagramHandler';

export const handleModelCreate = (
  visualDiagramRef: any,
  coreVisualModel: VisualModel,
  standard?: ModelStandard,
): VisualModel => {
  const visualModel = { ...coreVisualModel };
  let familyVisual: FamilyVisual | undefined;
  values(coreVisualModel.families).forEach((family: FamilyVisual) => {
    if (!familyVisual) familyVisual = family;
  });
  if (!familyVisual) return visualModel;

  const plateNumber = keys(coreVisualModel.models).length + 1;
  const modelStandard: ModelStandard =
    standard !== undefined ? { ...standard } : getInitModelStandard(`板块${plateNumber}管理`);
  modelStandard.id = randomString(6);
  modelStandard.name = modelStandard.id;
  if (standard) {
    modelStandard.name = standard.id;
    modelStandard.module = 'sys';
    modelStandard.order = 'gmtCreate desc';
    modelStandard.pk = ['id'];
    modelStandard.fields = [];
    standard.fields.forEach(field => {
      modelStandard.fields.push({ ...field });
    });
  }
  console.log('modelStandard' + JSON.stringify(modelStandard))

  const componentStandard: ComponentStandard = { ...getInitComponentStandard() };
  componentStandard.id = modelStandard.id;
  componentStandard.modelId = modelStandard.id;

  const offset = getOffset(visualDiagramRef) || { x: 0, y: 0 };
  componentStandard.x = 500 + offset.x;
  componentStandard.y = 250 + offset.y;

  const modelVisual: ModelVisual = modelVisualTemplate(
    modelStandard,
    componentStandard,
    familyVisual.family.id,
    INIT_SIZE,
    INIT_POINT,
  );

  // 将model添加到family中
  const { family } = addModelIntoFamily(familyVisual, modelVisual);
  familyVisual = family;

  visualModel.models[modelVisual.id] = modelVisual;
  visualModel.families[familyVisual.id] = familyVisual;

  return visualModel;
};
