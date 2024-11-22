import { provideHttpClient } from '@angular/common/http';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import {
  SmartListComponent,
  ISmartlistFullConfig,
  ISmartListItem,
  IPaginationConfig,
  ITableConfig,
} from '@aseinfo/ngx-evolution-components/public-api';
import { metaData } from './configs/sidebar-config';

const meta: Meta<SmartListComponent> = {
  title: 'Evolution Components/Smart List',
  component: SmartListComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SmartListComponent>;

const smartlistConfig: ISmartlistFullConfig = {
  Code: 'evowave.SolicitudAmonestaciones',
  ClientControlID: 'evowave.SolicitudAmonestaciones',
  Parameters: {},
  DatabaseDialect: 'Microsoft.Data.SqlClient',
  UrlMetadata: '/api/configuracion/SmartList/evowave.SolicitudAmonestaciones',
  FormTagId: 'evowave_SolicitudAmonestaciones_form',
  AlmacenaInformacionPersonalizacion: false,
  Height: 'Auto',
  Metadata: metaData,
  HasQueryBuilder: false,
  UrlData: '/api/configuracion/SmartList/evowave.SolicitudAmonestaciones/Data',
  FormatoEntero: '{0:n0}',
  Checksum: 'c3c0d2dfa2ca6048dd03942e9132c668d215ebb03e1eb0bee496f8eb857da3b7',
  Rows: 1,
};

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

const tableConfig: ITableConfig = {
  hiddenColumns: [2],
  sortableColumns: [1],
  actionIcons: [
    { type: 'class', icon: 'add' },
    { type: 'class', icon: 'edit' },
    { type: 'class', icon: 'delete' },
    { type: 'class', icon: 'verified_user' },
  ],
  emptyStateText: 'No hay datos para mostrar',
  twClass: '',
};

const data: ISmartListItem[] = [
  {
    amo_codigo: 6,
    amo_fecha_infraccion: '2024-09-18T06:00:00',
    cau_descripcion:
      'Falta sin causa justificada dos días completos y consecutivos',
    cia_descripcion: 'ASEINFO Guatemala.',
    exp_apellidos_nombres1: 'Abrego Labbe, Rene Armando',
    exp_apellidos_nombres2: 'Delgado de García, María del Rosario',
    g_record_number: '1',
    g_total_recs: 1,
    tam_descripcion: 'Oral',
  },
  {
    amo_codigo: 7,
    amo_fecha_infraccion: '2024-09-19T06:00:00',
    cau_descripcion:
      'Falta sin causa justificada dos días completos y consecutivos',
    cia_descripcion: 'ASEINFO Salvador.',
    exp_apellidos_nombres1: 'Abrego Labbe, Rene Armando',
    exp_apellidos_nombres2: 'Delgado de García, María del Rosario',
    g_record_number: '2',
    g_total_recs: 1,
    tam_descripcion: 'Oral',
  },
];

export const Default: Story = {
  args: {
    smartlistConfig,
    paginationConfig,
    tableConfig,
    data,
  },
};
