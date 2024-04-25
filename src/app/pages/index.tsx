import { Main } from "../components/Pages.modules/MainPage.moduls/Main.module";
import { PurpleSection } from "../components/Pages.modules/MainPage.moduls/PurpleSection.module";
import { SMSsections } from "../components/Pages.modules/MainPage.moduls/SMS.sections.module";
import { Integrations } from "../components/Pages.modules/MainPage.moduls/Integrations.module";
import { WhatsNew } from "../components/Pages.modules/MainPage.moduls/WhatsNew.module";
import { OurCustomers } from "../components/Pages.modules/MainPage.moduls/OurCustomers.module";
import { PreFooter } from "../components/Pre-Footer";

export default function MainPage(){
    return (
        <>
        <Main/>
        <PurpleSection/>
        <SMSsections/>
        <Integrations/>
        <WhatsNew/>
        <OurCustomers/>
        <PreFooter bg={'bg-bg-Green'}/>
        </>
    )
}