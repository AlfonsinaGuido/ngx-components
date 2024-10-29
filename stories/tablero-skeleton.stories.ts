import { TableroSkeletonComponent } from '@aseinfo/ngx-evolution-components/public-api';
import { Meta, StoryObj } from '@storybook/angular';

type Story = StoryObj<TableroSkeletonComponent>;
export default {
  component: TableroSkeletonComponent,
  title: 'Evolution Components/Kanban/Tablero Skeleton',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} as Meta<TableroSkeletonComponent>;

export const Default: Story = {
  args: {
    columns: 3,
  },
};

export const masColumnas: Story = {
  args: {
    columns: 5,
  },
};
