import { SHORT_DATETIME_FORMAT } from "@/constants/generic.constants";

export const formatShortDate = (date: Date) =>
  `${date.toLocaleDateString("en-US", SHORT_DATETIME_FORMAT)}`;
