const fs = require('fs');
let code = fs.readFileSync('src/Assets/index.js', 'utf8');

// The one at 698
let target1 = `{
    id: "anomaly-variance",
    type: "warning",
    title: "Elimination Variance Mismatch",
    description: "Un-eliminated variances of $155,000.00 and $55,000.00 on 3/31/26 in Account 3601.",
    targetAccount: "3601 - Elim Variance",
    rowIndexes: [10, 11]
  },
  {
    id: "anomaly-threshold",
    type: "warning",
    title: "Threshold Bypass Warning",
    description: "A transaction for $49,950.00 sitting suspiciously just below a $50k CFO sign-off limit.",
    targetAccount: "6101 - Office Expense",
    rowIndexes: [12]
  }`;

let replace1 = `{
    id: "anomaly-variance",
    type: "warning",
    title: "Elimination Variance Mismatch",
    description: "Un-eliminated variances of $155,000.00 and $55,000.00 on 3/31/26 in Account 3601.",
    targetAccount: "3601 - Elim Variance",
    rowIndexes: [10, 11]
  },
  {
    id: "anomaly-threshold",
    type: "warning",
    title: "Threshold Bypass Warning",
    description: "A transaction for $49,950.00 sitting suspiciously just below a $50k CFO sign-off limit.",
    targetAccount: "6101 - Office Expense",
    rowIndexes: [12]
  },
  {
    id: "anomaly-saving",
    type: "success",
    title: "Saving Opportunity: Marketing Retainer",
    description: "A recurring transaction for marketing retainer sitting at a high amount. You could save money here.",
    targetAccount: "2110 - Accounts Payable",
    rowIndexes: [16]
  }`;

code = code.replace(target1, replace1);

let target3 = `window.CURRENT_AUDIT_ANOMALIES = [
          {
            id: "anomaly-manual-cash",
            type: "error",
            title: "Critical Risk: Manual Override",
            description: \`A \${cashAmount} manual cash adjustment posted on a weekend date. Intentionally vague description.\`,
            targetAccount: cashAccount
          },
          {
            id: "anomaly-threshold",
            type: "warning",
            title: "Needs Monitoring: Threshold Bypass",
            description: \`A transaction for \${threshAmount} sitting suspiciously just below a standard organizational threshold limit.\`,
            targetAccount: threshAccount
          }
        ];`;

let replace3 = `window.CURRENT_AUDIT_ANOMALIES = [
          {
            id: "anomaly-manual-cash",
            type: "error",
            title: "Critical Risk: Manual Override",
            description: \`A \${cashAmount} manual cash adjustment posted on a weekend date. Intentionally vague description.\`,
            targetAccount: cashAccount
          },
          {
            id: "anomaly-threshold",
            type: "warning",
            title: "Needs Monitoring: Threshold Bypass",
            description: \`A transaction for \${threshAmount} sitting suspiciously just below a standard organizational threshold limit.\`,
            targetAccount: threshAccount
          },
          {
            id: "anomaly-saving",
            type: "success",
            title: "Saving Opportunity: Marketing Retainer",
            description: \`A recurring transaction for marketing retainer sitting at a high amount. You could save money here.\`,
            targetAccount: "2110 - Accounts Payable",
            rowIndexes: [16]
          }
        ];`;

code = code.replace(target3, replace3);

fs.writeFileSync('src/Assets/index.js', code);
