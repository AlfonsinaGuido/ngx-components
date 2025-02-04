export interface IDynamicTableColumn {
  header: string;
  field: string;
  visible?: boolean;
  width?: string;
  align?: string;
}

export interface IColorRuleByColumn {
  [columnIndex: number]: IColorMatchRule[];
}

export interface IColorMatchRule {
  matchValue: string;
  bgColor: string;
  textColor: string;
}

export interface ITableRow {
  [key: string]: any;
  selected?: boolean;
}

export interface IDynamicTableConfig {
  multiSelect: boolean;
  sortableColumns: number[];
  tagsColumns: number[];
  colorRules: IColorRuleByColumn;
  maxHeight: string;
  emptyStateText: string;
}
