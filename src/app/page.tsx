import { Main } from "./components/layout/mainPageModuls/mainModule";
import { PurpleSection } from "./components/layout/mainPageModuls/purpleSectionModule";
import { SMSsections } from "./components/layout/mainPageModuls/smsSectionsModule";
import { Integrations } from "./components/layout/mainPageModuls/integrationsModule";
import { WhatsNew } from "./components/layout/mainPageModuls/whatsNewModule";
import { OurCustomers } from "./components/layout/mainPageModuls/ourCustomersModule";
import { PreFooter } from "./components/ui/Pre-Footer";

export default function Home(){
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