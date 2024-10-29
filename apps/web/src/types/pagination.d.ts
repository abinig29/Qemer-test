interface PaginationRes<T> {
    currentPage: number,
    totalPages: number,
    count: number,
    values?: T[]
}



interface PaginationInputs {
    searchText?: string;
    limit?: number;
    page?: number;
    sort?: string;
    sortOrder?: 'asc' | 'desc';
}

