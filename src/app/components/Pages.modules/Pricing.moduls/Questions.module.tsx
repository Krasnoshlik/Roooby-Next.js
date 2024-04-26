"use client";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AddIcon from '@mui/icons-material/Add';

export const Questions = () => {

  const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }));

  return (
    <div className=" bg-white">
      <div className=" max-w-projContainer m-auto pt-28 pb-44 flex flex-col">
        <h2 className=" font-bold text-6xl leading-12">
          Frequently asked <br /> questions
        </h2>
        <div className=" flex flex-col pt-10 w-10/12 self-end">

          <div className=" border-t border-gray-300 pt-4 pb-4 flex flex-col">
            <Accordion className=" border-none">
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h2 className=" text-3xl font-medium leading-10"> How Does Roooby CRM Compare To The Competition? </h2>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" py-4 text-lg">
                  <p>
                    Rooby CRM offers the most affordable, comprehensive platform
                    to manage the entire customer journey, from generating
                    leads, to closing deals and supporting your customers. With
                    a full suite of CRM, sales enablement, marketing automation,
                    and help desk/customer support capabilities, it’s all you
                    need to manage the entire customer lifecycle. Most of our
                    competitors offer one or two of these functions as separate
                    products, leaving you with the headache of integrating them
                    and increasing the overall price point.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className=" border-t border-gray-300 pt-4 pb-4 flex flex-col">
            <Accordion className=" border-none">
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h2 className=" text-3xl font-medium leading-10">Can I Change Plans Or Cancel My Subscription At Any Time?</h2>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" py-4 text-lg">
                  <p>
                    Rooby CRM offers the most affordable, comprehensive platform
                    to manage the entire customer journey, from generating
                    leads, to closing deals and supporting your customers. With
                    a full suite of CRM, sales enablement, marketing automation,
                    and help desk/customer support capabilities, it’s all you
                    need to manage the entire customer lifecycle. Most of our
                    competitors offer one or two of these functions as separate
                    products, leaving you with the headache of integrating them
                    and increasing the overall price point.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className=" border-t border-gray-300 pt-4 pb-4 flex flex-col">
            <Accordion className=" border-none">
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h2 className=" text-3xl font-medium leading-10"> How Secure Is My Data With Roooby CRM?</h2>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" py-4 text-lg">
                  <p>
                    Rooby CRM offers the most affordable, comprehensive platform
                    to manage the entire customer journey, from generating
                    leads, to closing deals and supporting your customers. With
                    a full suite of CRM, sales enablement, marketing automation,
                    and help desk/customer support capabilities, it’s all you
                    need to manage the entire customer lifecycle. Most of our
                    competitors offer one or two of these functions as separate
                    products, leaving you with the headache of integrating them
                    and increasing the overall price point.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className=" border-t border-gray-300 pt-4 pb-4 flex flex-col">
            <Accordion className=" border-none">
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h2 className=" text-3xl font-medium leading-10"> What Is The Uptime Guarantee?</h2>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" py-4 text-lg">
                  <p>
                    Rooby CRM offers the most affordable, comprehensive platform
                    to manage the entire customer journey, from generating
                    leads, to closing deals and supporting your customers. With
                    a full suite of CRM, sales enablement, marketing automation,
                    and help desk/customer support capabilities, it’s all you
                    need to manage the entire customer lifecycle. Most of our
                    competitors offer one or two of these functions as separate
                    products, leaving you with the headache of integrating them
                    and increasing the overall price point.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className=" border-t border-gray-300 pt-4 pb-4 flex flex-col">
            <Accordion className=" border-none">
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h2 className=" text-3xl font-medium leading-10">How Can I Add More Emails To My Account?</h2>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" py-4 text-lg">
                  <p>
                    Rooby CRM offers the most affordable, comprehensive platform
                    to manage the entire customer journey, from generating
                    leads, to closing deals and supporting your customers. With
                    a full suite of CRM, sales enablement, marketing automation,
                    and help desk/customer support capabilities, it’s all you
                    need to manage the entire customer lifecycle. Most of our
                    competitors offer one or two of these functions as separate
                    products, leaving you with the headache of integrating them
                    and increasing the overall price point.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>

        </div>
      </div>
      
    </div>
  );
};
