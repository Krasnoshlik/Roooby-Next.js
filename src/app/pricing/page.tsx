import { ChoosePlan } from "../components/Pages.modules/Pricing.moduls/ChoosePlan";
import { Questions } from "../components/Pages.modules/Pricing.moduls/Questions.module";
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