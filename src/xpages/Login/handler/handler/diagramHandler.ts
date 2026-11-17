// import { selectRandomColor } from '@/utils/design/Color';
// import { Point } from '@/utils/design/Point';
// import { randomString } from '@/utils/random';
import { ElementState, LinkState, ViewState, VisualToolbarConfig } from '@horsecoder/visual-core';

export const setView = (visualDiagramRef: any, viewState: ViewState) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.setView(viewState);
  }
};

export const getView = (visualDiagramRef: any): ViewState | undefined => {
  if (visualDiagramRef.current) {
    return visualDiagramRef.current.getView();
  }
  return undefined;
};

export const getOffset = (visualDiagramRef: any): Point | undefined => {
  if (visualDiagramRef.current) {
    return visualDiagramRef.current.getOffset();
  }
  return undefined;
};

let initX = 100;

// const defaultElementState: ElementState = {
//   id: randomString(6),
//   name: `新建板块管理`,
//   type: 'model',
//   color: selectRandomColor(),
//   x: initX += 100,
//   y: 100,
//   select: false,
//   locked: false,
// };

// const defaultLinkState: LinkState = {
//   id: randomString(6),
//   name: `新建关系`,
//   type: 'relation',
//   // color?: string;
//   // group?: string;
//   points: [],
//   fromElementId: '',
//   toElementId: '',
//   // pendant?: Pendant;
// };

export const createElement = (
  visualDiagramRef: any,
  elementState: ElementState,
) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.createElement(elementState);
  }
};

export const deleteElement = (visualDiagramRef: any, elementId: string) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.deleteElement(elementId);
  }
};

export const filterElement = (visualDiagramRef: any, idList: string[]) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.filterElement(idList);
  }
};

export const moveCanvasCenterToElement = (visualDiagramRef: any, elementId: string) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.moveCanvasCenterToElement(elementId);
  }
}

export const createLink = (visualDiagramRef: any, linkState: LinkState) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.createLink(linkState);
  }
};

export const deleteLink = (visualDiagramRef: any, linkId: string) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.deleteLink(linkId);
  }
};

export const refreshCanvasLocked = (visualDiagramRef: any, locked: boolean) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.refreshCanvasLocked('', locked);
  }
};

export const refreshElementLocked = (visualDiagramRef: any, elementId: string, locked: boolean) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.refreshElementLocked(elementId, locked);
  }
};

export const selectToolbarItems = (visualDiagramRef: any, items: string[]) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.selectToolbarItems(items);
  }
};

export const refreshToolbarItems = (visualDiagramRef: any, items: VisualToolbarConfig) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.refreshToolbarItems(items);
  }
};

export const startLoading = (visualDiagramRef: any) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.startLoading();
  }
};

export const endLoading = (visualDiagramRef: any) => {
  if (visualDiagramRef.current) {
    visualDiagramRef.current.endLoading();
  }
};
