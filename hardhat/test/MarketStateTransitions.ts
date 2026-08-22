import { expect } from "chai";

enum MarketState {
  Open,
  Closed,
  Resolving,
  Resolved,
  Invalid,
}

function canTransition(
  from: MarketState,
  to: MarketState
): boolean {
  if (from === MarketState.Open) {
    return (
      to === MarketState.Closed
    );
  }

  if (from === MarketState.Closed) {
    return (
      to === MarketState.Resolving ||
      to === MarketState.Resolved ||
      to === MarketState.Invalid
    );
  }

  if (from === MarketState.Resolving) {
    return (
      to === MarketState.Resolved ||
      to === MarketState.Invalid
    );
  }

  return false;
}

describe("Market state transitions", function () {
  it("allows Open to Closed", function () {
    expect(
      canTransition(
        MarketState.Open,
        MarketState.Closed
      )
    ).to.equal(true);
  });

  it("does not allow Open to Resolved", function () {
    expect(
      canTransition(
        MarketState.Open,
        MarketState.Resolved
      )
    ).to.equal(false);
  });

  it("allows Closed to Resolving", function () {
    expect(
      canTransition(
        MarketState.Closed,
        MarketState.Resolving
      )
    ).to.equal(true);
  });

  it("allows Resolving to Resolved", function () {
    expect(
      canTransition(
        MarketState.Resolving,
        MarketState.Resolved
      )
    ).to.equal(true);
  });

  it("allows Resolving to Invalid", function () {
    expect(
      canTransition(
        MarketState.Resolving,
        MarketState.Invalid
      )
    ).to.equal(true);
  });

  it("does not allow Resolved to Open", function () {
    expect(
      canTransition(
        MarketState.Resolved,
        MarketState.Open
      )
    ).to.equal(false);
  });

  it("does not allow Invalid to Resolving", function () {
    expect(
      canTransition(
        MarketState.Invalid,
        MarketState.Resolving
      )
    ).to.equal(false);
  });
});
