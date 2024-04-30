import Image from "next/image";
import Google from "../../images/Trusted by/Google.svg";
import Atlassian from "../../images/Trusted by/Atlassian.svg";
import Cannon from "../../images/Trusted by/Canon.svg";
import Walmart from "../../images/Trusted by/Walmart.svg";
import Amazon from "../../images/Trusted by/Amazon.svg";

export const TrustedByCust = () => {
    return (
        <div className="flex gap-24 sm:mx-3 sm:gap-10 sm:flex-col max-w-projContainer m-auto ">
        <p className="font-medium">Trusted by 1,000+ customers</p>
        <div className="flex gap-14 flex-wrap sm:gap-7">
          <Image src={Google} alt="Google" height={24} />
          <Image src={Atlassian} alt="Atlassian" height={17} />
          <Image src={Cannon} alt="Cannon" height={17} />
          <Image src={Walmart} alt="Walmart" height={24} />
          <Image src={Amazon} alt="Amazon" height={24} />
        </div>
      </div>
    )
}