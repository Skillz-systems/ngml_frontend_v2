export const  convertToDynamicContentArray=(inputString:string) =>{
  const parts = inputString.split(',');
  const trimmedParts = parts.map(part => part.trim());
  return JSON.stringify(trimmedParts);
}