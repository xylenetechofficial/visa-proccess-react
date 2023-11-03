// lib
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import { CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import ManageAgentTable from './Table';
import EditManageAgentTable from './Edit';
import { AdditionalDataInterface } from '../../../../utils/api_helper';
// component



function Main() {

    const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>(
        {
          pagination: {
            page: 1,
            page_count: 1,
            item_count: 0,
            sno_base: 0,
          },
        }
      );

    const [seachQuery,setSearchQuery]= useState('')
    const [agentList, setAgentList] = useState([])
    const [editData, setEditData]=useState({});
    const [modalName, setModalName]= useState('')
    return (
        <div>

        <CustomNavbarV3 pageName="MANAGE AGENT PAYMENT RETURN" searchFunction={(query) => setSearchQuery(query)} />
        <ManageAgentTable agentList={agentList} onClickEdit={(value)=>{setEditData(value),setModalName('edit')}}/>

        {modalName === 'edit' ? <EditManageAgentTable setModalName={(value)=>setModalName(value)} />:''}
    </div>
    )
}

export default Main;