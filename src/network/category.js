import {request} from "./request";

export function getCategoryTitle() {
  return request({
    url: "/category"
  });
}

