/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import '@testing-library/jest-dom';
import 'resize-observer-polyfill';

class MockResizeObserver {
  constructor(public callback: ResizeObserverCallback) {}

  // observe(target: Element): void {
  // }

  // unobserve(target: Element): void {
  // }

  // disconnect(): void {
  // }
}

global.ResizeObserver = MockResizeObserver as any;




