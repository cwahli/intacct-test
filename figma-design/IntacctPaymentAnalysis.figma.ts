// @ts-nocheck
// url=https://www.figma.com/design/0OkHv3MB9qkTqfvj1jvk5Y/Test-page?node-id=41-7130
// source=assurance.html
// component=IntacctPaymentAnalysis
import figma from 'figma'

const instance = figma.selectedInstance

export default {
  example: figma.code`
    <div class="payment-analysis-container">
      <!-- Dashboard Section -->
      <div class="analysis-dashboard">
        <h2 class="analysis-title">Payment analysis dashboard</h2>
        
        <!-- Stats Row -->
        <div class="stats-row">
          <div class="stat-card">
            <span class="stat-value">£10,500.00</span>
            <span class="stat-label">Updated budget</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">£10,500.00</span>
            <span class="stat-label">Payments made today</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">£0.00</span>
            <span class="stat-label">Remaining funds</span>
          </div>
        </div>

        <!-- Payments Created Card -->
        <div class="payments-created-card">
          <h3>Payments created</h3>
          <p>The two following payments are now in the approval workflow.</p>
          <ul>
            <li>Bank account: <strong>CHASE</strong></li>
            <li>Payment method: <strong>Check</strong></li>
            <li>Payment date: <strong>20/07</strong></li>
          </ul>

          <!-- Small Inner Table -->
          <table class="inner-table">
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Vendor</th>
                <th>Bill reference</th>
                <th>Payment priority</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2233</td>
                <td>PG & E</td>
                <td>2233</td>
                <td>High</td>
                <td>£500.00</td>
              </tr>
              <tr>
                <td>2123</td>
                <td>Rippel Manage...</td>
                <td>1243</td>
                <td>Urgent</td>
                <td>£10,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Copilot Chatbot Sidebar -->
      <div class="copilot-sidebar">
        <div class="copilot-header">
          <div class="copilot-title">
            <span class="copilot-dot"></span>
            Copilot
          </div>
        </div>
        <div class="copilot-chat">
          <div class="chat-bubble ai-bubble">
            <h4>Past due urgent bills</h4>
            <table class="chat-table">
              <thead>
                <tr>
                  <th>Bill no.</th>
                  <th>Vendor</th>
                  <th>Due date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2233</td>
                  <td>PG & E</td>
                  <td>01/07</td>
                  <td>£500.00</td>
                </tr>
                <tr>
                  <td>2123</td>
                  <td>Rippel Manage...</td>
                  <td>01/07</td>
                  <td>£10,000.00</td>
                </tr>
              </tbody>
            </table>
            <div class="recommendation">
              <strong>Recommendation:</strong> Pay the two most urgent bills to avoid late fees of £500.
            </div>
          </div>
          <div class="chat-bubble user-bubble">
            <p>Let’s go with your recommendation. Pay with my Chase bank account, with a check using today’s date.</p>
          </div>
        </div>
        <div class="copilot-footer">
          <label>Ask Copilot a question</label>
          <input type="text" placeholder="Type a message..." />
        </div>
      </div>
    </div>
  `,
  id: 'intacct-payment-analysis',
  metadata: { nestable: true }
}
