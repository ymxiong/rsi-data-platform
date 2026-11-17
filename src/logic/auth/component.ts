const check_ = (): boolean => {
  return true || false;
};

export const checkAllPath = (path: string, record: Record<string, boolean>): boolean => {
  switch(path){
    case '/': return check_()
    default: return !!!record;
  }
  return false;
};