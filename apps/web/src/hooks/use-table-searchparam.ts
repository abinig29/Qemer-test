import { paginationKeys } from '@/lib/utils';
import { removeKeys } from '@/lib/utils';
import qs from 'query-string';
import { useSearchParams } from 'react-router-dom';

const useCustomSearchParams = (searchTextName: string) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const current = qs.parse(searchParams ? searchParams.toString() : '');
    const filter = removeKeys(current, paginationKeys(searchTextName))
    const bothSort = current?.sort as string | undefined
    const splitSort = bothSort?.split(".")

    const query = qs.stringifyUrl({
        url: '',
        query: {
            ...(current?.page && { page: current?.page, }),
            ...(splitSort?.[0] && { sort: splitSort?.[0], }),
            ...(splitSort?.[1] && { sortOrder: splitSort?.[1], }),
            ...(current?.[searchTextName] && { searchText: current[searchTextName] }),
            ...(current?.per_page && { limit: current?.per_page, }),
            ...filter

        },
    }, { skipEmptyString: true, skipNull: true });

    return { current, query };
};

export default useCustomSearchParams;
