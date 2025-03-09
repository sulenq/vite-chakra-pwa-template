import moment from "moment-timezone";

const userTimeZone = (): string => {
  const storedTimeZone = localStorage.getItem("timeZone");

  if (!storedTimeZone || storedTimeZone.startsWith("Auto")) {
    return moment.tz.guess();
  }

  return storedTimeZone;
};

export default userTimeZone;
