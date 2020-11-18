import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  const title1 = 'asd';
  const title2 = 'qwe';
  const title3 = 'zxc';

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('check the orderBy pipe transform method', () => {
    expect(pipe.transform([
      {title: title3},
      {title: title2},
      {title: title1}
    ])).toEqual([
      {title: title1},
      {title: title2},
      {title: title3}
    ]);
  });
});
