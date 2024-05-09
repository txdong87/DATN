export interface Menu {
  id?: number;
  url?: string;
  searhUrl?: string;
  name?: string;
  description?: string;
  childrens?: Menu[];
  orderPriority?: number;
  createdDate?: Date;
  level?: number;
  expand?: boolean;
  parent?: Menu;
  parentId?: number;
  roleId?: number;
}
export interface MenuWrapper {
  name?: string;
  searhUrl?: string;
  childrens?: Menu[];
  level?: number;
  expand?: boolean;
  icon?: string;
  roleId?: number;
}
