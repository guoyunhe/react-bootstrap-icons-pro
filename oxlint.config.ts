import { defineConfig } from 'oxlint';
import recommended from 'oxlint-config-recommended';
import recommendedJsxA11y from 'oxlint-config-recommended/jsx-a11y';
import recommendedReact from 'oxlint-config-recommended/react';
import recommendedUnicorn from 'oxlint-config-recommended/unicorn';

export default defineConfig({
  extends: [recommended, recommendedUnicorn, recommendedReact, recommendedJsxA11y],
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
  },
});
