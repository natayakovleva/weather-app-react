export const getShortDateWithTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export const getShortDate = (date) => {
  return new Date(date * 1000).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
  });
};

export const getTime = (time) => {
  return new Date(time * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
