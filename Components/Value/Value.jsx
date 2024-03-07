import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../src/utils/accordion'

const Value = () => {
  return (
 <section className="v-wrapper">

  <div className="innerWidth paddings flexCenter v-container">
    <div className="v-left">
      <div className="image-container">
        <img src="value.png" alt="" />
      </div>
    </div>

    <div className="flexColStart v-right">
      <span className='orangeText'>Our Value</span>
      <span className='primaryText'>Value We Give To You</span>
      <span className='secondaryText'>We Are always happy to help by providing the best services for you
        <br/>
        we believe a good place to live can make your life better
      </span>
      <Accordion
      className='Accordion'
      allowMultipleExpanded = {false}
      preExpanded={[0]}
      >
data.map((item, i) =>(
  return(
<AccordionItem className='AccordionItem'>
<AccordionItemHeading>
  
</AccordionItemHeading>
</AccordionItem>
  )
))
      </Accordion>
    </div>
  </div>
 </section>
  )
}

export default Value
