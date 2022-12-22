const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "CRC",
    style: "currency"
  })
  
  export function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number)
    // return new Intl.NumberFormat().format(number);
  }
  