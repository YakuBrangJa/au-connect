export function matchSubString (target: string, searchValue: string) {
  return target.toLowerCase().includes(searchValue.toLowerCase())
} 