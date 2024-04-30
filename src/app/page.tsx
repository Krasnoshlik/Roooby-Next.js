import { Main } from "./components/pagesModules/mainPageModuls/mainModule";
import { PurpleSection } from "./components/pagesModules/mainPageModuls/purpleSectionModule";
import { SMSsections } from "./components/pagesModules/mainPageModuls/smsSectionsModule";
import { Integrations } from "./components/pagesModules/mainPageModuls/integrationsModule";
import { WhatsNew } from "./components/pagesModules/mainPageModuls/whatsNewModule";
import { OurCustomers } from "./components/pagesModules/mainPageModuls/ourCustomersModule";
import { PreFooter } from "./components/Pre-Footer";

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