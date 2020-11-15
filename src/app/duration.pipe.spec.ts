import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('check the duration pipe transform method', () => {
    expect(pipe.transform(88)).toBe('1h 28min');
    expect(pipe.transform(10)).toBe('10min');
    expect(pipe.transform(123)).toBe('2h 3min');
  });
});
