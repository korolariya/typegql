import { ObjectType, Query } from 'domains';

describe('Special fields - @Query, @Mutation @Subscribe', () => {
  it('Will not allow registering special type on type that is not @Schema', () => {
    @ObjectType()
    class Foo {
      @Query() bar: string;
    }

    Foo;
  });
});