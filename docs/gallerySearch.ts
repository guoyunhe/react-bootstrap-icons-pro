export interface SearchableIcon {
  name: string;
  searchTerms: string[];
}

const normalize = (value: string) => value.toLowerCase().replaceAll(/[^a-z0-9]/g, '');

export function filterIcons<T extends SearchableIcon>(icons: readonly T[], query: string): T[] {
  const terms = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((term) => normalize(term))
    .filter(Boolean);

  if (terms.length === 0) return [...icons];

  return icons.filter(({ name, searchTerms }) => {
    const searchableText = normalize([name, ...searchTerms].join(' '));
    return terms.every((term) => searchableText.includes(term));
  });
}
