import { Main } from "./MainPage.moduls/Main.module";
import { PurpleSection } from "./MainPage.moduls/PurpleSection.module";
import { SMSsections } from "./MainPage.moduls/SMS.sections.module";
import { Integrations } from "./MainPage.moduls/Integrations.module";
import { WhatsNew } from "./MainPage.moduls/WhatsNew.module";
import { OurCustomers } from "./MainPage.moduls/OurCustomers.module";

const MainPage = () => {
    return (
        <>
        <Main/>
        <PurpleSection/>
        <SMSsections/>
        <Integrations/>
        <WhatsNew/>
        <OurCustomers/>
        </>
    )
}
export default MainPage;