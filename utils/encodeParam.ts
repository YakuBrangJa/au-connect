export const encodeParams = (obj: any): string => {
  const jsonParams = JSON.stringify(obj);
  return encodeURIComponent(
    jsonParams.replace(/\(/g, "%28").replace(/\)/g, "%29")
  )
}

export function decodeCustomParams (encodedParams: string): any {
  // First, decode the URL encoding
  let decoded = decodeURIComponent(encodedParams);

  // Then, replace the percent-encoded parentheses with actual parentheses
  decoded = decoded.replace(/%28/g, "(").replace(/%29/g, ")");

  return JSON.parse(decoded);
}