import React, {
  type ComponentType,
  type CSSProperties,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import * as icons from '../src/icons';
import type { IconProps } from '../src/types';

import './Gallery.css';

type IconComponent = ComponentType<IconProps>;

interface IconEntry {
  name: string;
  Icon: IconComponent;
}

const ALL_ICONS: IconEntry[] = (Object.keys(icons) as Array<keyof typeof icons>)
  .toSorted((a, b) => a.localeCompare(b))
  .map((name) => ({ name, Icon: icons[name] as IconComponent }));

const PRESET_COLORS = ['currentColor', '#1c7ed6', '#0ca678', '#f08c00', '#e03131', '#ae3ec9'];

const DEFAULT_SIZE = 32;

const COPY_FEEDBACK_MS = 1500;

function normalize(value: string) {
  return value.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
}

async function copyText(text: string) {
  const clipboard = globalThis.navigator?.clipboard;
  if (clipboard?.writeText) {
    try {
      await clipboard.writeText(text);
      return;
    } catch {
      // Fall back to the legacy copy command.
    }
  }

  const textarea = globalThis.document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  globalThis.document.body.append(textarea);
  textarea.select();
  globalThis.document.execCommand('copy');
  textarea.remove();
}

export default function Gallery() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [color, setColor] = useState('currentColor');
  const [selectedName, setSelectedName] = useState<string>();
  const [copiedKey, setCopiedKey] = useState<string>();
  const copiedTimer = useRef<ReturnType<typeof globalThis.setTimeout>>();

  const terms = useMemo(
    () =>
      deferredQuery
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean)
        .map((term) => normalize(term)),
    [deferredQuery],
  );

  const filteredIcons = useMemo(
    () =>
      terms.length === 0
        ? ALL_ICONS
        : ALL_ICONS.filter(({ name }) => {
            const normalized = normalize(name);
            return terms.every((term) => normalized.includes(term));
          }),
    [terms],
  );

  const selected = ALL_ICONS.find(({ name }) => name === selectedName);

  const buildSnippet = useCallback(
    (name: string) => {
      const colorProp = color === 'currentColor' ? '' : ` color="${color}"`;
      return `import { ${name} } from 'react-bootstrap-icons-pro';\n\n<${name} size={${size}}${colorProp} />`;
    },
    [color, size],
  );

  const snippet = selected ? buildSnippet(selected.name) : '';

  const handleCopy = useCallback((key: string, text: string) => {
    void copyText(text).then(() => {
      setCopiedKey(key);
      globalThis.clearTimeout(copiedTimer.current);
      copiedTimer.current = globalThis.setTimeout(() => setCopiedKey(undefined), COPY_FEEDBACK_MS);
    });
  }, []);

  useEffect(() => () => globalThis.clearTimeout(copiedTimer.current), []);

  useEffect(() => {
    if (!selectedName) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedName(undefined);
    };
    globalThis.addEventListener('keydown', handleKeyDown);
    return () => globalThis.removeEventListener('keydown', handleKeyDown);
  }, [selectedName]);

  return (
    <div className='rbi-gallery'>
      <div className='rbi-gallery__toolbar'>
        <label className='rbi-gallery__field rbi-gallery__search'>
          <span className='rbi-gallery__label'>Search</span>
          <input
            type='search'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Search icons…'
            aria-label='Search icons'
          />
        </label>

        <label className='rbi-gallery__field'>
          <span className='rbi-gallery__label'>
            Size <output>{size}px</output>
          </span>
          <input
            type='range'
            min={16}
            max={96}
            step={4}
            value={size}
            onChange={(event) => setSize(Number(event.target.value))}
            aria-label='Icon size'
          />
        </label>

        <div className='rbi-gallery__field'>
          <span className='rbi-gallery__label'>Color</span>
          <div className='rbi-gallery__colors'>
            {PRESET_COLORS.map((preset) => (
              <button
                key={preset}
                type='button'
                className={
                  preset === 'currentColor'
                    ? 'rbi-gallery__swatch rbi-gallery__swatch--inherit'
                    : 'rbi-gallery__swatch'
                }
                style={preset === 'currentColor' ? undefined : { backgroundColor: preset }}
                aria-label={
                  preset === 'currentColor' ? 'Inherit text color' : `Use color ${preset}`
                }
                aria-pressed={color === preset}
                title={preset === 'currentColor' ? 'Inherit text color' : preset}
                onClick={() => setColor(preset)}
              />
            ))}
            <input
              type='color'
              className='rbi-gallery__color-picker'
              value={color === 'currentColor' ? '#1c7ed6' : color}
              aria-label='Custom color'
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
        </div>

        <span className='rbi-gallery__count'>
          {filteredIcons.length} / {ALL_ICONS.length} icons
        </span>
      </div>

      {filteredIcons.length === 0 ? (
        <p className='rbi-gallery__empty'>No icons match “{deferredQuery}”.</p>
      ) : (
        <ul
          className='rbi-gallery__grid'
          style={{ '--rbi-gallery-size': `${size}px` } as CSSProperties}
        >
          {filteredIcons.map(({ name, Icon }) => (
            <li key={name} className='rbi-gallery__cell'>
              <button
                type='button'
                className='rbi-gallery__card'
                title={`Preview ${name}`}
                onClick={() => setSelectedName(name)}
              >
                <span className='rbi-gallery__icon' style={{ color }}>
                  <Icon size={size} aria-hidden='true' />
                </span>
                <span className='rbi-gallery__name'>{name}</span>
              </button>
              <button
                type='button'
                className='rbi-gallery__quick-copy'
                title='Copy code'
                aria-label={`Copy code for ${name}`}
                onClick={() => handleCopy(name, buildSnippet(name))}
              >
                {copiedKey === name ? '✓' : '⧉'}
              </button>
            </li>
          ))}
        </ul>
      )}

      {selected && (
        <div className='rbi-gallery__overlay'>
          <button
            type='button'
            className='rbi-gallery__backdrop'
            aria-label='Close preview'
            onClick={() => setSelectedName(undefined)}
          />
          <dialog open className='rbi-gallery__dialog' aria-label={`${selected.name} preview`}>
            <button
              type='button'
              className='rbi-gallery__close'
              aria-label='Close preview'
              onClick={() => setSelectedName(undefined)}
            >
              ×
            </button>
            <div className='rbi-gallery__preview' style={{ color }}>
              <selected.Icon size={Math.max(64, size * 2)} aria-hidden='true' />
            </div>
            <h3 className='rbi-gallery__title'>{selected.name}</h3>
            <pre className='rbi-gallery__code'>
              <code>{snippet}</code>
            </pre>
            <button
              type='button'
              className='rbi-gallery__copy-code'
              onClick={() => handleCopy('snippet', snippet)}
            >
              {copiedKey === 'snippet' ? 'Copied!' : 'Copy code'}
            </button>
          </dialog>
        </div>
      )}
    </div>
  );
}
