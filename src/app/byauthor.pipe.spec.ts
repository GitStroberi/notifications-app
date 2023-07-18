import { ByAuthorPipe } from './byauthor.pipe';

describe('ByAuthorPipe', () => {
  it('create an instance', () => {
    const pipe = new ByAuthorPipe();
    expect(pipe).toBeTruthy();
  });
});
