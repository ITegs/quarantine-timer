const queryParams = new URLSearchParams(window.location.search);

export const queryDate = new Date(queryParams.get("date"));
export const queryReciver = queryParams.get("reciver");
export const querySender = queryParams.get("sender");
