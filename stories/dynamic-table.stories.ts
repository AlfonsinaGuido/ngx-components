import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  DynamicTableComponent,
  ButtonComponent,
  PaginationComponent,
} from '@aseinfo/ngx-evolution-components/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const exampleColumns = [
  { header: 'ID', field: 'id', width: '50px' },
  { header: 'Nombre', field: 'name' },
  { header: 'Estado', field: 'status' },
];

/**
 * Datos de ejemplo
 */
const exampleData = [
  { id: 1, name: 'Juan', status: 'Activo' },
  { id: 2, name: 'María', status: 'Pendiente' },
  { id: 3, name: 'Mario', status: 'Inactivo' },
  { id: 4, name: 'Luisa', status: 'Activo' },
  { id: 5, name: 'Carlos', status: 'Pendiente' },
];

/**
 * Reglas de color para la columna 'status' (índice = 2).
 * Ejemplo de configuración de color,
 * pero se usará solo en historias que lo requieran.
 */
const colorRules = {
  2: [
    { matchValue: 'Activo', bgColor: '#D1FAE5', textColor: '#065F46' },
    { matchValue: 'Pendiente', bgColor: '#FEF9C3', textColor: '#92400E' },
    { matchValue: 'Inactivo', bgColor: '#FEE2E2', textColor: '#7F1D1D' },
  ],
};

/**
 * Paginación base
 */
const basePagination = {
  isManualPaginate: false,
  currentPage: 1,
  totalPages: 1,
  pageSize: 3,
  totalItems: 0,
  titles: {
    showing: 'Mostrando',
    results: 'resultados',
    page: 'Página',
    of: 'de',
  },
  page: 0,
};

export default {
  title: 'Evolution Components/Dynamic Table',
  component: DynamicTableComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, ButtonComponent, PaginationComponent],
    }),
  ],
  tags: ['autodocs'],
} as Meta<DynamicTableComponent>;

type Story = StoryObj<DynamicTableComponent>;

/**
 * Historia por defecto
 */
export const Default: Story = {
  args: {
    columns: exampleColumns,
    data: exampleData,
    paginationConfig: { ...basePagination },
    multiSelect: false,
    hiddenColumns: [],
    sortableColumns: [0, 1, 2],
    tagsColumns: [],
    colorRules: {},
    maxHeight: '250px',
    isMobile: false,
    emptyStateText: 'No hay datos para mostrar',
    twClass: '',
  },
};

/**
 * Historia con "colorRules" aplicados a la columna Status.
 */
export const WithColorTags: Story = {
  args: {
    columns: exampleColumns,
    data: exampleData,
    paginationConfig: { ...basePagination },
    multiSelect: false,
    hiddenColumns: [],
    sortableColumns: [1, 2],
    colorRules: colorRules,
    maxHeight: '300px',
    isMobile: false,
    emptyStateText: 'No hay datos para mostrar',
    twClass: '',
  },
};

/**
 * Historia nueva:
 * Columna 'Estado' en modo tag,
 * pero sin aplicar colorRules (sin fondo de color).
 */
export const TagNoColor: Story = {
  args: {
    columns: exampleColumns,
    data: exampleData,
    paginationConfig: { ...basePagination },
    multiSelect: false,
    hiddenColumns: [],
    sortableColumns: [1, 2],
    tagsColumns: [2],
    colorRules: {},
    maxHeight: '300px',
    isMobile: false,
    emptyStateText: 'No hay datos para mostrar',
    twClass: '',
  },
};

/**
 * Historia en modo móvil (cards).
 */
export const MobileView: Story = {
  args: {
    columns: exampleColumns,
    data: exampleData,
    paginationConfig: { ...basePagination },
    multiSelect: true,
    hiddenColumns: [],
    sortableColumns: [0, 1, 2],
    tagsColumns: [],
    colorRules: colorRules,
    maxHeight: '400px',
    isMobile: true,
    emptyStateText: 'No hay datos para mostrar',
    twClass: 'p-4',
  },
};

/**
 * Historia con paginación manual
 */
export const ManualPagination: Story = {
  args: {
    columns: exampleColumns,
    data: exampleData,
    paginationConfig: {
      ...basePagination,
      isManualPaginate: true,
      totalPages: 3,
      currentPage: 1,
      pageSize: 2,
    },
    multiSelect: false,
    hiddenColumns: [],
    sortableColumns: [0, 2],
    colorRules: colorRules,
    isMobile: false,
    emptyStateText: 'No hay datos para mostrar',
    twClass: '',
  },
};

/**
 * Historia sin datos
 */
export const Empty: Story = {
  args: {
    columns: exampleColumns,
    data: [],
    paginationConfig: { ...basePagination, pageSize: 2 },
    multiSelect: false,
    hiddenColumns: [],
    sortableColumns: [],
    tagsColumns: [],
    colorRules: {},
    maxHeight: '200px',
    isMobile: false,
    emptyStateText: 'No hay datos para mostrar',
    twClass: '',
  },
};
