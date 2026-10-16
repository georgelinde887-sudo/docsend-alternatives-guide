const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { TcoCalculator } = require('../src/tco-calculator');
const tools = require('../data/tools.json');

describe('DocSend Alternatives TCO Calculator Tests', () => {
  const calc = new TcoCalculator(tools);

  test('calculates accurate annual savings for a 5-seat team', () => {
    const res = calc.calculateAnnualComparison(5);

    // 5 seats * $65 * 12 = $3,900
    assert.equal(res.docsend.annual, 3900);
    // SendNow = $19 * 12 = $228
    assert.equal(res.sendnow.annual, 228);

    assert.equal(res.annualSavingsVsDocsend, 3672);
    assert.ok(res.percentSavings > 90);
  });

  test('handles 1 seat correctly', () => {
    const res = calc.calculateAnnualComparison(1);
    assert.equal(res.docsend.annual, 780);
    assert.equal(res.sendnow.annual, 228);
    assert.equal(res.annualSavingsVsDocsend, 552);
  });
});
