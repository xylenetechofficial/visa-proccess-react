import React from 'react'
import { CardDiv, SubHeading2, SubHeadingSpan } from '../../../../componenets/CoustomHeader';
import { Divider, styled , Box} from '@mui/material';

const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));

const HeroPage = (props:any) => {
  console.log(props)
  const {outstanding_since_2015,payment_against_2015,balance_since_2015,payment_returned_to_agent,total_balance_outstanding,total_payment_received} =props.props;
  console.log(balance_since_2015)
  return (
    <CardHeader>
         <CardDiv>
  <SubHeading2 text="outstanding 2010 :" />
  <SubHeadingSpan text={outstanding_since_2015} />
  <Divider />
  <Divider />
  <SubHeading2 text="payment against 2010 :" />
  <SubHeadingSpan text={payment_against_2015} />
  <Divider />
  <Divider />
  <SubHeading2 text="balance outstanding 2010 :" />
  <SubHeadingSpan text={balance_since_2015} />
  <Divider />
  <Divider />
  </CardDiv>

    <CardDiv>
  <SubHeading2 text="outstanding since 2015 :" />
  <SubHeadingSpan text={outstanding_since_2015} />
  <Divider />
  <Divider />
  <SubHeading2 text="payment against 2015 :" />
  <SubHeadingSpan text={payment_against_2015} />
  <Divider />
  <Divider />
  <SubHeading2 text="balance since 2015 :" />
  <SubHeadingSpan text={balance_since_2015} />
  <Divider />
  <Divider />
</CardDiv>

<CardDiv>
  <SubHeading2 text="total payment received:" />
  <SubHeadingSpan text={total_payment_received} />
  <Divider />
  <Divider />
  <SubHeading2 text="total balance outstanding:" />
  <SubHeadingSpan text={total_balance_outstanding} />
  <Divider />
  <Divider />
  <SubHeading2 text="payment returned to agent:" />
  <SubHeadingSpan text={payment_returned_to_agent} />
  <Divider />
  <Divider />
</CardDiv>

<CardDiv>
  <SubHeading2 text="outstanding Payment" />
  <p></p>
  <Divider style={{ background: "red" }} />
  <Divider style={{ background: "red" }} />
  
  <Divider />
  <Divider />
  <SubHeading2 text=" cancel candidates :" />
  <SubHeadingSpan text={"36477"} />
  <Divider />
  <Divider />
  <SubHeading2 text=" reject candidates :" />
  <SubHeadingSpan text={"0"} />
  <Divider />
  <Divider />
  <SubHeading2 text=" flight candidates :" />
  <SubHeadingSpan text={"272360"} />
</CardDiv>     
    </CardHeader>
  )
}

export default HeroPage
