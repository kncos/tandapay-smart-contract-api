type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
interface JSONObject {
  [key: string]: JSONValue;
}
type JSONArray = Array<JSONValue>;

export function bigIntJsonReplacer(
  key: string,
  value: unknown,
): JSONValue | undefined {
  const toStr = (bigIntValue: bigint): string => `${bigIntValue.toString()}n`;

  if (Array.isArray(value)) {
    // Map each element, ensuring the output is a valid JSONValue
    return value.map(
      (item: unknown): JSONValue =>
        typeof item === "bigint" ? toStr(item) : (item as JSONValue),
    );
  } else if (typeof value === "bigint") {
    return toStr(value);
  }
  return value as JSONValue;
}
