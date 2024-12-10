/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import 'jasmine'; (google3-only)

import {html} from 'lit';
import {customElement} from 'lit/decorators.js';

import {Environment} from '../../testing/environment.js';
import {ChipHarness} from '../harness.js';

import {FilterChip} from './filter-chip.js';

@customElement('test-filter-chip')
class TestFilterChip extends FilterChip {
  declare primaryAction: HTMLElement;
}

describe('Filter chip', () => {
  const env = new Environment();

  async function setupTest() {
    const chip = new TestFilterChip();
    env.render(html`${chip}`);
    await env.waitForStability();
    return {chip, harness: new ChipHarness(chip)};
  }

  describe('selection', () => {
    it('should select on click', async () => {
      const {chip, harness} = await setupTest();

      await harness.clickWithMouse();
      expect(chip.selected).withContext('chip.selected').toBeTrue();
    });

    it('should deselect on click', async () => {
      const {chip, harness} = await setupTest();
      chip.selected = true;

      await harness.clickWithMouse();
      expect(chip.selected).withContext('chip.selected').toBeFalse();
    });

    it('should not select on click when disabled', async () => {
      const {chip, harness} = await setupTest();
      chip.disabled = true;

      await harness.clickWithMouse();
      expect(chip.selected).withContext('chip.selected').toBeFalse();
    });

    it('should not select on click when soft-disabled', async () => {
      // Arrange
      const {chip, harness} = await setupTest();
      chip.softDisabled = true;

      // Act
      await harness.clickWithMouse();

      // Assert
      expect(chip.selected).withContext('chip.selected').toBeFalse();
    });

    it('can prevent default', async () => {
      const {chip, harness} = await setupTest();
      const handler = jasmine.createSpy();
      chip.addEventListener('selected', handler);

      chip.addEventListener('click', (event) => {
        event.preventDefault();
      });

      await harness.clickWithMouse();
      await harness.clickWithMouse();
      expect(handler).toHaveBeenCalledTimes(0);
    });

    it('always reverts value on preventDefault() even if selected is changed in listener', async () => {
      const {chip, harness} = await setupTest();

      chip.addEventListener(
        'click',
        (event) => {
          event.preventDefault();
          chip.selected = false;
        },
        {once: true},
      );

      await harness.clickWithMouse();
      expect(chip.selected)
        .withContext('chip.selected reverts to false')
        .toBeFalse();

      chip.selected = true;
      chip.addEventListener(
        'click',
        (event) => {
          event.preventDefault();
          chip.selected = false;
        },
        {once: true},
      );

      await harness.clickWithMouse();
      expect(chip.selected)
        .withContext('chip.selected reverts to true')
        .toBeTrue();
    });
  });

  it('should be focusable when soft-disabled', async () => {
    // Arrange
    const {chip} = await setupTest();
    chip.softDisabled = true;
    await chip.updateComplete;

    // Act
    chip.focus();

    // Assert
    expect(document.activeElement)
      .withContext('soft-disabled chip should be focused')
      .toBe(chip);
  });

  it('should not be clickable when soft-disabled', async () => {
    // Arrange
    const clickListener = jasmine.createSpy('clickListener');
    const {chip, harness} = await setupTest();
    chip.softDisabled = true;
    chip.addEventListener('click', clickListener);

    // Act
    await harness.clickWithMouse();

    // Assert
    expect(clickListener).not.toHaveBeenCalled();
  });

  it('should use aria-disabled when soft-disabled', async () => {
    // Arrange
    // Act
    const {chip} = await setupTest();
    chip.softDisabled = true;
    await chip.updateComplete;

    // Assert
    expect(chip.renderRoot.querySelector('button[aria-disabled="true"]'))
      .withContext('should have aria-disabled="true"')
      .not.toBeNull();
  });
});
