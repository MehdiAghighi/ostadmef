import React from "react";

import "./footer.style.scss";
import FooterLinks from "../footer-links/footer-links.component";
import {
   TwitterButton,
   InstagramButton,
   TelegramButton,
   FacebookButton,
   AparatButton,
} from "../social-icon/social-icon.component";

function Footer(props) {
   return (
     <div className="pt-10 pb-4 bg-gray-100 mt-32">
       <div className="container mx-auto">
         <footer>
           <div className="flex flex-row">
             <div className="hidden sm:block lg:ml-8 xl:ml-16">
               <h6 className=" font-bold text-4xl leading-loose">لــــینوم</h6>
             </div>
             <FooterLinks />
             <div className="flex flex-row flex-wrap justify-center w-2/12 sm:w-2/12">
               <img
                 src="https://cdn.zarinpal.com/badges/trustLogo/1.svg"
                 alt="زرین‌پال"
               />
             </div>
           </div>
           <h5 className="mt-10 text-xs md:text-base">
             خیابان مطهری، پلاک ۹۴، شتاب‌دهنده‌ی تریگ‌آپ
           </h5>
           <div
             className="w-full rounded bg-gray-300 my-5"
             style={{
               height: 2,
             }}
           ></div>
           <div className="flex flex-row w-full justify-center items-center">
             <InstagramButton />
             <TelegramButton />
             <FacebookButton />
             {/* <AparatButton /> */}
           </div>
         </footer>
       </div>
       <div className="hidden bg-orange-400 bg-red-400 bg-blue-400 bg-pink-400 bg-purple-400 bg-yellow-400 bg-green-400 bg-gray-400 bg-teal-400 bg-indigo-400 border-orange-400 border-red-400 border-blue-400 border-pink-400 border-purple-400 border-yellow-400 border-green-400 border-gray-400 border-teal-400 border-indigo-400"></div>
     </div>
   )
}

export default Footer;
