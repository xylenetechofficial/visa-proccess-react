// lib

import { Routes, Route } from 'react-router-dom'
import TicketDashboard from "./ticketDashboard/Router";
import ApproveChangesIssuedTickets from "./approveChangesIssuedTickets/Router";
import BookingRequest from "./bookingRequest/Router";
import PassportReleaseRequest from "./passportReleaseRequest/Router";
import RMAdvanceBooking from "./rmAdvanceBooking/Router";
import RMAdvanceBookingApproval from "./rmAdvanceBookingApproval/Router";
import TicketAgencyInvoiceAwaiting from "./ticketAgencyInvoiceAwaiting/Router";
import TicketAgencyInvoices from "./ticketAgencyInvoices/Router";
import TicketProvidedByCompany from "./ticketProvidedByCompany/Router";
import TicketReissue from "./ticketReissue/Router";



function Main() {

    return (

        <Routes>
            <Route path='/ticket-Dashboard/*' element={<TicketDashboard />}></Route>
            <Route path='/approve-changes-issued-tickets/*' element={<ApproveChangesIssuedTickets />}></Route>
            <Route path='/booking-request/*' element={<BookingRequest />}></Route>
            <Route path='/passport-release-request/*' element={<PassportReleaseRequest />}></Route>
            <Route path='/rm-advance-booking-approval/*' element={<RMAdvanceBookingApproval />}></Route>
            <Route path='/rm-advance-booking/*' element={<RMAdvanceBooking />}></Route>
            <Route path='/ticket-agency-invoice-awaiting/*' element={<TicketAgencyInvoiceAwaiting />}></Route>
            <Route path='/ticket-agency-invoices/*' element={<TicketAgencyInvoices />}></Route>
            <Route path='/ticket-provided-by-company/*' element={<TicketProvidedByCompany />}></Route>
            <Route path='/ticket-reissue/*' element={<TicketReissue />}></Route>

        </Routes>


    )
}




export default Main;