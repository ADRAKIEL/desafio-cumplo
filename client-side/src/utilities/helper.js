export const nerv = () => {
  console.info(`god is in heaven all's right with the world`);
};

export const debug = (message) => {
  // This print message if debug mode
  if (message === "nerv") {
    nerv();
    return;
  }
  process.env.REACT_APP_DEBUG === "true"
    ? console.info(message)
    : console.info("Production");
};

export const formatCurrency = (amount) => {
  const options = {
    style: "currency",
    currency: "MXN",
  };
  const currency = new Intl.NumberFormat("es-MX", options).format(amount);
  return `${currency} MXN`;
};

