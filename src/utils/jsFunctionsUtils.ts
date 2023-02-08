export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function combineJSONDataForUserAddress(JsonData: any) {
  return `${capitalizeFirstLetter(
    JsonData.address_line1
  )}, ${capitalizeFirstLetter(JsonData.address_line2)}, ${capitalizeFirstLetter(
    JsonData.area
  )}, ${capitalizeFirstLetter(JsonData.city)}, ${capitalizeFirstLetter(
    JsonData.state
  )}, ${capitalizeFirstLetter(JsonData.country)} - ${JsonData.postal_code}`;
}
