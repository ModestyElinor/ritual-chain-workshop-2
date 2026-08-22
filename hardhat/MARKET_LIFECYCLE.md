# Market Lifecycle Notes

I wanted to understand the market state machine before changing any contract
logic.

The main states are:

- Open
- Closed
- Resolving
- Resolved
- Invalid

## Open

The market accepts bets.

## Closed

The betting period has ended.

The market is waiting for the scheduled resolution process.

## Resolving

A resolution attempt has happened and the market is still waiting for a
successful result.

## Resolved

The oracle value was successfully obtained and the market has a final outcome.

## Invalid

The market cannot produce a usable result, so users should be able to recover
their stake.

## Why I Added Tests

I originally looked mostly at the happy path.

The state tests made me look at the failure paths as well.

In particular, an oracle failure should not simply become a NO result.

That distinction is important for a prediction market.

## Main Observation

The interesting part of this contract is not only the YES/NO comparison.

The state transitions around the comparison are just as important.

That is what I focused on in these tests.
