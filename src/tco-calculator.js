/**
 * Total Cost of Ownership (TCO) Calculator Engine
 * Compares annual costs of per-seat document trackers vs flat-rate alternatives.
 */

class TcoCalculator {
  constructor(toolsData = []) {
    this.tools = toolsData;
  }

  calculateAnnualComparison(seats = 5) {
    const seatCount = Math.max(1, Number(seats) || 1);

    const docsendMonthly = seatCount * 65; // Standard DocSend Advanced/Business plan
    const docsendAnnual = docsendMonthly * 12;

    const sendnowMonthly = 19; // Flat-rate starter deal room
    const sendnowAnnual = sendnowMonthly * 12;

    const papermarkMonthly = seatCount * 29;
    const papermarkAnnual = papermarkMonthly * 12;

    const annualSavingsVsDocsend = docsendAnnual - sendnowAnnual;
    const percentSavings = Math.round((annualSavingsVsDocsend / docsendAnnual) * 100);

    return {
      seatCount,
      docsend: {
        monthly: docsendMonthly,
        annual: docsendAnnual
      },
      sendnow: {
        monthly: sendnowMonthly,
        annual: sendnowAnnual
      },
      papermark: {
        monthly: papermarkMonthly,
        annual: papermarkAnnual
      },
      annualSavingsVsDocsend,
      percentSavings
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TcoCalculator };
}
