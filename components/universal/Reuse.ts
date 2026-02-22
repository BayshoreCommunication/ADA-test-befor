export default function transformString(inputString:any) {
  const transformedString = inputString
    .replace(/\s+/g, "-") // Replace spaces with dashes globally
    .toLowerCase(); // Convert to lowercase
  return transformedString;
}
