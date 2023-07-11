import { VocalsToSymbolsPipe } from "./vocals-to-symbols.pipe";

describe('VocalsToSymbolsPipe', () => {
  it('create an instance', () => {
    const pipe = new VocalsToSymbolsPipe();
    expect(pipe).toBeTruthy();
  });
});
