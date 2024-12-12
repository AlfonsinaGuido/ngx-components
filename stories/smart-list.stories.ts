import { provideHttpClient } from '@angular/common/http';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import {
  SmartListComponent,
  ISmartlistFullConfig,
  IPaginationConfig,
  ITableConfig,
  ISmartlistMetadata,
} from '@aseinfo/ngx-evolution-components/public-api';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  baseMetaData,
  columnEncargado,
  columnEstado,
  data,
} from './configs/smart-list-config';

const meta: Meta<SmartListComponent> = {
  title: 'Evolution Components/Smart List',
  component: SmartListComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient(), provideAnimationsAsync()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SmartListComponent>;

const paginationConfig: IPaginationConfig = {
  isManualPaginate: false,
  currentPage: 1,
  totalPages: 2,
  pageSize: 5,
  totalItems: 10,
  page: 1,
  titles: {
    showing: 'Mostrando',
    results: 'resultados',
    page: 'Pag',
    of: 'de',
  },
};

const titlesConfig = {
  showing: 'Mostrando',
  results: 'resultados',
  page: 'Pag',
  of: 'de',
};

const tableConfig: ITableConfig = {
  hiddenColumns: [],
  sortableColumns: [1],
  actionIcons: [
    { type: 'class', icon: 'add' },
    { type: 'class', icon: 'edit' },
    { type: 'class', icon: 'delete' },
    { type: 'class', icon: 'verified_user' },
  ],
  showActions: false,
  noPagination: false,
  maxHeight: '120px',
  emptyStateText: 'No hay datos para mostrar',
  twClass: '',
};

/**
 * Historia Default: Con "encargado" y "estado"
 */
const metaDataDefault: ISmartlistMetadata = {
  ...baseMetaData,
  Columns: [...baseMetaData.Columns],
};

const smartlistConfigDefault: ISmartlistFullConfig = {
  Code: 'evowave.SolicitudAmonestaciones',
  ClientControlID: 'evowave.SolicitudAmonestaciones',
  Parameters: {},
  DatabaseDialect: 'Microsoft.Data.SqlClient',
  UrlMetadata: '/api/configuracion/SmartList/evowave.SolicitudAmonestaciones',
  FormTagId: 'evowave_SolicitudAmonestaciones_form',
  AlmacenaInformacionPersonalizacion: false,
  Height: 'Auto',
  Metadata: metaDataDefault,
  HasQueryBuilder: false,
  UrlData: '/api/configuracion/SmartList/evowave.SolicitudAmonestaciones/Data',
  FormatoEntero: '{0:n0}',
  Checksum: 'c3c0d2dfa2ca6048dd03942e9132c668d215ebb03e1eb0bee496f8eb857da3b7',
  Rows: 1,
};

export const Default: Story = {
  args: {
    smartlistConfig: smartlistConfigDefault,
    paginationConfig: { ...paginationConfig, titles: titlesConfig },
    tableConfig,
    data,
  },
  argTypes: {
    smartlistConfig: {
      description: 'Configuración completa del Smart List.',
    },
    paginationConfig: {
      description: 'Configuración completa de paginación.',
    },
  },
};

/**
 * Historia EncargadoSinEstado: Con "encargado" pero sin "estado"
 * y noPagination = true
 */
const metaDataEncargadoSinEstado: ISmartlistMetadata = {
  ...baseMetaData,
  Columns: [...baseMetaData.Columns, columnEncargado],
};

const tableConfigEncargadoSinEstado: ITableConfig = {
  ...tableConfig,
};

const smartlistConfigEncargadoSinEstado: ISmartlistFullConfig = {
  ...smartlistConfigDefault,
  Metadata: metaDataEncargadoSinEstado,
};

export const ConSelector: Story = {
  args: {
    smartlistConfig: smartlistConfigEncargadoSinEstado,
    paginationConfig: { ...paginationConfig, titles: titlesConfig },
    tableConfig: tableConfigEncargadoSinEstado,
    data,
  },
};

/**
 * Historia EstadoSinEncargado: Con "estado" pero sin "encargado"
 * noPagination = false (por defecto)
 */
const metaDataEstadoSinEncargado: ISmartlistMetadata = {
  ...baseMetaData,
  Columns: [...baseMetaData.Columns, columnEstado],
};

const tableConfigEstadoSinEncargado: ITableConfig = {
  ...tableConfig,
  noPagination: false,
};

const smartlistConfigEstadoSinEncargado: ISmartlistFullConfig = {
  ...smartlistConfigDefault,
  Metadata: metaDataEstadoSinEncargado,
};

export const ConBotonesDeEstado: Story = {
  args: {
    smartlistConfig: smartlistConfigEstadoSinEncargado,
    paginationConfig: { ...paginationConfig, titles: titlesConfig },
    tableConfig: tableConfigEstadoSinEncargado,
    data,
  },
};

const tableConfigConScroll: ITableConfig = {
  ...tableConfig,
  noPagination: true,
};

export const ConScroll: Story = {
  args: {
    smartlistConfig: smartlistConfigDefault,
    paginationConfig: { ...paginationConfig, titles: titlesConfig },
    tableConfig: tableConfigConScroll,
    data,
  },
};
