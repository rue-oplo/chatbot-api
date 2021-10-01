export abstract class MockModel<T> {
  protected abstract entityStub: T;

  constructor(entityData: T) {
    this.constructorSpy(entityData);
  }

  constructorSpy(_entityData: T): void {}

  async find(): Promise<T[]> {
    return [this.entityStub];
  }

  async findOne(): Promise<T> {
    return this.entityStub;
  }

  async save(): Promise<T> {
    return this.entityStub;
  }

  async findOneAndUpdate(): Promise<T> {
    return this.entityStub;
  }
}
