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

/**
 * Generic filter utility that works with any element type.
 * Returns a Set of unique elements that are in `includes` but not in `excludes`.
 *
 * @param params An object with parameters for filtering
 * @param params.include Optional iterable of elements to include
 * @param params.exclude Optional iterable of elements to exclude
 * @param params.defaultInclude A function that returns the default iterable when include is omitted
 * @returns A Set that contains elements from includes that are not in excludes
 */
export function filterElements<T>({
  include,
  exclude = [],
  defaultInclude,
}: {
  include?: Iterable<T>;
  exclude?: Iterable<T>;
  defaultInclude: () => Iterable<T>;
}): Set<T> {
  const includeSet = include
    ? new Set<T>(include)
    : new Set<T>(defaultInclude());
  const excludeSet = new Set<T>(exclude);

  return new Set<T>([...includeSet].filter((item) => !excludeSet.has(item)));
}

/**
 * Validation utility functions for common validation tasks
 */
export const Validators = {
  /**
   * Validates that a set of numeric indices are within bounds
   */
  indicesInBounds<T extends number | bigint>(
    indices: Set<T>,
    maxIndex: T,
    errorPrefix: string = "Element",
  ): void {
    if ([...indices].some((i) => i < 0 || i > maxIndex))
      throw new Error(
        `At least one ${errorPrefix} is out of bounds! Should be 0 <= i <= ${maxIndex}`,
      );
  },

  /**
   * Validates that all elements in a set are present in a superset
   */
  elementsInSuperset<T>(
    elements: Set<T>,
    superset: Set<T>,
    errorMessage: string = "Some elements are not in the valid set",
  ): void {
    const isSuperset = [...elements].every((elem) => superset.has(elem));
    if (!isSuperset) throw new Error(errorMessage);
  },

  /**
   * Validates that a set does not contain too many elements
   */
  setSize<T>(
    elements: Set<T>,
    maxSize: number,
    errorPrefix: string = "Elements",
  ): void {
    if (elements.size > maxSize)
      throw new Error(
        `Too many ${errorPrefix} given. Set size ${elements.size} > max size ${maxSize}!!`,
      );
  },
};

/**
 * Combines filtering and validation in one step
 */
export function filterAndValidate<T>({
  include,
  exclude = [],
  defaultInclude,
  validators = [],
}: {
  include?: Iterable<T>;
  exclude?: Iterable<T>;
  defaultInclude: () => Iterable<T>;
  validators?: ((elements: Set<T>) => void)[];
}): Set<T> {
  const filtered = filterElements({
    include,
    exclude,
    defaultInclude,
  });

  for (const validate of validators) {
    validate(filtered);
  }

  return filtered;
}
/**
 * Contains a `result` which is either true or false, as well as a reason
 * which is optional when `result` is true, but required when `result` is false.
 */

export type BooleanResult = {
  result: true;
  reason?: string;
} | {
  result: false;
  reason: string;
};
