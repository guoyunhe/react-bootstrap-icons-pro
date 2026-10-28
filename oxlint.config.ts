import { defineConfig } from 'oxlint';
import recommended from 'oxlint-config-recommended';
import recommendedReact from 'oxlint-config-recommended/react';
import recommendedJsxA11y from 'oxlint-config-recommended/jsx-a11y';

export default defineConfig({
  extends: [recommended, recommendedReact, recommendedJsxA11y],
});
