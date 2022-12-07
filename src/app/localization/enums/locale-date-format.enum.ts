import { GenericEnum } from "./generic.enum";

export const LocaleDateFormat = {
  dateShort: "dateShort",
  datetimeShort: "datetimeShort",
  datetimeShortWithSeconds: "datetimeShortWithSeconds"
};

export type LocaleDateFormatEnum = GenericEnum<typeof LocaleDateFormat>;
