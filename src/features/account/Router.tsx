// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

import DashBoard from "./dashboard/Router";
import RejectCancelApprove from "./rejectCancelApprove/Router";
import AgentPayment from "./agentPayment/Router";
import CandidateDiscount from "./candidateDiscount/Router";
import CandidateDiscountApproveReject from "./candidateDiscountApproveReject/Router";
import DirectPayments from "./directPayments/Router";
import AgentPaymentsReceived from "./agentPaymentsRecieved/Router";
import AgentCommissions from "./agentCommissions/Router";
import AgentCommissionAdd from "./agentCommissionAdd/Router";
import PenaltyAfterDeployment from "./penaltyAfterDeployment/Router";
import AgentBulkPayment from "./agentBulkPayment/Router";
import Incentives from "./incentives/Router";
import DelhiOtherDailyPayments from "./delhiOtherDailyPayments/Router";
import AccountCandidateList from './accountCandidatesList/Router';
import AccountServices from './accountServices/Router';
import AccountDpt from './accountDpt/Router';
import AgentReturnPayment from './agentReturnPayment/Router';
import ManageAgentPaymentReturn from './manageAgentPaymentReturn/Router';




function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/account-dashboard/*' element={<DashBoard />}></Route>
            <Route path='/reject-cancel-approve/*' element={<RejectCancelApprove />}></Route>
            <Route path='/agent-payment/*' element={<AgentPayment />}></Route>
            <Route path='/candidate-discount/*' element={<CandidateDiscount />}></Route>
            <Route path='/candidate-discount-approve/reject/*' element={<CandidateDiscountApproveReject />}></Route>
            <Route path='/direct-payments/*' element={<DirectPayments />}></Route>
            <Route path='/agent-payments-recieved/*' element={<AgentPaymentsReceived />}></Route>
            <Route path='/agent-commissions/*' element={<AgentCommissions />}></Route>
            <Route path='/agent-commission-add/*' element={<AgentCommissionAdd />}></Route>
            <Route path='/penalty-after-deployment/*' element={<PenaltyAfterDeployment />}></Route>
            <Route path='/agent-bulk-payment/*' element={<AgentBulkPayment />}></Route>
            <Route path='/incentives/*' element={<Incentives />}></Route>
            <Route path='/delhi-other-daily-payments/*' element={<DelhiOtherDailyPayments />}></Route>
            <Route path='/account-candidate-list/*' element={<AccountCandidateList />}></Route>
            <Route path='/service-charges/*' element={<AccountServices />}></Route>
            <Route path='/account-dpt/*' element={<AccountDpt />}></Route>
            <Route path='/agent-return-payment/*' element={<AgentReturnPayment />}></Route>
            <Route path='/manage-agent-payment-return/*' element={<ManageAgentPaymentReturn />}></Route>
        
        </Routes>


    )
}




export default Main;