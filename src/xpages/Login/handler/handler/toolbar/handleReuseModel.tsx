import { refreshModelPageVisualModelState } from '@/pages/Model/models/action';
import { VisualModel } from '@/standard/VisualModel/VisualModel';
import { handleModelCreate } from '../handleModelCreate';
import { Dispatch } from 'redux';
import {FieldStandard, ModelStandard} from "@/standard/CodeStandard/ModelStandard";

export const handleReuseModel = (
  dispatch: Dispatch,
  visualDiagramRef: any,
  visualModel: VisualModel | undefined,
  modelFields: FieldStandard[],
  values: any,
): void => {
  if (visualModel) {
    let modelStandard: ModelStandard = { ...values }
    modelStandard.fields = []
    let hasId = false;
    let hasGmtCreate = false;
    let hasGmtUpdate = false;
    modelFields.forEach((modelField) => {
      if (modelField.type.includes("string") || modelField.type.includes("String") && modelField.length === "0") {
        modelField.length = "32";
      }
      if (modelField.name === "id") {
        hasId = true;
      } else if (modelField.fieldTitle === "创建时间") {
        modelField.editable = false;
        modelField.name = "gmtCreate";
        modelField.length = "0";
        modelField.type = "Date";
        modelField.filterTypes = ["between"]
        modelField.notnull = true
        modelField.defaultValue = "current_timestamp()"
        hasGmtCreate = true;
      } else if (modelField.fieldTitle === "更新时间") {
        modelField.editable = false;
        modelField.name = "gmtUpdate";
        modelField.length = "0";
        modelField.type = "Date";
        modelField.filterTypes = ["between"]
        modelField.notnull = true
        modelField.defaultValue = "current_timestamp()"
        modelField.extra = "ON UPDATE current_timestamp()"
        hasGmtUpdate = true;
      }
      modelStandard.fields.push({...modelField})
    })
    if (!hasId) {
      modelStandard.fields.push({notes: modelStandard.modelTitle + "ID", name: "id", length: "32", type: "@standard/string", fieldTitle: modelStandard.modelTitle + "ID", notnull: true})
    }
    if (!hasGmtCreate) {
      let modelField: FieldStandard = {
        notes: "创建时间",
        fieldTitle: "创建时间",
        editable: false,
        name: "gmtCreate",
        length: "0",
        type: "Date",
        filterTypes: ["between"],
        notnull: true,
        defaultValue: "current_timestamp()",
      }
      modelStandard.fields.push({...modelField})
    }
    if (!hasGmtUpdate) {
      let modelField: FieldStandard = {
        notes: "更新时间",
        fieldTitle: "更新时间",
        editable: false,
        name: "gmtUpdate",
        length: "0",
        type: "Date",
        filterTypes: ["between"],
        notnull: true,
        defaultValue: "current_timestamp()",
        extra: "ON UPDATE current_timestamp()",
      }
      modelStandard.fields.push({...modelField})
    }
    const model = handleModelCreate(visualDiagramRef, visualModel, modelStandard);
    dispatch(refreshModelPageVisualModelState(model));
  }
};
