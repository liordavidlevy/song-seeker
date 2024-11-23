import { FilterNullPipe } from './filter-null.pipe';

describe('FilterNullPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterNullPipe();
    expect(pipe).toBeTruthy();
  });
});
