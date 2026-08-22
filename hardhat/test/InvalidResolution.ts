import { expect } from "chai";

type ResolutionResult =
  | "YES"
  | "NO"
  | "INVALID";

function resolve(
  readSucceeded: boolean,
  winningSideExists: boolean,
  conditionMatched: boolean
): ResolutionResult {
  if (!readSucceeded) {
    return "INVALID";
  }

  if (!winningSideExists) {
    return "INVALID";
  }

  return conditionMatched
    ? "YES"
    : "NO";
}

describe("Invalid resolution paths", function () {
  it("returns Invalid when oracle read fails", function () {
    expect(
      resolve(
        false,
        true,
        true
      )
    ).to.equal("INVALID");
  });

  it("returns Invalid when no winning side exists", function () {
    expect(
      resolve(
        true,
        false,
        true
      )
    ).to.equal("INVALID");
  });

  it("returns Yes for a valid matching result", function () {
    expect(
      resolve(
        true,
        true,
        true
      )
    ).to.equal("YES");
  });

  it("returns No for a valid negative result", function () {
    expect(
      resolve(
        true,
        true,
        false
      )
    ).to.equal("NO");
  });

  it("does not turn a failed read into No", function () {
    expect(
      resolve(
        false,
        true,
        false
      )
    ).to.equal("INVALID");
  });

  it("does not return Yes without a valid read", function () {
    expect(
      resolve(
        false,
        true,
        true
      )
    ).to.not.equal("YES");
  });
});
