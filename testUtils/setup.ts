import { afterEach } from 'vitest';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { describe, it, expect, vi } from 'vitest';

import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
  cleanup();
});
