import { ChoosePlan } from "../components/pagesModules/pricingModuls/choosePlan";
import { Questions } from "../components/pagesModules/pricingModuls/questionsModule";
import { PreFooter } from "../components/Pre-Footer";

export default function Pricing(){
    return (
        <>
          <ChoosePlan/>
          <Questions/>
          <PreFooter bg={'bg-bg-Purple'}/>
        </>
    )
}