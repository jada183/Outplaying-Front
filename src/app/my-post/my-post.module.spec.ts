import { MyPostModule } from './my-post.module';

describe('MyPostModule', () => {
  let myPostModule: MyPostModule;

  beforeEach(() => {
    myPostModule = new MyPostModule();
  });

  it('should create an instance', () => {
    expect(myPostModule).toBeTruthy();
  });
});
