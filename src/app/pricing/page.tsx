import { ChoosePlan } from "../components/layout/pricingModuls/choosePlan";
import { Questions } from "../components/layout/pricingModuls/questionsModule";
import { PreFooter } from "../components/ui/Pre-Footer";

export default function Pricing(){
    return (
        <>
          <ChoosePlan/>
          <Questions/>
          <PreFooter bg={'bg-bg-Purple'}/>
        </>
    )
}