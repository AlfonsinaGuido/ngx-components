export interface IPaginationTitles {
  showing: string;
  results: string;
  page: string;
  of: string;
}

export interface IPaginationConfig {
  isManualPaginate: boolean;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  titles: IPaginationTitles;
  page?: number;
  twClass?: string;
  hideItemsRange?: boolean;
  simplePageIndicator?: boolean;
  nextPage?: boolean;
}

export interface IPaginationEvents {
  onPageChange: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}
