const fs = require('fs');
let code = fs.readFileSync('src/Assets/index.js', 'utf8');

const t1 = `    {
      id: "anomaly-threshold",
      type: "warning",
      title: "Approval Threshold Avoidance",
      description: "A $49,950.00 purchase on 4/12/26, sitting suspiciously $50 below the $50k CFO sign-off limit.",
      targetAccount: "6101 - Office Expense",
      rowIndexes: [12]
    }
  ];`;
const r1 = `    {
      id: "anomaly-threshold",
      type: "warning",
      title: "Approval Threshold Avoidance",
      description: "A $49,950.00 purchase on 4/12/26, sitting suspiciously $50 below the $50k CFO sign-off limit.",
      targetAccount: "6101 - Office Expense",
      rowIndexes: [12]
    },
    {
      id: "anomaly-saving",
      type: "success",
      title: "Saving Opportunity",
      description: "A recurring transaction for marketing retainer sitting at a high amount. You could save money here.",
      targetAccount: "2110 - Accounts Payable",
      rowIndexes: [16]
    }
  ];`;
code = code.replace(t1, r1);

const t2 = `    {
      id: "anomaly-threshold",
      type: "warning",
      title: "Needs Monitoring: Threshold Bypass",
      description: \`A transaction for \${thresholdRow ? thresholdRow.amount : '$49,950.00'} sitting suspiciously just below a standard organizational threshold limit.\`,
      targetAccount: thresholdRow ? thresholdRow.account : "6101 - Office Expense",
      rowIndexes: [12]
    }
  ];`;
const r2 = `    {
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
      title: "Saving Opportunity",
      description: "A recurring transaction for marketing retainer sitting at a high amount. You could save money here.",
      targetAccount: "2110 - Accounts Payable",
      rowIndexes: [16]
    }
  ];`;
code = code.replace(t2, r2);

const t3 = `          {
            id: "anomaly-threshold",
            type: "warning",
            title: "Needs Monitoring: Threshold Bypass",
            description: \`A transaction for \${threshAmount} sitting suspiciously just below a standard organizational threshold limit.\`,
            targetAccount: threshAccount
          }
        ];`;
const r3 = `          {
            id: "anomaly-threshold",
            type: "warning",
            title: "Needs Monitoring: Threshold Bypass",
            description: \`A transaction for \${threshAmount} sitting suspiciously just below a standard organizational threshold limit.\`,
            targetAccount: threshAccount
          },
          {
            id: "anomaly-saving",
            type: "success",
            title: "Saving Opportunity",
            description: "A recurring transaction for marketing retainer sitting at a high amount. You could save money here.",
            targetAccount: "2110 - Accounts Payable",
            rowIndexes: [16]
          }
        ];`;
code = code.replace(t3, r3);

fs.writeFileSync('src/Assets/index.js', code);
