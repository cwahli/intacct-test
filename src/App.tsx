
import React from 'react';
import PaymentAnalysis from './Product UI/Payment_analysis.tsx';

export default function App() {
  return (
    <div className="attached-page-wrapper">
      

  
  

  
  <nav className="top-nav">
    <div className="container top-nav__inner">
      <div className="top-nav__left">
        <a href="http://localhost:5175/index.html#" className="top-nav__logo">
          <img src="/src/Assets/Sage_logo.svg" alt="Sage logo" height="26" />
        </a>
        <ul className="top-nav__links">
          <li><a href="http://localhost:5175/index.html#">Products &amp; Solutions</a></li>
          <li><a href="http://localhost:5175/index.html#">Accountants</a></li>
          <li><a href="http://localhost:5175/index.html#">Partners</a></li>
          <li><a href="http://localhost:5175/index.html#">Blog</a></li>
          <li><a href="http://localhost:5175/index.html#">Support</a></li>
        </ul>
      </div>
      <div className="top-nav__right">
        <button className="top-nav__search" aria-label="Search">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <button className="btn btn-outline-white btn-sm">Login</button>
      </div>
    </div>
  </nav>

  
  <nav className="sub-nav">
    <div className="container sub-nav__inner">
      
      <a href="http://localhost:5175/index.html#" className="sub-nav__brand">
        <img src="/src/Assets/Sage Intacct.svg" alt="Sage Intacct icon" width="28" height="28" className="sub-nav__logo-icon" />
        <span className="sub-nav__product-name">Sage Intacct</span>
      </a>
      
      
      <div className="sub-nav__right-group">
        <ul className="sub-nav__links">
          <li><a href="http://localhost:5175/index.html#product" className="is-active">Overview</a></li>
          <li><a href="http://localhost:5175/index.html#scenes">Product capabilities</a></li>
          <li><a href="http://localhost:5175/index.html#platform">Extended capabilities</a></li>
          <li><a href="http://localhost:5175/index.html#platform">Industry</a></li>
          <li><a href="http://localhost:5175/index.html#demo">Partners</a></li>
          <li className="nav-dropdown">
            <a href="http://localhost:5175/index.html#" className="dots-icon">•••</a>
            <div className="nav-dropdown-menu">
              <a href="http://localhost:5175/assurance.html" target="_blank" style={{"color":"var(--primary-colors-brilliant-green)","fontWeight":"bold"}}>Assurance Agent ↗</a>
            </div>
          </li>
        </ul>
        
        <div className="sub-nav__actions">
          <a href="tel:1-877-437-7765" className="sub-nav__phone">
            <img src="/src/Assets/call.svg" alt="Phone" width="14" height="14" className="phone-icon-svg" />
            1-877-437-7765
          </a>
          <a href="http://localhost:5175/index.html#demo" className="btn btn-green btn-sm">Request pricing</a>
        </div>
      </div>
    </div>
  </nav>

  
  <section className="hero" id="product">
    <div className="hero__bg">
      <div className="glow glow--blue"></div>
      <div className="glow glow--green"></div>
      <div className="glow glow--purple"></div>
    </div>

    <div className="hero__inner container">
      
      <div className="hero__header">
        <div className="hero__kicker">Rated #1 on G2 for ease of use</div>
        <h1 className="hero__h1"><span className="text-grad">Agentic financial software</span>, built to scale</h1>
        <p className="hero__sub">Sage Intacct is the end-to-end financial solution powered by AI agents — built for the visibility, control, and auditability finance teams demand as their business grows.</p>
        
        <div className="hero__email-capture" id="heroEmailCapture">
          <input type="email" placeholder="Start with your email" aria-label="Email address" />
          <button className="btn btn-green">Take product tour</button>
        </div>
      </div>

      
      <div className="hero__visual-frame" id="visualFrame">
        
        
        <div className="ui-glow-layer"></div>
        
        <div className="hero__visual-grid">
          
          
          <div className="hero__ui-wrapper-card" id="uiWrapperCard">
            
            
            <div className="hero__screen-viewport has-copilot-sidebar" id="screenViewport">
              
              
              <div className="viewport-header">
                <div className="viewport-header__left"></div>
                <div className="viewport-header__right">
                  <div className="viewport-copilot-toggle" id="viewportCopilotToggle">
                    <div className="copilot-btn-circle">
                      <img src="/src/Assets/Copilot identifier.svg" alt="Copilot" className="copilot-btn-img" />
                    </div>
                  </div>
                  <div className="viewport-header__pill">
                    <div className="viewport-header__pill-inner"></div>
                  </div>
                  <div className="viewport-header__avatar"></div>
                </div>
              </div>

              
              
              <div className="screen-card screen-card--checklist" id="screenChecklist">
                <div className="checklist-page-title">Close checklist: Month end close</div>
                
                
                <div className="checklist-info-card">
                  <div className="info-card__title">General Information</div>
                  <div className="info-card__grid">
                    <div className="info-cell">
                      <span className="info-label">Checklist name</span>
                      <span className="info-val">Month end close</span>
                    </div>
                    <div className="info-cell">
                      <span className="info-label">Reporting period</span>
                      <span className="info-val">Month ended July</span>
                    </div>
                  </div>
                </div>
                
                
                <div className="checklist-tasks-card">
                  <div className="tasks-card__title">Close tasks</div>
                  <div className="tasks-table-wrapper">
                    <table className="tasks-table">
                      <thead>
                        <tr>
                          <th>Task category</th>
                          <th>Task</th>
                          <th id="thTaskOwner">Task owner</th>
                          <th>Start date</th>
                          <th>Due date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>A/R</td>
                          <td className="text-green-link">Import transactions from sales</td>
                          <td><div className="placeholder-pill"></div></td>
                          <td><div className="placeholder-pill"></div></td>
                          <td><div className="placeholder-pill"></div></td>
                        </tr>
                        <tr>
                          <td>A/R</td>
                          <td className="text-green-link">Manually create and send AR</td>
                          <td><div className="placeholder-pill"></div></td>
                          <td><div className="placeholder-pill"></div></td>
                          <td><div className="placeholder-pill"></div></td>
                        </tr>
                        <tr>
                          <td>A/R</td>
                          <td className="text-green-link">Review unposted invoices</td>
                          <td><div className="placeholder-pill"></div></td>
                          <td><div className="placeholder-pill"></div></td>
                          <td><div className="placeholder-pill"></div></td>
                        </tr>
                        <tr>
                          <td>A/R</td>
                          <td className="text-green-link">Prepare AR reconciliation</td>
                          <td><div className="placeholder-pill"></div></td>
                          <td><div className="placeholder-pill"></div></td>
                          <td><div className="placeholder-pill"></div></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              
              <div className="screen-card screen-card--ap ap-unreconciled screen-card--active" id="screenAP">
                <div className="screen-card__header-ap">
                  <div className="ap-header__left">
                    <h3 className="ap-header__title">AP subledger reconciliation</h3>
                    <div className="ap-header__location">Location: E200--Union Health</div>
                  </div>
                  <div className="ap-header__right">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="settings-cog">
                      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="ap-table-wrapper">
                  <table className="ap-table">
                    <thead>
                      <tr>
                        <th>Account Number</th>
                        <th>Account Name</th>
                        <th className="text-right">Opening balance on June</th>
                        <th className="text-right">Debit</th>
                        <th className="text-right">Credit</th>
                        <th className="text-right">Closing balance on July</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2000</td>
                        <td>Accounts Payable</td>
                        <td className="text-right text-muted">-$328,268.71</td>
                        <td className="text-right text-blue reconciled-val" id="clickDebitLink">$215,759.55</td>
                        <td className="text-right text-blue reconciled-val">$168,788.41</td>
                        <td className="text-right text-muted reconciled-val">-$281,297.57</td>
                      </tr>
                      <tr className="totals-row">
                        <td>Totals:</td>
                        <td></td>
                        <td className="text-right">-$328,268.71</td>
                        <td className="text-right reconciled-val">$215,759.55</td>
                        <td className="text-right reconciled-val">$168,788.41</td>
                        <td className="text-right reconciled-val">-$281,297.57</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="ap-variance-row">
                  Subledger to GL variance <span className="variance-val">$1,345.44</span>
                </div>
              </div>

              
              <div className="screen-copilot-card" id="screenCopilot">
                <div className="copilot-header">
                  <div className="copilot-header__left">
                    <img src="/src/Assets/Copilot identifier.svg" alt="Copilot" className="copilot-header-icon" />
                    <span className="copilot-title">Copilot</span>
                  </div>
                  <div className="copilot-header__right">
                    <span className="copilot-header-btn" title="Minimise">
                      <img src="/src/Assets/chevron_down.svg" alt="Minimise" />
                    </span>
                    <span className="copilot-header-btn" title="Close">
                      <img src="/src/Assets/close.svg" alt="Close" />
                    </span>
                  </div>
                </div>
                
                <div className="copilot-tabs">
                  <button className="copilot-tab copilot-tab--active">
                    <span className="tab-dot"></span>
                    <img src="/src/Assets/Sparkle_white_background.svg" alt="Insights" style={{"width":"14px","height":"14px"}} /> Insights
                  </button>
                  <button className="copilot-tab">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Chat history
                  </button>
                </div>
                
                <div className="copilot-body">
                  
                  <div className="copilot-sub-screen copilot-sub-screen--hidden" id="copilotCloseAssistant">
                    <h4 className="copilot-section-title">Close assistant</h4>
                    <div className="copilot-meta-row">Reporting period: July</div>
                    
                    <div className="copilot-group">
                      <h5 className="copilot-group-title">
                        Accounts Payable
                        <svg className="sync-icon" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></svg>
                      </h5>
                      <div className="copilot-list">
                        <div className="copilot-list-item">
                          <span className="item-status-icon item-status-icon--warn">!</span>
                          <span className="item-text">Review unposted bills</span>
                        </div>
                        <div className="copilot-list-item copilot-list-item--interactive copilot-list-item--indented" id="copilotPrepareAPLink">
                          <span className="item-text text-link">Prepare AP reconciliation</span>
                        </div>
                        <div className="copilot-list-item">
                          <span className="item-status-icon item-status-icon--warn">!</span>
                          <span className="item-text">Close AP</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="copilot-group">
                      <h5 className="copilot-group-title">
                        Accounts Receivable
                        <svg className="sync-icon" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></svg>
                      </h5>
                      <div className="copilot-list">
                        <div className="copilot-list-item copilot-list-item--indented">
                          <span className="item-text text-link">Review unposted invoices</span>
                        </div>
                        <div className="copilot-list-item copilot-list-item--indented">
                          <span className="item-text text-link">Prepare AR reconciliation</span>
                        </div>
                        <div className="copilot-list-item">
                          <span className="item-status-icon item-status-icon--check">✓</span>
                          <span className="item-text">Close AR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="copilot-sub-screen" id="copilotVarianceReport">
                    <h4 className="copilot-prompt-title" id="copilotPromptText">Variance calculated between AP Ledger and General Ledger</h4>
                    <div className="copilot-table-wrapper" id="copilotTableWrapper">
                      <table className="copilot-table">
                        <thead>
                          <tr>
                            <th>Entity</th>
                            <th>AP balance</th>
                            <th>GL balance</th>
                            <th>Variance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="row-e100">
                            <td id="entity-e100">E100</td>
                            <td id="ap-e100"><span className="blue-underline" id="ap-balance-e100">177,732</span></td>
                            <td id="gl-e100"><span className="blue-underline" id="gl-balance-e100">177,732</span></td>
                            <td id="var-e100"><span className="blue-underline" id="var-val-e100">0.00</span></td>
                          </tr>
                          <tr className="row-e200">
                            <td id="entity-e200">E200</td>
                            <td id="ap-e200"><span className="blue-underline" id="ap-balance-e200">282,643</span></td>
                            <td id="gl-e200"><span className="blue-underline" id="gl-balance-e200">281,298</span></td>
                            <td id="var-e200"><span className="text-red" id="var-val-e200">1,345</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="copilot-footer-text">
                      The first 5 entities are displayed, please review the <span className="text-link">AP Ledger report</span> for more details.
                    </div>
                    <div className="copilot-placeholders">
                      <div className="placeholder-line" style={{"width":"90%"}}></div>
                      <div className="placeholder-line" style={{"width":"75%"}}></div>
                      <div className="placeholder-line" style={{"width":"85%"}}></div>
                    </div>
                  </div>
                </div>
              </div>

              
              
              <div className="screen-card screen-card--invoice" id="screenInvoice">
                <div className="screen-card__header-ap">
                  <div className="ap-header__left">
                    <h3 className="ap-header__title">Invoice matching agent</h3>
                    <div className="ap-header__location">Invoice: #INV-88902 -- Union Health Supplies</div>
                  </div>
                  <div className="ap-header__right">
                    <span className="screen-card__badge" id="invoiceBadge">Validating</span>
                  </div>
                </div>
                
                <div className="invoice-container">
                  <div className="invoice-details-grid">
                    <div className="invoice-field">
                      <label>Vendor Name</label>
                      <div className="field-value">Union Health Supplies</div>
                    </div>
                    <div className="invoice-field">
                      <label>Invoice Amount</label>
                      <div className="field-value font-bold">$12,450.00</div>
                    </div>
                  </div>
                  
                  <div className="match-checklist">
                    <div className="match-row match-row--success" id="matchRowPO">
                      <div className="match-row__left">
                        <div className="match-dot match-dot--success" id="matchDotPO"></div>
                        <span>Purchase Order Validation (PO-7701)</span>
                      </div>
                      <span className="match-status match-status--success" id="matchStatusPO">Matched</span>
                    </div>
                    <div className="match-row match-row--success" id="matchRowRec">
                      <div className="match-row__left">
                        <div className="match-dot match-dot--success" id="matchDotRec"></div>
                        <span>Receiving Log Matching</span>
                      </div>
                      <span className="match-status match-status--success" id="matchStatusRec">Matched</span>
                    </div>
                  </div>
                  
                  <div className="match-badge match-badge--active" id="invoiceApprovedBadge">Approved by Invoice Agent</div>
                </div>

                <div className="screen-copilot-card" id="copilotInvoice">
                  <div className="copilot-header">
                    <img src="/src/Assets/Copilot identifier.svg" alt="Copilot" className="copilot-logo-img" />
                    <span className="copilot-title">Copilot</span>
                  </div>
                  <div className="copilot-prompt" id="copilotInvoiceText"></div>
                  <div className="copilot-invoice-stats" id="copilotInvoiceStats">
                    <div style={{"display":"flex","justifyContent":"space-between","marginBottom":"4px"}}>
                      <span>Automated Matches:</span>
                      <span className="font-bold text-success">90.2%</span>
                    </div>
                    <div style={{"display":"flex","justifyContent":"space-between"}}>
                      <span>Manual Queue:</span>
                      <span className="font-bold text-muted">9.8%</span>
                    </div>
                  </div>
                </div>
              </div>

              
              
              <div className="screen-card screen-card--roi" id="screenROI">
                <div className="screen-card__header-ap">
                  <div className="ap-header__left">
                    <h3 className="ap-header__title">Investment Payback Analysis</h3>
                    <div className="ap-header__location">Cumulative savings and payback metrics</div>
                  </div>
                </div>
                
                <div className="roi-container">
                  <div className="roi-metric-row">
                    <div className="roi-metric-card">
                      <div className="roi-metric-val" id="roiMetricPeriod">5.8</div>
                      <div className="roi-metric-label">Payback Period</div>
                    </div>
                    <div className="roi-metric-card">
                      <div className="roi-metric-val" id="roiMetricSavings">$145K</div>
                      <div className="roi-metric-label">Net Savings</div>
                    </div>
                  </div>
                  
                  <div className="roi-chart">
                    <div className="roi-bar-row">
                      <span className="bar-label">Month 2</span>
                      <div className="bar-track"><div className="bar-fill" id="roiBar1" style={{"width":"25%"}}></div></div>
                    </div>
                    <div className="roi-bar-row">
                      <span className="bar-label">Month 4</span>
                      <div className="bar-track"><div className="bar-fill" id="roiBar2" style={{"width":"60%"}}></div></div>
                    </div>
                    <div className="roi-bar-row">
                      <span className="bar-label">Month 6</span>
                      <div className="bar-track"><div className="bar-fill" id="roiBar3" style={{"width":"100%","background":"var(--primary-colors-brilliant-green)"}}></div></div>
                    </div>
                  </div>
                </div>

                <div className="screen-copilot-card" id="copilotROI">
                  <div className="copilot-header">
                    <img src="/src/Assets/Copilot identifier.svg" alt="Copilot" className="copilot-logo-img" />
                    <span className="copilot-title">Copilot</span>
                  </div>
                  <div className="copilot-prompt" id="copilotROIText"></div>
                </div>
              </div>

              
              <div className="mock-cursor" id="mockCursor" style={{"opacity":"0","left":"453.5px","top":"211.75px"}}></div>
              
            </div>
            
          </div>
          
          
          <div className="hero__visual-steps">
            
            <div className="visual-step visual-step--active" id="step1">
              <svg className="visual-step__border-svg">
                <defs>
                  <lineargradient id="aiGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D639"></stop>
                    <stop offset="50%" stopColor="#0077FF"></stop>
                    <stop offset="100%" stopColor="#9417ED"></stop>
                  </lineargradient>
                </defs>
                <rect className="visual-step__border-rect" id="stepBorderRect1" x="-0.5" y="-0.5" width="319" height="59" rx="30" ry="30" fill="none" stroke="url(#aiGradient1)" strokeWidth="3" strokeDasharray="800" strokeDashoffset="800" style={{"strokeDasharray":"704.626","strokeDashoffset":"155.999"}}></rect>
              </svg>
              
              <div className="visual-step__inner">
                <div className="visual-step__icon-wrapper">
                  <span className="visual-step__status-icon" id="stepIcon1">⏸</span>
                </div>
                <div className="visual-step__content">
                  <div className="visual-step__title">Close the books in days, <span className="text-muted">not weeks</span></div>
                </div>
              </div>
            </div>

            
            <div className="visual-step" id="step2">
              <svg className="visual-step__border-svg">
                <defs>
                  <lineargradient id="aiGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D639"></stop>
                    <stop offset="50%" stopColor="#0077FF"></stop>
                    <stop offset="100%" stopColor="#9417ED"></stop>
                  </lineargradient>
                </defs>
                <rect className="visual-step__border-rect" id="stepBorderRect2" x="-0.5" y="-0.5" width="319" height="59" rx="30" ry="30" fill="none" stroke="url(#aiGradient2)" strokeWidth="3" strokeDasharray="800" strokeDashoffset="800" style={{"strokeDasharray":"704.626","strokeDashoffset":"704.626"}}></rect>
              </svg>
              
              <div className="visual-step__inner">
                <div className="visual-step__icon-wrapper">
                  <span className="visual-step__status-icon" id="stepIcon2">▶</span>
                </div>
                <div className="visual-step__content">
                  <div className="visual-step__title">Up to <strong>90% reduction</strong> in manual tasks</div>
                </div>
              </div>
            </div>

            
            <div className="visual-step" id="step3">
              <svg className="visual-step__border-svg">
                <defs>
                  <lineargradient id="aiGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D639"></stop>
                    <stop offset="50%" stopColor="#0077FF"></stop>
                    <stop offset="100%" stopColor="#9417ED"></stop>
                  </lineargradient>
                </defs>
                <rect className="visual-step__border-rect" id="stepBorderRect3" x="-0.5" y="-0.5" width="319" height="59" rx="30" ry="30" fill="none" stroke="url(#aiGradient3)" strokeWidth="3" strokeDasharray="800" strokeDashoffset="800" style={{"strokeDasharray":"704.626","strokeDashoffset":"704.626"}}></rect>
              </svg>
              
              <div className="visual-step__inner">
                <div className="visual-step__icon-wrapper">
                  <span className="visual-step__status-icon" id="stepIcon3">▶</span>
                </div>
                <div className="visual-step__content">
                  <div className="visual-step__title">Payback in as little as <strong>6 months</strong></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  
  <div className="stats-strip">
    <div className="container">
      <div className="stats-strip__inner">
        <div className="stat-item reveal">
          <div className="stat-item__num"><span className="count-target" data-val="90">0</span>%</div>
          <div className="stat-item__label">Reduction in manual transaction tasks through AI automation</div>
        </div>
        <div className="stat-item reveal d1">
          <div className="stat-item__num"><span className="count-target" data-val="6">0</span> mo</div>
          <div className="stat-item__label">Average payback period on implementation</div>
        </div>
        <div className="stat-item reveal d2">
          <div className="stat-item__num"><span className="count-target" data-val="2">0</span> days</div>
          <div className="stat-item__label">Continuous financial close — from weeks of manual effort</div>
        </div>
      </div>
    </div>
  </div>

  
  <section className="pillars-wrap" id="platform">
    <div className="container">
      <h2 className="pillars-title">Save time and elevate your work with <span className="ai-gradient-text">AI agents</span> &amp; automation &amp; intelligent financials</h2>
      <p className="pillars-subtitle">Shift from manual work to <span className="text-green-highlight">AI-powered</span> workflows across AP, AR, cash, close, and more—so your team can focus on higher impact activities.</p>
      
      <div className="pillars-hero-buttons">
        <button className="btn-explore">Explore core financials</button>
        <a className="link-tour">Take a product tour ➔</a>
      </div>

      <div className="pillars-tabs-container">
        <div className="pillars-tabs" id="ptabsRow">
          <button className="ptab is-active" data-ptab="0">Financials</button>
          <button className="ptab" data-ptab="1">Industry</button>
          <button className="ptab" data-ptab="2">Connected</button>
          <button className="ptab" data-ptab="3">Platform</button>
        </div>
      </div>
      
      <div className="ptab-panel" id="ptabPanel">
        <div className="ptab-panel-grid" id="ptabPanelGrid">
          <div className="dark-bento-grid">
            {/* Card 1: Assurance agent */}
            <div className="dark-bento-card glow-green">
              <h3 className="card-header-title">Assurance agent</h3>
              <div className="assurance-card-body">
                {/* Chatbot Pane */}
                <div className="chatbot-pane glow-green-border" style={{"display": "flex", "flexDirection": "column", "height": "100%", "boxSizing": "border-box"}}>
                  <div className="chatbot-header" style={{"flexShrink": 0}}>
                    <img src="./src/Assets/Copilot identifier.svg" alt="Copilot" style={{"width": "20px", "height": "20px"}} />
                    <span>Try the assurance agent</span>
                  </div>
                  <div className="chat-messages-container" id="assuranceChatMessages" style={{"display": "flex", "flexDirection": "column", "gap": "8px", "maxHeight": "230px", "overflowY": "auto", "paddingRight": "4px", "marginBottom": "8px", "flexGrow": 1, "minHeight": "160px"}}>
                    <div className="chat-bubble-ai">
                      I monitor your books continuously and flag anomalies, risks, and audit compliance issues before they become problems.
                    </div>
                  </div>
                  <div id="assuranceSuggestedContainer" style={{"display": "flex", "flexDirection": "column", "gap": "6px", "marginBottom": "8px", "flexShrink": 0}}>
                    <button className="chat-bubble-suggested" style={{"width": "100%", "textAlign": "left", "padding": "8px 12px", "fontSize": "11px", "fontWeight": 500, "margin": "2px 0"}}>
                      Are there any anomalies lately?
                    </button>
                    <button className="chat-bubble-suggested" style={{"width": "100%", "textAlign": "left", "padding": "8px 12px", "fontSize": "11px", "fontWeight": 500, "margin": "2px 0"}}>
                      Tell me about the 2026 duplicates
                    </button>
                    <button className="chat-bubble-suggested" style={{"width": "100%", "textAlign": "left", "padding": "8px 12px", "fontSize": "11px", "fontWeight": 500, "margin": "2px 0"}}>
                      Any unusual manual journal entries?
                    </button>
                    <button className="chat-bubble-suggested" style={{"width": "100%", "textAlign": "left", "padding": "8px 12px", "fontSize": "11px", "fontWeight": 500, "margin": "2px 0"}}>
                      What is the threshold avoidance risk?
                    </button>
                  </div>
                  <div className="chat-input-wrapper" style={{"flexShrink": 0, "marginTop": 0}}>
                    <input type="text" className="chat-input" id="assuranceChatInput" placeholder="Enter your question..." />
                    <button className="chat-send-btn" id="assuranceChatSendBtn">➤</button>
                  </div>
                </div>

                {/* Journal Entry Pane */}
                <div className="journal-pane">
                  <h4 className="journal-pane-title">Journal Entry</h4>
                  <div style={{"overflowY": "auto", "maxHeight": "310px", "width": "100%", "borderRadius": "8px", "border": "1px solid #E2E8F0", "paddingRight": "4px"}}>
                    <table className="journal-mini-table">
                      <thead style={{"position": "sticky", "top": 0, "background": "#FFFFFF", "zIndex": 10}}>
                        <tr>
                          <th>Account</th>
                          <th>Description</th>
                          <th>Entity</th>
                          <th>Currency</th>
                          <th>Txn a...</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1312 - Inter-entity Receivable</td>
                          <td>Auto-elimination</td>
                          <td>Elimination</td>
                          <td>USD</td>
                          <td>$5,000.00</td>
                        </tr>
                        <tr>
                          <td>1801 - Investment in Subsidiary</td>
                          <td>Auto-elimination</td>
                          <td>Elimination</td>
                          <td>USD</td>
                          <td>$150,000.00</td>
                        </tr>
                        <tr>
                          <td>2105 - Inter-entity Payable</td>
                          <td>Auto-elimination</td>
                          <td>Elimination</td>
                          <td>USD</td>
                          <td>$5,000.00</td>
                        </tr>
                        <tr>
                          <td>3301 - Contributed Capital</td>
                          <td>Auto-elimination</td>
                          <td>Elimination</td>
                          <td>USD</td>
                          <td>$150,000.00</td>
                        </tr>
                        <tr>
                          <td>1010 - Cash & Cash Equivalents</td>
                          <td>Client Invoice Recv - Acme Corp</td>
                          <td>US-East</td>
                          <td>USD</td>
                          <td>$28,500.00</td>
                        </tr>
                        <tr>
                          <td>1210 - Accounts Receivable</td>
                          <td>Client Invoice Recv - Acme Corp</td>
                          <td>US-East</td>
                          <td>USD</td>
                          <td>-$28,500.00</td>
                        </tr>
                        <tr style={{"background": "rgba(220, 38, 38, 0.04)", "borderLeft": "3px solid #DC2626"}}>
                          <td><span style={{"color": "#DC2626", "fontWeight": 600}}>⚠</span> 2110 - Accounts Payable</td>
                          <td>Vendor Payment - Adobe Software</td>
                          <td>US-West</td>
                          <td>USD</td>
                          <td>-$12,450.00</td>
                        </tr>
                        <tr style={{"background": "rgba(220, 38, 38, 0.04)", "borderLeft": "3px solid #DC2626"}}>
                          <td><span style={{"color": "#DC2626", "fontWeight": 600}}>⚠</span> 2110 - Accounts Payable</td>
                          <td>Vendor Payment - Adobe Software</td>
                          <td>US-West</td>
                          <td>USD</td>
                          <td>-$12,450.00</td>
                        </tr>
                        <tr>
                          <td>5010 - Cost of Goods Sold</td>
                          <td>Inventory shipment bulk</td>
                          <td>US-East</td>
                          <td>USD</td>
                          <td>$42,000.00</td>
                        </tr>
                        <tr style={{"background": "rgba(220, 38, 38, 0.04)", "borderLeft": "3px solid #DC2626"}}>
                          <td><span style={{"color": "#DC2626", "fontWeight": 600}}>⚠</span> 1010 - Cash & Cash Equivalents</td>
                          <td>Manual adj - Temporary cash reclass</td>
                          <td>US-East</td>
                          <td>USD</td>
                          <td>-$450,000.00</td>
                        </tr>
                        <tr style={{"background": "rgba(220, 38, 38, 0.04)", "borderLeft": "3px solid #DC2626"}}>
                          <td><span style={{"color": "#DC2626", "fontWeight": 600}}>⚠</span> 3601 - Elim Variance</td>
                          <td>Auto-elim: Adjustment mismatch</td>
                          <td>Elimination</td>
                          <td>USD</td>
                          <td>$155,000.00</td>
                        </tr>
                        <tr style={{"background": "rgba(220, 38, 38, 0.04)", "borderLeft": "3px solid #DC2626"}}>
                          <td><span style={{"color": "#DC2626", "fontWeight": 600}}>⚠</span> 3601 - Elim Variance</td>
                          <td>Auto-elim: Unreconciled balance</td>
                          <td>Elimination</td>
                          <td>USD</td>
                          <td>$55,000.00</td>
                        </tr>
                        <tr style={{"background": "rgba(220, 38, 38, 0.04)", "borderLeft": "3px solid #DC2626"}}>
                          <td><span style={{"color": "#DC2626", "fontWeight": 600}}>⚠</span> 6101 - Office Expense</td>
                          <td>Office equipment purchase</td>
                          <td>US-West</td>
                          <td>USD</td>
                          <td>$49,950.00</td>
                        </tr>
                        <tr>
                          <td>1210 - Accounts Receivable</td>
                          <td>Monthly SaaS subscription fees</td>
                          <td>US-East</td>
                          <td>USD</td>
                          <td>$85,400.00</td>
                        </tr>
                        <tr>
                          <td>4010 - Revenue</td>
                          <td>Monthly SaaS subscription fees</td>
                          <td>US-East</td>
                          <td>USD</td>
                          <td>-$85,400.00</td>
                        </tr>
                        <tr>
                          <td>1010 - Cash & Cash Equivalents</td>
                          <td>4/28/26</td>
                          <td>Payroll Funding - April 2026</td>
                          <td>UK-HQ</td>
                          <td>GBP</td>
                          <td>-$115,000.00</td>
                        </tr>
                        <tr>
                          <td>2110 - Accounts Payable</td>
                          <td>5/02/26</td>
                          <td>Marketing retainer - Growth Agency</td>
                          <td>US-West</td>
                          <td>USD</td>
                          <td>-$15,000.00</td>
                        </tr>
                        <tr>
                          <td>6201 - Marketing Expense</td>
                          <td>5/02/26</td>
                          <td>Marketing retainer - Growth Agency</td>
                          <td>US-West</td>
                          <td>USD</td>
                          <td>$15,000.00</td>
                        </tr>
                        <tr>
                          <td>1010 - Cash & Cash Equivalents</td>
                          <td>5/10/26</td>
                          <td>Client payment - Globex Corp</td>
                          <td>US-East</td>
                          <td>USD</td>
                          <td>$62,300.00</td>
                        </tr>
                        <tr>
                          <td>1210 - Accounts Receivable</td>
                          <td>5/10/26</td>
                          <td>Client payment - Globex Corp</td>
                          <td>US-East</td>
                          <td>USD</td>
                          <td>-$62,300.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Close agents */}
            <div className="dark-bento-card glow-purple">
              <h3 className="card-header-title">Close agents</h3>
              <div className="close-card-body">
                {/* Chatbot Pane */}
                <div className="chatbot-pane glow-purple-border">
                  <div className="chatbot-header">
                    <img src="/src/Assets/Copilot identifier.svg" alt="Copilot" className="copilot-header-icon" style={{width: 24, height: 24}} />
                    <span>Try the close agent</span>
                  </div>
                  <div className="chat-bubble-ai">
                    Tracks close tasks, flags blockers early, and helps teams close faster every period with confidence.
                  </div>
                  <div className="chat-bubble-user" style={{"display": "inline-block"}}>
                    Are there any anomalies lately?
                  </div>
                  <div className="chat-input-wrapper">
                    <input type="text" className="chat-input" placeholder="Enter your question..." readOnly />
                    <button className="chat-send-btn">➤</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: AP subledger reconciliation */}
            <div className="dark-bento-card glow-purple">
              <h3 className="card-header-title">AP subledger reconciliation</h3>
              <div className="ap-reconciliation-pane">
                <div className="ap-pane-title">AP subledger reconciliation</div>
                <div className="ap-pane-subtitle">Location: E200--Union Health</div>
                
                <table className="ap-mini-table">
                  <thead>
                    <tr>
                      <th>Account Number</th>
                      <th>Account Name</th>
                      <th>Opening balance on June</th>
                      <th>Debit</th>
                      <th>Credit</th>
                      <th>Closing balance on July</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2000</td>
                      <td>Accounts Payable</td>
                      <td>(328,268.71)</td>
                      <td style={{"color": "#0077FF"}}>215,759.55</td>
                      <td style={{"color": "#0077FF"}}>168,788.41</td>
                      <td>(281,297.57)</td>
                    </tr>
                    <tr style={{"fontWeight": 700}}>
                      <td>Totals:</td>
                      <td></td>
                      <td>(328,268.71)</td>
                      <td style={{"color": "#0077FF"}}>215,759.55</td>
                      <td style={{"color": "#0077FF"}}>168,788.41</td>
                      <td>(281,297.57)</td>
                    </tr>
                  </tbody>
                </table>

                {/* Copilot Overlapping Card */}
                <div className="ap-copilot-card">
                  <div className="ap-copilot-header">
                    <span className="ap-copilot-header-icon">✦</span>
                    <span>Copilot</span>
                  </div>
                  <div className="ap-copilot-title">Variance calculated between AP Ledger and General Ledger</div>
                  <table className="ap-copilot-table">
                    <thead>
                      <tr>
                        <th>Entity</th>
                        <th>AP balance</th>
                        <th>GL balance</th>
                        <th>Variance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>E100</td>
                        <td><span style={{"textDecoration": "underline", "color": "#0077FF"}}>177,732</span></td>
                        <td><span style={{"textDecoration": "underline", "color": "#0077FF"}}>177,732</span></td>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <td>E200</td>
                        <td><span style={{"textDecoration": "underline", "color": "#0077FF"}}>282,643</span></td>
                        <td><span style={{"textDecoration": "underline", "color": "#0077FF"}}>281,298</span></td>
                        <td><span className="ap-copilot-variance">1,345</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="ap-copilot-footer">The first 5 entities are displayed, please review the</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Deprecated bento carousel hidden block removed */}

  
  <section className="audit-section" id="auditSection">
    <div className="container">
      <div style={{"textAlign":"center","marginBottom":"56px"}}>
        <div style={{"fontSize":"11px","fontWeight":"700","textTransform":"uppercase","letterSpacing":"1.5px","color":"var(--primary-colors-accessible-jade)","marginBottom":"12px"}}>AI you can trust</div>
        <h2 style={{"fontFamily":"var(--font-h)","fontSize":"34px","fontWeight":"900","letterSpacing":"-0.5px","color":"var(--primary-colors-black)","marginBottom":"14px"}}>Finance AI built for auditability</h2>
        <p style={{"fontSize":"16px","color":"var(--gray-scale-gray-s1)","maxWidth":"600px","margin":"0 auto","lineHeight":"1.6"}}>Sage Intacct provides a secure AI infrastructure where explainability, compliance governance, and comprehensive transaction logs keep your finance operations transparent.</p>
      </div>
      
      <div className="audit-grid">
        <div className="audit-card">
          <div className="audit-card__icon">✓</div>
          <h3 className="audit-card__h">Every answer is explainable</h3>
          <p className="audit-card__body">Every answer shows its work. Know exactly how the system arrived at its answer. Interrogate any result.</p>
        </div>
        <div className="audit-card">
          <div className="audit-card__icon">🛡</div>
          <h3 className="audit-card__h">Every action stays governed</h3>
          <p className="audit-card__body">Human approval is always required. Agents operate within your pre-defined controls and limits.</p>
        </div>
        <div className="audit-card">
          <div className="audit-card__icon">⚙</div>
          <h3 className="audit-card__h">Every output has a trail</h3>
          <p className="audit-card__body">Every AI action is logged with full provenance, tracking the agent's name alongside the human who authorized it.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="vertical-industry-section" style={{"padding":"80px 0","background":"var(--primary-colors-white)","borderBottom":"1px solid var(--gray-scale-gray-t5)"}}>
    <div className="container">
      <div style={{"maxWidth":"760px","marginBottom":"48px"}}>
        <h2 style={{"fontFamily":"var(--font-h)","fontSize":"34px","fontWeight":"900","letterSpacing":"-0.5px","color":"var(--primary-colors-black)","marginBottom":"16px"}}>
          Purpose-built for your industry's complexity
        </h2>
        <p style={{"fontSize":"16px","color":"var(--gray-scale-gray-s1)","lineHeight":"1.6"}}>
          Go beyond generic financial systems. Sage Intacct has built-in, industry-specific workflows, reporting, and compliance capabilities designed for your industry.
        </p>
      </div>

      <div className="industry-bento-grid" style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"28px"}}>
        
        <div className="bento-card bento-card--entity" style={{"height":"340px","padding":"36px","justifyContent":"space-between"}}>
          <div>
            <div className="bento-card__sub-title" style={{"color":"rgba(255,255,255,0.7)"}}>Product tour bento</div>
            <h3 className="bento-card__title" style={{"color":"var(--primary-colors-white)"}}>See Sage Intacct in your industry</h3>
            <p style={{"fontSize":"13.5px","color":"rgba(255,255,255,0.8)","marginTop":"8px"}}>Select your vertical to explore custom dashboards and workflow metrics built specifically for your operations.</p>
          </div>
          <div style={{"display":"flex","gap":"12px","alignItems":"center"}}>
            <select style={{"background":"rgba(255,255,255,0.15)","border":"1px solid rgba(255,255,255,0.25)","color":"white","padding":"10px 18px","borderRadius":"8px","fontFamily":"var(--font-b)","fontSize":"13px","fontWeight":"600","outline":"none","cursor":"pointer"}}>
              <option style={{"color":"black"}} value="saas">SaaS &amp; Software</option>
              <option style={{"color":"black"}} value="healthcare">Healthcare &amp; Medical</option>
              <option style={{"color":"black"}} value="nonprofit">Non-Profit &amp; Charities</option>
              <option style={{"color":"black"}} value="construction">Construction &amp; Real Estate</option>
            </select>
            <button className="btn btn-green btn-sm" onclick="alert('Redirecting to vertical product tour form.')">See Sage Intacct</button>
          </div>
        </div>

        
        <div className="bento-card bento-card--controls" style={{"height":"340px","padding":"36px","justifyContent":"space-between"}}>
          <div>
            <div className="bento-card__sub-title" style={{"color":"rgba(255,255,255,0.5)"}}>Customer Success</div>
            <h3 className="bento-card__title">Trusted by 30,000 finance teams</h3>
            <p style={{"fontSize":"13.5px","color":"rgba(255,255,255,0.7)","marginTop":"8px"}}>Empowering growing enterprises worldwide to close faster, automate manual entries, and gain real-time visibility.</p>
          </div>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","borderTop":"1px solid rgba(255,255,255,0.1)","paddingTop":"16px"}}>
            <div style={{"textAlign":"left"}}>
              <div style={{"fontSize":"24px","fontWeight":"900","color":"var(--primary-colors-brilliant-green)"}}>5X ROI</div>
              <div style={{"fontSize":"11px","color":"rgba(255,255,255,0.5)","textTransform":"uppercase"}}>Average Payback</div>
            </div>
            <span className="bento-badge-illust">★ ★ ★ ★ ★ G2 Leader</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="cta-wrap" id="demo">
    <div className="container">
      <div className="cta-block reveal">
        <div>
          <h2 className="cta-h">See Sage Intacct working with your data</h2>
          <p className="cta-body">Our finance specialists will show you exactly how Sage Intacct's AI agents can transform your close cycle, AP process, and reporting — tailored to your organisation and vertical.</p>
        </div>
        <div className="cta-actions">
          <a href="http://localhost:5175/index.html#" className="btn-cta">Request personalised demo</a>
          <button className="btn-cta-ghost" style={{"color":"white","borderColor":"rgba(255,255,255,0.25)"}}>Speak to a specialist →</button>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__copy">© 2025 Sage Group plc. All rights reserved. Sage Intacct is a registered trademark.</div>
        <div className="footer__links">
          <a href="http://localhost:5175/index.html#" className="footer__link">Privacy</a>
          <a href="http://localhost:5175/index.html#" className="footer__link">Terms</a>
          <a href="http://localhost:5175/index.html#" className="footer__link">Cookie Settings</a>
          <a href="http://localhost:5175/index.html#" className="footer__link">Accessibility</a>
          <a href="http://localhost:5175/index.html#" className="footer__link">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>


    </div>
  );
}
