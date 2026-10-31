import React, {
  type ComponentType,
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

const { BiCheckLg, BiClipboard, BiSearch, BiXLg } = icons;

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
  const dialogRef = useRef<HTMLDialogElement>(null);

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
    const dialog = dialogRef.current;
    if (!selected || !dialog) return;
    if (!dialog.open) dialog.showModal();
    // Close when clicking the ::backdrop (registered as a click on the dialog itself)
    const handleClick = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close();
    };
    dialog.addEventListener('click', handleClick);
    return () => dialog.removeEventListener('click', handleClick);
  }, [selected]);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  return (
    <div className='my-4'>
      <div className='d-flex flex-wrap align-items-end gap-3 p-3 border rounded bg-2'>
        <div className='flex-grow-1'>
          <label htmlFor='rbi-gallery-search' className='form-label'>
            Search
          </label>
          <div className='input-group'>
            <span className='input-group-text'>
              <BiSearch aria-hidden='true' />
            </span>
            <input
              id='rbi-gallery-search'
              type='search'
              className='form-control'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search icons…'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='rbi-gallery-size'
            className='form-label d-flex justify-content-between gap-2'
          >
            Size <output>{size}px</output>
          </label>
          <input
            id='rbi-gallery-size'
            type='range'
            className='form-range'
            style={{ width: 160 }}
            min={16}
            max={96}
            step={4}
            value={size}
            onChange={(event) => setSize(Number(event.target.value))}
          />
        </div>

        <div>
          <span className='form-label d-block'>Color</span>
          <div className='d-flex align-items-center gap-2'>
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
              className='form-control form-control-color'
              value={color === 'currentColor' ? '#1c7ed6' : color}
              aria-label='Custom color'
              title='Custom color'
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
        </div>

        <span className='ms-auto fg-3 text-sm text-nowrap'>
          {filteredIcons.length} / {ALL_ICONS.length} icons
        </span>
      </div>

      {filteredIcons.length === 0 ? (
        <p className='text-center fg-3 py-5'>No icons match “{deferredQuery}”.</p>
      ) : (
        <ul
          className='list-unstyled d-grid gap-2 mt-3 mb-0 p-0'
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(${Math.max(size + 48, 96)}px, 1fr))`,
          }}
        >
          {filteredIcons.map(({ name, Icon }) => (
            <li key={name} className='rbi-gallery__cell position-relative'>
              <button
                type='button'
                className='btn btn-subtle theme-secondary d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100 p-2'
                style={{ minHeight: size + 52 }}
                title={`Preview ${name}`}
                onClick={() => setSelectedName(name)}
              >
                <span className='d-flex' style={{ height: size, color }}>
                  <Icon size={size} aria-hidden='true' />
                </span>
                <span className='d-block w-100 text-truncate text-xs fg-3'>{name}</span>
              </button>
              <button
                type='button'
                className='rbi-gallery__quick-copy btn btn-icon btn-subtle theme-secondary btn-sm position-absolute top-0 end-0 m-1'
                title='Copy code'
                aria-label={`Copy code for ${name}`}
                onClick={() => handleCopy(name, buildSnippet(name))}
              >
                {copiedKey === name ? <BiCheckLg /> : <BiClipboard />}
              </button>
            </li>
          ))}
        </ul>
      )}

      {selected && (
        <dialog
          ref={dialogRef}
          className='dialog dialog-scrollable'
          aria-label={`${selected.name} preview`}
          onClose={() => setSelectedName(undefined)}
        >
          <div className='dialog-header'>
            <h3 className='dialog-title'>{selected.name}</h3>
            <button
              type='button'
              className='btn btn-icon btn-subtle theme-secondary ms-auto'
              aria-label='Close preview'
              onClick={closeDialog}
            >
              <BiXLg />
            </button>
          </div>
          <div className='dialog-body'>
            <div
              className='d-flex align-items-center justify-content-center rounded bg-2 p-4'
              style={{ color, minHeight: 160 }}
            >
              <selected.Icon size={Math.max(64, size * 2)} aria-hidden='true' />
            </div>
            <pre className='border rounded bg-2 font-monospace text-sm overflow-auto p-3 mt-3 mb-0'>
              <code>{snippet}</code>
            </pre>
          </div>
          <div className='dialog-footer'>
            <button
              type='button'
              className='btn btn-solid theme-primary'
              onClick={() => handleCopy('snippet', snippet)}
            >
              {copiedKey === 'snippet' ? (
                <>
                  <BiCheckLg /> Copied!
                </>
              ) : (
                <>
                  <BiClipboard /> Copy code
                </>
              )}
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}
