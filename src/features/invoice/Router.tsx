// lib
import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { UserAuthContextProvider, useUserAuth } from '../context/UserAuthContext';

import ClientSuspenseList from "./clientSuspenseList/Router";
import ClientInvoiceAdd from "./clientInvoiceAdd/Router";
import ClientInvoiceCandidatesTicketCharges from "./clientInvoiceCandidatesTicketCharges/Router";
import ClientInvoicesCandidateInvoiceRaise from "./clientInvoicesCandidateInvoiceRaise/Router";
import ClientAdditionalInvoice from "./clientAdditionalInvoice/Router";
import ClientPayment from "./clientPayment_2/Router";
import ClientAdditionalPayment from "./clientAdditionalPayment_2/Router";
import InvoiceNumbers from "./invoiceNumbers/Router";
import InvoiceCharges from "./invoiceCharges/Router";
import CourierDate from "./courierDate/Router";
import InvoiceDispatch from "./invoiceDispatch/Router";
import InvoiceAdminRemarks from "./invoiceAdminRemarks/Router";
import ContactPerson from "./contactPerson/Router";
import ViewSubmittedInvoices from "./viewSubmitInvoices/Router";




function Main() {
    // const { user } = useUserAuth()
    return (

        <Routes>
            <Route path='/client-suspence-list/*' element={<ClientSuspenseList />}></Route>
            <Route path='/client-invoice-add/*' element={<ClientInvoiceAdd />}></Route>
            <Route path='/client-invoice-candidates-ticket-charges/*' element={<ClientInvoiceCandidatesTicketCharges />}></Route>
            <Route path='/client-invoice-candidates-invoice-raise/*' element={<ClientInvoicesCandidateInvoiceRaise />}></Route>
            <Route path='/client-additional-invoice/*' element={<ClientAdditionalInvoice />}></Route>
            <Route path='/client-payment' element={<ClientPayment />}></Route>
            <Route path='/client-additional-payment' element={<ClientAdditionalPayment />}></Route>
            <Route path='/invoice-numbers' element={<InvoiceNumbers />}></Route>
            <Route path='/invoice-charges' element={<InvoiceCharges />}></Route>
            <Route path='/courier-date' element={<CourierDate />}></Route>
            <Route path='/invoice-dispatch' element={<InvoiceDispatch />}></Route>
            <Route path='/invoice-admin-remarks' element={<InvoiceAdminRemarks />}></Route>
            <Route path='/contact-person' element={<ContactPerson />}></Route>
            <Route path='/view-submitted-invoices' element={<ViewSubmittedInvoices />}></Route>
            
           

        </Routes>


    )
}




export default Main;