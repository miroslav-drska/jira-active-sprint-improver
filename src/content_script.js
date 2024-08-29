console.log('JIRA Active Sprint Improver is active.');

// Run only on JIRA pages
if (window.location.href.includes('jira')) {
  const style = document.createElement('style');
  style.innerHTML = `
    .ghx-swimlane .ghx-heading-expander {
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 24px;
      padding-right: 24px;
      margin-top: -10px;
      margin-bottom: -10px;
      margin-right: 16px;
    }
    .ghx-swimlane .ghx-heading-expander svg {
      position: absolute;
      top: 10px;
      left: 16px;
    }
  `;
  document.head.appendChild(style);
}
