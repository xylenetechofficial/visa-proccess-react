import { CustomNavbarV3 } from '../../../componenets/CustomComponents';
import { DateInput, TextAreaInput } from '../../../componenets/Input';


export default function Dashboard() {
    const vacancies = <div className='flex flex-col p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow-md md:mr-3 md:flex-row '>
        <SourcingCard />
        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='w-[1px] mx-6 bg-gray-300'></div>


        <SourcingCard />
        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='w-[1px] mx-6 bg-gray-300'></div>
        <SourcingCard />

    </div>;

    const processing = <div className='flex flex-wrap justify-center md:justify-start'>
        <ProcessingCard title='Medical fit/ MOFA pending ' number='17065' subtitle='Subtitle' />
        <ProcessingCard title='Mofa done' number='1176' subtitle='Subtitle' />
        <ProcessingCard title='Visa endorsed' number='3' subtitle='Subtitle' />
        <ProcessingCard title='Emigration done' number='1317' subtitle='Subtitle' />
    </div>;
    return (
        <div className='h-screen'>
            <CustomNavbarV3 pageName="Dashboard" searchFunction={() => 0} />

            <h6 className="m-3 text-2xl font-bold dark:text-white">Sourcing</h6>
            <div className='flex flex-wrap justify-center mb-4 md:justify-start'>
                {vacancies}
                <SourcingTotalCard />
            </div>
            <h6 className="m-3 text-2xl font-bold dark:text-white">Processing</h6>
            {processing}

            <div className='grid grid-cols-1 gap-3 mt-4 md:grid-cols-2 lg:grid-cols-3'>
                <HeadlessTable title="Departure" />
                <HeadlessTable title="Pending" />
                <HeadlessTable title="Task to be completed" />
            </div>


        </div>

    );


}
function SourcingCard() {
    return (<div className='w-60'>
        <div className='flex items-baseline mb-3 '>
            <div className='w-[15px] h-[12px] mr-1  bg-green-400 rounded-sm '></div>
            <p className='text-[#9E9E9E]'>
                Unfilled vacancies soundlines selection
            </p>
        </div>
        <h2 className='text-xl font-bold'>482</h2>
    </div>);
}

function SourcingTotalCard() {
    return (


        <div className='p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow-md'>


            <div className='flex flex-col justify-between w-60'>
                <div className='flex items-baseline md:justify-end mb-7'>

                    <p className='text-[#9E9E9E] md:text-right'>
                        Total Unfilled vacancies
                    </p>
                </div>
                <h2 className='text-3xl font-bold md:text-right'>482</h2>
            </div>
        </div>);


}
function ProcessingCard(props: { title: string, number: string, subtitle: string }) {
    return (<div className='w-[257px] px-4 py-3 mr-3 mb-3 bg-white border border-gray-200 rounded-lg shadow-md'>
        <div className='text-xl text-[#616161] mb-2 h-12'>{props.title}</div>
        <div className='mb-2 text-3xl font-extrabold'>{props.number}</div>
        <div className='text-[#9E9E9E]'>{props.subtitle}</div>
    </div>);


}
function HeadlessTable(props: { title: string, }) {
    return (<div className="relative p-2 overflow-x-auto rounded-xl shadow-sourcing">
        <h6 className="mx-5 mt-4 mb-3 text-lg font-bold dark:text-white">{props.title}</h6>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                    <td className="px-6 py-4">
                        Ticket issued with emigration
                    </td>
                    <td className="px-6 py-4">
                        29
                    </td>

                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                    <td className="px-6 py-4">
                        Advance ticket issued w/o EMMING
                    </td>
                    <td className="px-6 py-4">
                        0
                    </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">

                    <td className="px-6 py-4">
                        Ticket issued payment pending
                    </td>
                    <td className="px-6 py-4">
                        99
                    </td>
                </tr>
            </tbody>
        </table>
    </div>);
}