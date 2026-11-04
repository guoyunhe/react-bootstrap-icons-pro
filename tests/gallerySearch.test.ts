import { describe, expect, it } from 'vitest';

import { filterIcons } from '../docs/gallerySearch';
import iconSearchTerms from '../docs/icon-search-terms.json';

const icons = Object.entries(iconSearchTerms).map(([name, searchTerms]) => ({
  name,
  searchTerms,
}));

describe('icon gallery search', () => {
  it('matches icon names and official keyword synonyms', () => {
    const results = filterIcons(icons, 'magnifying glass');

    expect(results.map(({ name }) => name)).toContain('BiSearch');
    expect(results.map(({ name }) => name)).toContain('BiSearchHeart');
  });

  it('keeps matching all query terms and ignores case and punctuation', () => {
    expect(filterIcons(icons, 'ARROW clock').map(({ name }) => name)).toContain('BiArrowClockwise');
    expect(filterIcons(icons, 'not-a-real-icon-keyword')).toHaveLength(0);
    expect(filterIcons(icons, '  ')).toHaveLength(icons.length);
  });
});
