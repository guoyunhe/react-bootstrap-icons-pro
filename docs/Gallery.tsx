import React, {
  type ComponentType,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  IconButton,
  Input,
  InputGroup,
  InputGroupText,
  Range,
} from 'react-bootstrap-pro';

import * as icons from '../src/icons';
import type { IconProps } from '../src/types';
import { filterIcons } from './gallerySearch';
import iconSearchTerms from './icon-search-terms.json';

import './Gallery.css';

const { BiCheckLg, BiClipboard, BiSearch, BiXLg } = icons;

type IconComponent = ComponentType<IconProps>;

interface IconEntry {
  name: string;
  Icon: IconComponent;
  searchTerms: string[];
}

const ICON_SEARCH_TERMS: Record<string, string[]> = iconSearchTerms;

const ALL_ICONS: IconEntry[] = (Object.keys(icons) as Array<keyof typeof icons>)
  .toSorted((a, b) => a.localeCompare(b))
  .map((name) => ({
    name,
    Icon: icons[name] as IconComponent,
    searchTerms: ICON_SEARCH_TERMS[name] ?? [],
  }));

const PRESET_COLORS = ['currentColor', '#1c7ed6', '#0ca678', '#f08c00', '#e03131', '#ae3ec9'];

const DEFAULT_SIZE = 32;

const COPY_FEEDBACK_MS = 1500;

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

  const filteredIcons = useMemo(() => filterIcons(ALL_ICONS, deferredQuery), [deferredQuery]);

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

  return (
    <Box my={4}>
      <Box d='flex' flexWrap='wrap' alignItems='center' gap={5}>
        <Box flexGrow={1}>
          <InputGroup>
            <InputGroupText>
              <BiSearch aria-hidden='true' />
            </InputGroupText>
            <Input
              id='rbi-gallery-search'
              type='search'
              aria-label='Search icons'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search by name or keyword…'
            />
          </InputGroup>
        </Box>

        <Box d='flex' alignItems='center' gap={2}>
          <Range
            id='rbi-gallery-size'
            aria-label='Icon size'
            style={{ width: 160 }}
            min={16}
            max={96}
            step={4}
            value={size}
            onChange={(event) => setSize(Number(event.target.value))}
          />
          <output>{size}px</output>
        </Box>

        <Box d='flex' alignItems='center' gap={2}>
          {PRESET_COLORS.map((preset) => (
            <Button
              key={preset}
              variant='subtle'
              theme='secondary'
              className={
                preset === 'currentColor'
                  ? 'rbi-gallery__swatch rbi-gallery__swatch--inherit'
                  : 'rbi-gallery__swatch'
              }
              style={preset === 'currentColor' ? undefined : { backgroundColor: preset }}
              aria-label={preset === 'currentColor' ? 'Inherit text color' : `Use color ${preset}`}
              aria-pressed={color === preset}
              title={preset === 'currentColor' ? 'Inherit text color' : preset}
              onClick={() => setColor(preset)}
            />
          ))}
          <Input
            type='color'
            value={color === 'currentColor' ? '#1c7ed6' : color}
            aria-label='Custom color'
            title='Custom color'
            onChange={(event) => setColor(event.target.value)}
          />
        </Box>
      </Box>
      <Box mt={2} fg='3' fontSize='sm' textWrap='nowrap'>
        {filteredIcons.length} / {ALL_ICONS.length} icons
      </Box>

      {filteredIcons.length === 0 ? (
        <Box component='p' textAlign='center' fg='3' py={5}>
          No icons match “{deferredQuery}”.
        </Box>
      ) : (
        <Box
          component='ul'
          d='grid'
          gap={2}
          mt={3}
          mb={0}
          p={0}
          style={{
            gridTemplateColumns: `repeat(auto-fill, minmax(${Math.max(size + 48, 96)}px, 1fr))`,
            listStyle: 'none',
          }}
        >
          {filteredIcons.map(({ name, Icon }) => (
            <Box key={name} component='li' className='rbi-gallery__cell' position='relative'>
              <Button
                type='button'
                variant='subtle'
                theme='secondary'
                d='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                gap={2}
                w={100}
                h={100}
                p={2}
                style={{ minHeight: size + 52 }}
                title={`Preview ${name}`}
                onClick={() => setSelectedName(name)}
              >
                <Box component='span' d='flex' style={{ height: size, color }}>
                  <Icon size={size} aria-hidden='true' />
                </Box>
                <Box component='span' d='block' w={100} textTruncate fg='3' fontSize='xs'>
                  {name}
                </Box>
              </Button>
              <IconButton
                variant='subtle'
                theme='secondary'
                size='sm'
                className='rbi-gallery__quick-copy'
                position='absolute'
                top={0}
                end={0}
                m={1}
                title='Copy code'
                aria-label={`Copy code for ${name}`}
                onClick={() => handleCopy(name, buildSnippet(name))}
              >
                {copiedKey === name ? <BiCheckLg /> : <BiClipboard />}
              </IconButton>
            </Box>
          ))}
        </Box>
      )}

      <Dialog
        show={Boolean(selected)}
        onShowChange={(show) => {
          if (!show) setSelectedName(undefined);
        }}
        scrollable
        aria-label={selected ? `${selected.name} preview` : undefined}
      >
        {selected && (
          <>
            <DialogHeader>
              <DialogTitle component='h3'>{selected.name}</DialogTitle>
              <IconButton
                variant='subtle'
                theme='secondary'
                ms='auto'
                aria-label='Close preview'
                onClick={() => setSelectedName(undefined)}
              >
                <BiXLg />
              </IconButton>
            </DialogHeader>
            <DialogBody>
              <Box
                d='flex'
                alignItems='center'
                justifyContent='center'
                rounded
                bg='2'
                p={4}
                style={{ color, minHeight: 160 }}
              >
                <selected.Icon size={Math.max(64, size * 2)} aria-hidden='true' />
              </Box>
              <Box
                component='pre'
                border
                rounded
                bg='2'
                fontFamily='monospace'
                fontSize='sm'
                overflow='auto'
                p={3}
                mt={3}
                mb={0}
              >
                <code>{snippet}</code>
              </Box>
            </DialogBody>
            <DialogFooter>
              <Button
                variant='solid'
                theme='primary'
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
              </Button>
            </DialogFooter>
          </>
        )}
      </Dialog>
    </Box>
  );
}
