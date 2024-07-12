import { renderHook } from '@testing-library/react';
import { act } from 'react-test-renderer';
import { useNfdLookup } from '../src';

describe('useNfdLookup', () => {
  it('should be defined', () => {
    expect(useNfdLookup).toBeDefined();
  });

  it('should be defined 2', () => {
    act(() => {
      let hook = renderHook((props) => useNfdLookup(props), {
        initialProps: 'NRLA7VZ2YV6WOS2LBS3UK25DB463XRSNG63BYNQI6CSGGROFWVQ2EKBQSI',
      });

      act(() => {
        expect(hook).toBeDefined();
      });
    });
  });
});
