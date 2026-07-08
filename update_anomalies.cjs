const fs = require('fs');
let code = fs.readFileSync('src/Assets/index.js', 'utf8');

// Replace the array at 760
let array1Str = `window.CURRENT_AUDIT_ANOMALIES = [
    {
      id: "anomaly-manual-cash",
      type: "error",
      title: "Critical Risk: Manual Override",
      description: \`A \${manualCashRow ? manualCashRow.amount : '-$450,000.00'} manual cash adjustment posted on a weekend date. Intentionally vague description.\`,
      targetAccount: manualCashRow ? manualCashRow.account : "1010 - Cash & Cash Equivalents",
      rowIndexes: [9]
    },
    {
      id: "anomaly-threshold",
      type: "warning",
      title: "Needs Monitoring: Threshold Bypass",
      description: \`A transaction for \${thresholdRow ? thresholdRow.amount : '$49,950.00'} sitting suspiciously just below a standard organizational threshold limit.\`,
      targetAccount: thresholdRow ? thresholdRow.account : "6101 - Office Expense",
      rowIndexes: [12]
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
code = code.replace(/window\.CURRENT_AUDIT_ANOMALIES = \[\s*\{\s*id: "anomaly-manual-cash"[\s\S]*?rowIndexes: \[12\]\s*\}\s*\];/g, array1Str);

let array2Str = `window.CURRENT_AUDIT_ANOMALIES = [
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
code = code.replace(/window\.CURRENT_AUDIT_ANOMALIES = \[\s*\{\s*id: "anomaly-manual-cash"[\s\S]*?targetAccount: threshAccount\s*\}\s*\];/g, array2Str);

fs.writeFileSync('src/Assets/index.js', code);
