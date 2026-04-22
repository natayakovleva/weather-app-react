export const getDailyForecast = (list) => {
  const today = new Date();

  return list
    .filter((item) => {
      const date = new Date(item.dt * 1000);

      const isNoon = date.getHours() === 12;

      const isTomorrowOrLater = date.toDateString() !== today.toDateString();

      return isNoon && isTomorrowOrLater;
    })
    .slice(0, 5);
};
