export function capitalizeFirstLetter(str: string | undefined) {
   if(str) return str.charAt(0).toUpperCase() + str.slice(1);
}

export function combineJSONDataForUserAddress(JsonData: any) {
  return `${capitalizeFirstLetter(JsonData.line1)}, ${capitalizeFirstLetter(
    JsonData.line2
  )}, ${capitalizeFirstLetter(JsonData.area)}, ${capitalizeFirstLetter(
    JsonData.city
  )}, ${capitalizeFirstLetter(JsonData.state)}, ${capitalizeFirstLetter(
    JsonData.country
  )} - ${JsonData.postalCode}`;
}

export const convertIntoBase64 = (file: FileList | null) => {
  return new Promise((resolve, reject) => {
    const fileReader: any = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error: any) => {
      reject(error);
    };
  });
};
