function getEnumValue<T>(enumType: T, selectedKey: string): string | undefined {
  const VALUE_INDEX = 1
  const foundObjectEntry = Object.entries(enumType)?.find(([key]) => key === selectedKey)

  if (foundObjectEntry) {
    return foundObjectEntry[VALUE_INDEX]
  }

  return undefined;
}

export { getEnumValue }