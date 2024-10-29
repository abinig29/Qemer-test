import { type QueryClient } from "@tanstack/react-query";
import { type KY, MTD } from "@/lib/constant";


export const updateAfterDelete = <T>(
  key: KY,
  query: string,
  queryClient: QueryClient,
  id: string,
) => {
  queryClient.setQueryData([key, query], (prevData: PaginationRes<T>): PaginationRes<T> => {
    return {
      ...prevData,
      count: prevData?.count ? prevData?.count - 1 : 0,
      values: prevData?.values?.filter((cat: any) => cat._id !== id),
    };
  });
};

export const updateAfterBulkDelete = <T>(
  key: KY,
  query: string,
  queryClient: QueryClient,
  ids: string[],
) => {
  queryClient.setQueryData([key, query], (prevData: PaginationRes<T>): PaginationRes<T> => {
    return {
      ...prevData,
      count: prevData?.count ? prevData?.count - ids?.length : 0,
      values: prevData?.values?.filter((cat: any) => !ids?.includes(cat.id)),
    };
  });
};




export const updateLocalData = <T>(
  method: MTD,
  key: KY,
  query: any,
  queryClient: QueryClient,
  newData: any,
  id?: string,
  reset?: any,
) => {
  try {
    if (method == MTD.POST) {
      queryClient.setQueryData([key, query], (prevData: any) => {
        const { noBody, ...rest } = prevData
        console.log({ prevData, newData })
        const count = prevData?.count || 0;
        const data = prevData?.values || [];
        return {
          ...rest,
          count: count + 1,
          values: [newData ? newData : null, ...data],
        };
      });
      reset();
    } else {
      const currentData: PaginationRes<T> | undefined =
        queryClient.getQueryData([key, query]);
      const updatedData = currentData?.values?.map((cat: any) => {
        if (cat._id === id) {
          return { ...newData, createdAt: cat?.createdAt };
        }
        return cat;
      });

      queryClient.setQueryData([key, query], { ...currentData, values: updatedData });
    }
  } catch (e: any) {
    console.log("===>>>//", e);
  }
};
