import _ from "lodash"

export const beautifyDate = (date_str: string) => {
  return new Date(date_str).toLocaleDateString("vi-VN")
}