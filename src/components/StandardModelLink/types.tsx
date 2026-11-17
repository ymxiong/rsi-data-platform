import { Point } from '@/utils/design/Point';


export type StandardModelLinkWrapperProps =  {
};

export type StandardModelLinkProps = {
  hasArrow: boolean;
  showName: boolean;
  color: string;
  points: Point[];
  name: string;
  onLinkClick: () => void;
};

