export const navigations: NavigationInterface[] = [
  { name: 'Dashboard', path: '/dashboard', icon: '' },
  {
    name: 'Masters',
    icon: 'account_circle',
    children: [
      { name: 'Agent', icon: 'pageview', path: '/masters/agent' },
      { name: 'Agent Special Note', icon: 'pageview', path: '/masters/agent-special-note' },
      { name: 'Company', icon: 'pageview', path: '/masters/company' },
      { name: 'Country', icon: 'pageview', path: '/masters/country' },
      { name: 'Agency', icon: 'pageview', path: '/masters/agency' },
      { name: 'Bank', icon: 'pageview', path: '/masters/bank' },
      { name: 'Sector', icon: 'pageview', path: '/masters/sector' },
      { name: 'Interview Sector', icon: 'pageview', path: '/masters/interview-sector' },
      { name: 'Grade', icon: 'pageview', path: '/masters/grade' },
      { name: 'Mofa Payment', icon: 'pageview', path: '/masters/mofa-payment' },
      { name: 'Visa Type', icon: 'pageview', path: '/masters/visa-type' },
      { name: 'Interview Mode', icon: 'pageview', path: '/masters/interview-mode' },
      { name: 'Other Docs', icon: 'pageview', path: '/masters/other-docs' },
      { name: 'Consolidate Charge', icon: 'pageview', path: '/masters/consolidate-charge' },
      { name: 'Visa Authorisation', icon: 'pageview', path: '/masters/visa-authorisation' },

      // { name: 'User', icon: 'pageview', path: '/masters/user' },
      // { name: 'Role', icon: 'pageview', path: '/masters/role' },
    ]
  },
  {
    name: "Job Dpt",
    icon: "work",
    children: [
      { name: 'Job Order', icon: 'pageview', path: '/job-dpt/job-order' },
      { name: 'Asign To Operation Manager', icon: 'pageview', path: '/job-dpt/asign-to-op-manager' },
      { name: 'Asign To Recruit Manager', icon: 'pageview', path: '/job-dpt/asign-to-rm-manager' },
      { name: 'Asign To RC and RS', icon: 'pageview', path: '/job-dpt/asign-to-rc-rs' },
      { name: 'Vacancy', icon: 'pageview', path: '/job-dpt/vacancy' },
      { name: 'Vacancy Approve', icon: 'pageview', path: '/job-dpt/vacancy-approve' },
      { name: 'T&C', icon: 'pageview', path: '/job-dpt/terms-condition' },
      { name: 'Job Order Approve', icon: 'pageview', path: '/job-dpt/job-order-approve' },
      { name: 'Selection', icon: 'pageview', path: '/job-dpt/selection' },
      { name: 'Selection Upload', icon: 'pageview', path: '/job-dpt/selection-upload' },
      { name: 'Project Status KSA / Non KSA', icon: 'pageview', path: '/job-dpt/project-status-ksa' },
      { name: 'Project Status KSA / Non KSA Closed', icon: 'pageview', path: '/job-dpt/project-status-ksa-closed' },
      // { name: 'Selection', icon: 'pageview', path: '/job-dpt/selection' },

      // { name: 'Asign To Operation Manager', icon: 'pageview', path: '/job-dpt/asign-to-op-manager' },
      // { name: 'Asign To Operation Manager', icon: 'pageview', path: '/job-dpt/asign-to-op-manager' },
      // { name: 'Asign To Operation Manager', icon: 'pageview', path: '/job-dpt/asign-to-op-manager' },
      // { name: 'Asign To Operation Manager', icon: 'pageview', path: '/job-dpt/asign-to-op-manager' },
    ]
  },
  {
    name: "Without Job Order",
    icon: "work_off",
    children: [

      { name: 'Selection', icon: 'pageview', path: '/without-job-order/selection' },
      { name: 'Mofa Entry', icon: 'pageview', path: '/without-job-order/mofa-entry/' },
      { name: 'Send To Actual Mofa Entry', icon: 'pageview', path: '/without-job-order/send-to-actual-mofa-entry/' },

      // { name: 'Asign To Operation Manager', icon: 'pageview', path: '/job-dpt/asign-to-op-manager' },
      // { name: 'Asign To Operation Manager', icon: 'pageview', path: '/job-dpt/asign-to-op-manager' },
      // { name: 'Asign To Operation Manager', icon: 'pageview', path: '/job-dpt/asign-to-op-manager' },
      // { name: 'Asign To Operation Manager', icon: 'pageview', path: '/job-dpt/asign-to-op-manager' },
    ]
  }, {
    name: "Visa",
    icon: "payment",
    children: [

      { name: 'Block Visa', icon: 'pageview', path: '/visa/block-visa' },
      { name: 'Index Visa', icon: 'pageview', path: '/visa/index-visa' },
      { name: 'Sourcing Collection Dashboard', icon: 'pageview', path: '/visa/sourcing-collection-dashboard' },
      { name: 'Submission Dashboard (Dubai)', icon: 'pageview', path: '/visa/submission-dashboad-dubai' },
       { name: 'Send To Mofa', icon: 'pageview', path: '/visa/send-to-mofa' },
       { name: 'Mofa Entry', icon: 'pageview', path: '/visa/mofa-entry' },
       { name: 'Dubai Data Entry', icon: 'pageview', path: '/visa/dubai-data-entry' },
      // TODO: add path
       { name: 'Submission Dashboard', icon: 'pageview', path: '/visa/submission-dashboard' },
       { name: 'Visa Received', icon: 'pageview', path: '/visa/visa-received' },
       { name: 'Mol Forwarded to visa Department', icon: 'pageview', path: '/visa/mol-forwarded-to-visa-dept' },
       { name: 'Mol Received', icon: 'pageview', path: '/visa/mol-received' },
       { name: 'Mol Submited To company', icon: 'pageview', path: '/visa/mol-submited-to-company' },
       { name: 'Work permit received from company', icon: 'pageview', path: '/visa/work-permit-recieved-from-company' },
    ]
  },
  {
    name: "Domestic Ticket",
    icon: "airplane_ticket",
    children: [
      { name: 'Interview Schedule Period', icon: 'pageview', path: '/domestic-ticket/interview-schedule-period/' },
      { name: 'Interview Schedule', icon: 'pageview', path: '/domestic-ticket/interview-schedule/' },
      { name: 'Ticket Issue', icon: 'fiber_manual_record', path: '/domestic-ticket/ticket-issue/' },
    ]
  },
  {
    name: "RC",
    icon: "fact_check",
    children: [
      { name: 'Deploy Candidates', icon: 'pageview', path: '/RC/deploy-candidates/' },
  
    ]
  },
  {
    name: "Agreement",
    icon: "receipt_long",
    children: [
      { name: 'Agreement', icon: 'pageview', path: '/agreement/agreement/' },
  
    ]
  },
  {
    name: "Account",
    icon: "account_balance",
    children: [
      { name: 'Account dashboard', icon: 'pageview', path: '/account/account-dashboard/' },
      { name: 'Reject Cancel Approve', icon: 'pageview', path: '/account/reject-cancel-approve/' },
      { name: 'Agent Payment', icon: 'pageview', path: '/account/agent-payment/' },
      { name: 'Candidate Discount', icon: 'pageview', path: '/account/candidate-discount/' },
      { name: 'Candidate Discount Approve/Reject', icon: 'pageview', path: '/account/candidate-discount-approve/reject/' },
      
      { name: 'Direct Payment', icon: 'pageview', path: '/account/direct-payments' },
      { name: 'Agent Commissions', icon: 'pageview', path: '/account/agent-commissions' },
      { name: 'Agent Commission Add', icon: 'pageview', path: '/account/agent-commission-add' },
      { name: 'Agent Payments Received', icon: 'pageview', path: '/account/agent-payments-received' },
      { name: 'Agent Bulk Payment', icon: 'pageview', path: '/account/agent-bulk-payment' },
      { name: 'Penalty After Deployment', icon: 'pageview', path: '/account/penalty-after-deployment' },
      { name: 'Delhi/Other Daily Payments', icon: 'pageview', path: '/account/delhi-other-daily-payments' },
      { name: 'Incentives', icon: 'pageview', path: '/account/incentives' },
    ]
  }

]; 