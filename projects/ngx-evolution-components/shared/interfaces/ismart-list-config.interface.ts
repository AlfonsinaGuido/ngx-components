import { IValueList } from 'dist/@aseinfo/ngx-evolution-components';
import { IIcon } from '../../public-api';

export interface ISmartlistFullConfig {
  Code: string;
  ClientControlID: string;
  Parameters: Record<string, any>;
  DatabaseDialect: string;
  UrlMetadata: string;
  FormTagId: string;
  AlmacenaInformacionPersonalizacion: boolean;
  Height: string;
  Metadata: ISmartlistMetadata;
  HasQueryBuilder: boolean;
  UrlData: string;
  FormatoEntero: string;
  Checksum: string;
  Rows: number;
}

export interface ISmartlistMetadata {
  Code: string;
  MultiSelect: boolean;
  AutogenerateColumns: boolean;
  NewRecordButtonCode?: string;
  EditRecordButtonCode?: string;
  DeleteRecordButtonCode?: string;
  NewRecordButton?: IActionConfig;
  EditRecordButton?: IActionConfig;
  DeleteRecordButton?: IActionConfig;
  Buttons: IActionConfig[];
  Columns: IColumnConfig[];
  AutomaticBinding?: boolean;
  Height: string;
  ShowFilter?: boolean;
  ShowGroupPanel?: boolean;
  ShowLargeDatasetWarning?: boolean;
  LocalizedStrings?: ILocalizedString[];
  ShowExportToExcelButton?: boolean;
  AlmacenaInformacionPersonalizacion?: boolean;
}

export interface IColumnConfig {
  Code: string;
  FieldName: string;
  PropertyName: string;
  Header: string;
  IsPrimaryKey?: boolean;
  FieldDescriptor?: string;
  Visible: boolean;
  AlternateText?: string;
  HorizontalAlign?: 'Left' | 'Center' | 'Right' | string;
  VerticalAlign?: 'Top' | 'Middle' | 'Bottom' | 'Automatic' | string;
  VisibleIndex?: number;
  Width?: string;
  Wrap?: boolean;
  Format?: string;
  MultiSelect?: boolean;
  SelectorOptions?: IValueList[];
}

export interface ISmartListItem {
  [key: string]: any;
  selected?: boolean;
}

export interface ISmartListTitles {
  showing: string;
  results: string;
  page: string;
  of: string;
}

export interface IActionConfig {
  Code: string;
  ActionURL?: string;
  Text: string;
  AlternateText?: string;
  ExecuteLinkAction?: boolean;
  ConfirmationMessage?: string;
  CompleteMessage?: string;
  ShowText?: boolean;
  ShowImage?: boolean;
  ImageURL?: string;
  VisibleIndex?: number;
  Visible: boolean;
  Visibility?: string;
  TextVisibility?: string;
  ImageVisibility?: string;
  IsExportToExcelButton?: boolean;
  CheckForSelectedRecords?: boolean;
  IsRouteUrl?: boolean;
  ControllerArea?: string;
  ControllerName?: string;
  ControllerAction?: string;
}

export interface ILocalizedString {
  Key: string;
  Translation: string;
}

export interface ITableConfig {
  showActions?: boolean;
  noPagination?: boolean;
  maxHeight: string;
  hiddenColumns: number[];
  sortableColumns: number[];
  actionIcons: IIcon[];
  emptyStateText: string;
  twClass: string;
}
