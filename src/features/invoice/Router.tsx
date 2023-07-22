// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

import ClientSuspenseList from "./clientSuspenseList/Router";
import ClientInvoiceAdd from "./clientInvoiceAdd/Router";
import ClientInvoiceCandidatesTicketCharges from "./clientInvoiceCandidatesTicketCharges/Router";
import ClientInvoicesCandidateInvoiceRaise from "./clientInvoicesCandidateInvoiceRaise/Router";
import ClientAdditionalInvoice from "./clientAdditionalInvoice/Router";
import ClientAdditionalInvoicePaymentAdd from "./clientAdditionalInvoicePaymentAdd/Router";
import InvoiceNumbers from "./invoiceNumbers/Router";
import InvoiceCharges from "./invoiceCharges/Router";




function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/client-suspence-list/*' element={<ClientSuspenseList />}></Route>
            <Route path='/client-invoice-add/*' element={<ClientInvoiceAdd />}></Route>
            <Route path='/client-invoice-candidates-ticket-charges/*' element={<ClientInvoiceCandidatesTicketCharges />}></Route>
            <Route path='/client-invoice-candidates-invoice-raise/*' element={<ClientInvoicesCandidateInvoiceRaise />}></Route>
            <Route path='/client-additional-invoice/*' element={<ClientAdditionalInvoice />}></Route>
            <Route path='/client-additional-invoice-payment-add' element={<ClientAdditionalInvoicePaymentAdd />}></Route>
            <Route path='/invoice-numbers' element={<InvoiceNumbers />}></Route>
            <Route path='/invoice-charges' element={<InvoiceCharges />}></Route>
            
           

        </Routes>


    )
}




export default Main;