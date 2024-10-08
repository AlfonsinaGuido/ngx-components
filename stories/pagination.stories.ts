import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { PaginationComponent } from '@aseinfo/ngx-evolution-components/public-api';

const meta: Meta<PaginationComponent> = {
  title: 'Evolution Components/Pagination',
  component: PaginationComponent,
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PaginationComponent>;

const defaultConfig = {
  currentPage: 1,
  totalPages: 5,
  pageSize: 10,
  totalItems: 50,
  titles: {
    showing: 'Mostrando',
    results: 'resultados',
    page: 'Página',
    of: 'de',
  },
  twClass: '',
};

export const InteractivePagination: Story = {
  render: (args) => {
    const handleNextPage = () => {
      if (args.config.currentPage < args.config.totalPages) {
        args.config.currentPage += 1;
      }
    };

    const handlePreviousPage = () => {
      if (args.config.currentPage > 1) {
        args.config.currentPage -= 1;
      }
    };

    const handlePageSelected = (event: { page: number }) => {
      args.config.currentPage = event.page;
    };

    return {
      props: {
        ...args,
        nextPageClicked: handleNextPage,
        previousPageClicked: handlePreviousPage,
        pageSelected: handlePageSelected,
      },
    };
  },
  args: {
    config: { ...defaultConfig },
  },
};
