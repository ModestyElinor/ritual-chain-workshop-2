import { expect } from "chai";

function canBet(
  closeBlock: bigint,
  currentBlock: bigint
): boolean {
  return currentBlock < closeBlock;
}

function canResolve(
  resolveBlock: bigint,
  currentBlock: bigint
): boolean {
  return currentBlock >= resolveBlock;
}

describe("Lifecycle boundaries", function () {
  it("allows betting before close block", function () {
    expect(
      canBet(100n, 99n)
    ).to.equal(true);
  });

  it("closes betting at the close block", function () {
    expect(
      canBet(100n, 100n)
    ).to.equal(false);
  });

  it("does not allow betting after close", function () {
    expect(
      canBet(100n, 101n)
    ).to.equal(false);
  });

  it("does not resolve before resolve block", function () {
    expect(
      canResolve(200n, 199n)
    ).to.equal(false);
  });

  it("resolves at the target block", function () {
    expect(
      canResolve(200n, 200n)
    ).to.equal(true);
  });

  it("resolves after target block", function () {
    expect(
      canResolve(200n, 201n)
    ).to.equal(true);
  });

  it("keeps betting and resolving boundaries independent", function () {
    expect(
      canBet(100n, 99n)
    ).to.equal(true);

    expect(
      canResolve(200n, 199n)
    ).to.equal(false);
  });
});
