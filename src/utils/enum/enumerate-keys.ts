export const enumerateKeys = <O extends Record<string, unknown>, K extends keyof O = keyof O>(
  obj: O
): K[] => Object.keys(obj).filter((k) => Number.isNaN(Number(k))) as K[];
