/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import 'jasmine'; (google3-only)

import {ARIAProperty, ariaPropertyToAttribute, isAriaAttribute} from './aria.js';

describe('aria', () => {
  describe('isAriaAttribute()', () => {
    it('should return true for aria value attributes', () => {
      expect(isAriaAttribute('aria-label'))
        .withContext('aria-label input')
        .toBeTrue();
    });

    it('should return false for aria idref attributes', () => {
      expect(isAriaAttribute('aria-labelledby'))
        .withContext('aria-labelledby input')
        .toBeFalse();
    });

    it('should return true for role', () => {
      expect(isAriaAttribute('role')).withContext('role input').toBeTrue();
    });

    it('should return false for non-aria attributes', () => {
      expect(isAriaAttribute('label')).withContext('label input').toBeFalse();
    });

    it('should return false for custom aria-* attributes', () => {
      expect(isAriaAttribute('aria-label-custom'))
        .withContext('aria-label-custom input')
        .toBeFalse();
    });
  });

  describe('ariaPropertyToAttribute()', () => {
    it('should convert aria value properties', () => {
      expect(ariaPropertyToAttribute('ariaLabel')).toBe('aria-label');
    });

    it('should convert aria idref properties', () => {
      expect(
        ariaPropertyToAttribute('ariaLabelledByElements' as ARIAProperty),
      ).toBe('aria-labelledby');
    });
  });
});
