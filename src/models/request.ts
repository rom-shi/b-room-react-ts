export interface IRequestState {
  currentPage: number
  noLimit: boolean
  pageSize: number
  selectedGenres: string[]
  selectedMaxPrice: number
  selectedMinPrice: number
  selectedOrder: 'ASC' | 'DESC'
  selectedQuery: string
  selectedSort: 'price' | 'title' | 'author' | 'rating' | 'date'
};
