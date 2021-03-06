import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";

require("dayjs/locale/fr");

dayjs.locale("fr");
dayjs.extend(utc);
dayjs.extend(relativeTime);

export { dayjs };
