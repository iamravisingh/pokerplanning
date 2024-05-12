import { useSearchParams } from "react-router-dom";

type QueryParamsType = {
  roomKey?: string | null;
  userName?: string | null;
};
export const useQueryParams = (): QueryParamsType => {
    const params: QueryParamsType = {};
    const [searchParams,] = useSearchParams();
    params.roomKey = searchParams.get("roomKey");
    params.userName = searchParams.get("userName");
    return params;
};
