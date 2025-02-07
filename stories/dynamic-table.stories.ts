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
  {
    id: 1,
    name: 'Juan Pérez',
    status: 'Activo',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  },
  { id: 2, name: 'María López', status: 'Pendiente', avatarUrl: '' },
  {
    id: 3,
    name: 'Mario Gómez',
    status: 'Inactivo',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 4,
    name: 'Luisa Rodríguez',
    status: 'Activo',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
  },
  { id: 5, name: 'Carlos Sánchez', status: 'Pendiente', avatarUrl: '' },
];

/**
 * Reglas de color para la columna 'status' (índice = 2).
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
    config: {
      multiSelect: false,
      sortableColumns: [0, 2, 3],
      tagsColumns: [],
      colorRules: {},
      maxHeight: '250px',
      emptyStateText: 'No hay datos para mostrar',
    },
    hiddenColumns: [],
    isMobile: false,
    twClass: '',
  },
};

/**
 * Otra historia con colorRules aplicados.
 */
export const WithColorTags: Story = {
  args: {
    columns: exampleColumns,
    data: exampleData,
    paginationConfig: { ...basePagination },
    config: {
      multiSelect: false,
      sortableColumns: [1, 2],
      tagsColumns: [],
      colorRules: colorRules,
      maxHeight: '300px',
      emptyStateText: 'No hay datos para mostrar',
    },
    hiddenColumns: [],
    isMobile: false,
    twClass: '',
  },
};

/**
 * La paginación se muestra en modo "simple": no se muestra el rango de ítems y
 * el indicador es "Página n" en vez de "Página n de n".
 */
export const SimplePagination: Story = {
  args: {
    columns: exampleColumns,
    data: exampleData,
    paginationConfig: {
      ...basePagination,
      hideItemsRange: true,
      simplePageIndicator: true,
      nextPage: true,
    },
    config: {
      multiSelect: false,
      sortableColumns: [0, 2, 3],
      tagsColumns: [],
      colorRules: {},
      maxHeight: '250px',
      emptyStateText: 'No hay datos para mostrar',
    },
    hiddenColumns: [],
    isMobile: false,
    twClass: '',
  },
};

export const TagNoColor: Story = {
  args: {
    columns: exampleColumns,
    data: exampleData,
    paginationConfig: { ...basePagination },
    config: {
      multiSelect: false,
      sortableColumns: [1, 2],
      tagsColumns: [2], // Columna 'Estado' en modo tag
      colorRules: {}, // Sin reglas de color
      maxHeight: '300px',
      emptyStateText: 'No hay datos para mostrar',
    },
    hiddenColumns: [],
    isMobile: false,
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
    config: {
      multiSelect: true,
      sortableColumns: [0, 1, 2],
      tagsColumns: [],
      colorRules: colorRules,
      maxHeight: '400px',
      emptyStateText: 'No hay datos para mostrar',
    },
    hiddenColumns: [],
    isMobile: true,
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
    config: {
      multiSelect: false,
      sortableColumns: [0, 2],
      tagsColumns: [],
      colorRules: colorRules,
      maxHeight: 'auto',
      emptyStateText: 'No hay datos para mostrar',
    },
    hiddenColumns: [],
    isMobile: false,
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
    config: {
      multiSelect: false,
      sortableColumns: [],
      tagsColumns: [],
      colorRules: {},
      maxHeight: '200px',
      emptyStateText: 'No hay datos para mostrar',
    },
    hiddenColumns: [],
    isMobile: false,
    twClass: '',
  },
};

export const CheckboxesAndSelector: Story = {
  args: {
    columns: [
      { header: 'ID', field: 'id', width: '50px' },
      { header: 'Nombre', field: 'name' },
      { header: 'Estado', field: 'status' },
      {
        header: 'Acción',
        field: 'action',
        format: 'selector',
        selectorOptions: [
          { Id: 'opt1', Description: 'Opción 1', Bag: {} },
          { Id: 'opt2', Description: 'Opción 2', Bag: {} },
          { Id: 'opt3', Description: 'Opción 3', Bag: {} },
        ],
      },
    ],
    data: [
      { id: 1, name: 'Juan', status: 'Activo', action: '' },
      { id: 2, name: 'María', status: 'Pendiente', action: '' },
      { id: 3, name: 'Mario', status: 'Inactivo', action: '' },
      { id: 4, name: 'Luisa', status: 'Activo', action: '' },
      { id: 5, name: 'Carlos', status: 'Pendiente', action: '' },
    ],
    paginationConfig: { ...basePagination },
    config: {
      multiSelect: true,
      sortableColumns: [0, 1, 2],
      tagsColumns: [],
      colorRules: {},
      maxHeight: '250px',
      emptyStateText: 'No hay datos para mostrar',
    },
    hiddenColumns: [],
    isMobile: false,
    twClass: '',
  },
};

export const WithAvatar: Story = {
  args: {
    columns: [
      { header: 'ID', field: 'id', width: '50px' },
      {
        header: 'Avatar',
        field: 'name',
        format: 'avatar',
        imgField: 'avatarUrl',
        width: '50px',
      },
      { header: 'Nombre', field: 'name' },
      { header: 'Estado', field: 'status' },
    ],
    data: exampleData,
    paginationConfig: { ...basePagination },
    config: {
      multiSelect: false,
      sortableColumns: [0, 1, 2, 3],
      tagsColumns: [],
      colorRules: colorRules,
      maxHeight: '300px',
      emptyStateText: 'No hay datos para mostrar',
    },
    hiddenColumns: [],
    isMobile: false,
    twClass: '',
  },
};
