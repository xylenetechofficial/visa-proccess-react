import React from 'react'
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../../../componenets/CoustomHeader'
import { BlueButton, GreenButton, RedButton, YellowButton } from '../../../componenets/CustomButton'
import { CustomRadioButton, } from '../../../componenets/RadioButton'
import { CustomCheckBox } from '../../../componenets/Checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../componenets/Table'
import { UnlabeledInput } from '../../../componenets/Input'


function Index() {
  return (
    <div>Dash board
      <Heading1 text='Custom' color='text-blue-600' />
      <Heading2 />
      <Heading3 />
      <Heading4 />
      <Heading5 />
      <Heading6 />
      <BlueButton />
      <GreenButton />
      <RedButton />
      <YellowButton />
      <Heading6 text='Responsive Example' />
      <CustomRadioButton onChange={(value: any) => {
        console.log(value);
      }}
        option={[{ name: "a", value: 1 },
        { name: "Option b", value: 2 },
        { name: "Option c", value: 3 },
        { name: "Option d", value: 4 },
        ]} />
      <Heading6 text='Inline Example' />
      <CustomRadioButton inlined={true} onChange={(value: any) => {
        console.log(value);
      }}
        option={[{ name: "Option a", value: 1 },
        { name: "Option b", value: 2 },
        { name: "Option c", value: 3 },
        { name: "Option d", value: 4 },




        ]} />
      <Heading6 text='Responsive Example' />
      <CustomCheckBox onChange={(value: any) => {
        console.log(value);
      }}
        option={[{ name: "Option a", value: 1 },
        { name: "Option b", value: 2 },
        { name: "Option c", value: 3 },
        { name: "Option d", value: 4 },
        ]} />
      <Heading6 text='Inline Example' />
      <CustomCheckBox inlined={true} onChange={(value: any) => {
        console.log(value);
      }}
        option={[{ name: "Option a", value: 1 },
        { name: "Option b", value: 2 },
        { name: "Option c", value: 3 },
        { name: "Option d", value: 4 },
        ]} />


      <div>
        table
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Product name</TableHeadCell>
              <TableHeadCell> Color</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
            </TableHeadRow>
          </TableHead>

          <TableBody>
          <TableRow>
             <TableCell>Apple MacBook Pro 17</TableCell>
             <TableCell> Silver</TableCell>
             <TableCell> Laptop</TableCell>
             <TableCell> $2999</TableCell>
            </TableRow> <TableRow>
             <TableCell>Apple MacBook Pro 17</TableCell>
             <TableCell> Silver</TableCell>
             <TableCell><div style={{color:"red"}}>Laptop</div> </TableCell>
             <TableCell> 
              <GreenButton />
              <GreenButton />
              </TableCell>
            </TableRow> <TableRow>
             <TableCell>Apple MacBook Pro 17</TableCell>
             <TableCell><UnlabeledInput value="gold" placeholder='input' type='text' onchange={(value)=>(console.log(value))}/></TableCell>
             <TableCell> <UnlabeledInput value="gold" placeholder='input' type='text' onchange={(value)=>(console.log(value))}/></TableCell>
             <TableCell> $2999</TableCell>
            </TableRow> <TableRow>
             <TableCell>Apple MacBook Pro 17</TableCell>
             <TableCell> Silver</TableCell>
             <TableCell> Laptop</TableCell>
             <TableCell> $2999</TableCell>
            </TableRow> <TableRow>
             <TableCell>Apple MacBook Pro 17</TableCell>
             <TableCell> Silver</TableCell>
             <TableCell> Laptop</TableCell>
             <TableCell> $2999</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </div>



    </div>

  )
}

export default Index