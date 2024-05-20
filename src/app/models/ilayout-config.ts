export interface IlayoutConfig {
  columns: Array<{
    visible: boolean;
    size: number;
    name: string;
    columns: Array<{
      visible: boolean;
      size: number;
      name: string;
    }>;
  }>;
  disabled: boolean;
}
