export interface IPaginationTitles {
  showing: string;
  results: string;
  page: string;
  of: string;
}

export interface IPaginationConfig {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  titles: IPaginationTitles;
  twClass?: string;
}

export interface IPaginationEvents {
  onPageChange: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}
