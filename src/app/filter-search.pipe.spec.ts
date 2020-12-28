import { FilterSearchPipe } from './filter-search.pipe';

describe('FilterSearchPipe', () => {
  let pipe: FilterSearchPipe;
  const title1 = 'Title text';
  const title2 = 'Text Search';
  const title3 = 'Search title';

  beforeEach(() => {
    pipe = new FilterSearchPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('check the filter search pipe transform method', () => {
    expect(pipe.transform([
      {title: title3},
      {title: title2},
      {title: title1}
    ], 'text')).toEqual([
      {title: title2},
      {title: title1}
    ]);
    expect(pipe.transform([
      {title: title3},
      {title: title2},
      {title: title1}
    ], title3)).toEqual([
      {title: title3}
    ]);
  });
});
