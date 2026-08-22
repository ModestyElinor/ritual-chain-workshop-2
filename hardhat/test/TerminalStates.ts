import { expect } from "chai";

enum MarketState {
  Open,
  Closed,
  Resolving,
  Resolved,
  Invalid,
}

function isTerminal(
  state: MarketState
): boolean {
  return (
    state === MarketState.Resolved ||
    state === MarketState.Invalid
  );
}

describe("Terminal market states", function () {
  const terminalStates = [
    MarketState.Resolved,
    MarketState.Invalid,
  ];

  const activeStates = [
    MarketState.Open,
    MarketState.Closed,
    MarketState.Resolving,
  ];

  it("marks Resolved as terminal", function () {
    expect(
      isTerminal(
        MarketState.Resolved
      )
    ).to.equal(true);
  });

  it("marks Invalid as terminal", function () {
    expect(
      isTerminal(
        MarketState.Invalid
      )
    ).to.equal(true);
  });

  it("keeps Open active", function () {
    expect(
      isTerminal(
        MarketState.Open
      )
    ).to.equal(false);
  });

  it("keeps Closed active", function () {
    expect(
      isTerminal(
        MarketState.Closed
      )
    ).to.equal(false);
  });

  it("keeps Resolving active", function () {
    expect(
      isTerminal(
        MarketState.Resolving
      )
    ).to.equal(false);
  });

  it("has exactly two terminal states", function () {
    expect(
      terminalStates.length
    ).to.equal(2);
  });

  it("has three non-terminal states", function () {
    expect(
      activeStates.length
    ).to.equal(3);
  });
});
