// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as styled from "styled-components";

// function Home() {
//   return (
//     <div id="__next">
//     <div className="w-full bg-gray-50">
//       <div className="bg-white" css="margin: 0 auto">
//         <div className="fixed left-0 right-0 z-30 mx-auto w-full bg-white" css="max-width: 1900px">
//           <header className="relative z-30 m-auto w-full">
//             <div className="w-full border-b-2 px-6 py-4 sm:px-8">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="mr-3 cursor-pointer p-1 md:hidden">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" css="max-width: 40px" className="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//                   </div>
//                   <div className="flex items-center">
//                     <a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 inline-block font-light" href="/">
//                       <img css="height: 30px" src="/assets/logo_black_pink.png" />
//                     </a>
//                   </div>
//                   <!-- <a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 antialiased font-inter tracking-wide uppercase text-anchor-sm text-nav-link dark:text-dark-nav-link hover:interactive-1 ease-in-out transition-all transition duration-150 ml-6 hidden md:block nav-link font-light" href="/d">Dashboard</a> -->
//                 </div>
//                 <div className="flex items-center justify-end">
//                   <!-- <div className="grid h-[28px] grid-cols-1 text-center sm:grid-cols-2 sm:divide-x sm:divide-line-1"><a className="antialiased font-inter tracking-wide uppercase text-anchor-sm text-nav-link dark:text-dark-nav-link hover:interactive-1 ease-in-out transition-all transition duration-150 hidden min-w-[70px] sm:block font-light" href="/auth">Login</a><a className="antialiased font-inter tracking-wide uppercase text-anchor-sm text-nav-link dark:text-dark-nav-link hover:interactive-1 ease-in-out transition-all transition duration-150 block min-w-[70px] sm:pl-4 font-light" href="/auth/register">Sign Up</a></div> -->
//                   <button id="metamask-button" onclick="window.demuseGlobal.connectwalletHandler()">Connect Metamask</button>
//                 </div>
//               </div>
//             </div>
//           </header>
//         </div>
//         <div className="mx-auto w-full pt-[58px]" css="max-width: 1900px">
//           <div css="min-height: calc(100vh - 420px)" className="w-full px-0">
//             <div className="index_indexPage__7N3cv">
//               <div className="content-portfolio-value-hero-unit_contentPortfolioValueHeroUnit__KqEWB">
//                 <main className="hero-wrapper relative flex items-center overflow-hidden pb-12 pt-8 md:h-[600px] md:pb-0 md:pt-0 2xl:h-[600px]">
//                   <section className="flex flex-col-reverse justify-between gap-4 md:flex-row">
//                     <div className="content-container mt-4 flex flex-1 items-center sm:mt-6 sm:max-w-[600px] md:mt-0 md:max-w-[500px]">
//                       <div>
//                         <h1 className="text-white" css="opacity: 1; line-height: 100%; transform: none">INVEST IN MUSIC</h1>
//                         <div css="opacity: 1; transform: none"><h2 className="pt-3 pb-4 pr-4 text-white sm:pt-6 sm:pb-8">Own a piece of your favorite songs and earn royalties for every stream.</h2></div>
//                         <div css="opacity: 1; transform: none">
//                           <div><a css="min-width: 175px" className="tracking-[0.4px] rounded-lg relative font-interregular font-regular disabled:cursor-default cursor-pointer disabled:pointer-events-none select-none ease-in-out transition-all transition duration-200 overflow-ellipsis whitespace-nowrap inline-block text-center uppercase bg-white border border-white text-contrast-high hover:text-contrast-high hover:opacity-80 px-6 py-4 text-button-sm" href="/auth/register">Sign Up</a></div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="image-container relative flex-1">
//                       <div className="main-card absolute" css="opacity: 1; transform: none">
//                         <div className="rounded-lg drop-shadow-xl transition duration-500 hover:drop-shadow-2xl md:mr-0 md:min-w-0">
//                           <div className="flex flex-col overflow-hidden rounded-lg">
//                             <div className="overflow-hidden">
//                               <div className="transform-gpu transition-all duration-500"><img src="https://images.us-east-1.aws.slicknode.com/847208970aae966484a367daa2ee215df3671122/664x664/palace-ui-royal-io/b508e129-24bc-49ea-83f3-ba02df0f2ded/58335e21-9375-4aeb-83be-972e5395c7a3.png" alt="So Far So Good" className="w-full" /></div>
//                             </div>
//                             <div className="hidden bg-white p-4 md:flex">
//                               <div className="flex min-w-[0px] flex-grow items-center">
//                                 <div>
//                                   <div className="flex h-[40px] w-[40px] items-center overflow-hidden rounded-full md:h-[50px] md:w-[50px]"><img className="mt-0 max-w-full" src="https://images.us-east-1.aws.slicknode.com/5a57459448aaab342ec12757c5a1ef5cede25fca/70x70/smart/palace-ui-royal-io/6ca34153-978e-4649-a51a-1b841eb328f8/eee84060-004b-45d9-aad3-b06e402d4a54.jpg" alt="The Chainsmokers" /></div>
//                                 </div>
//                                 <div className="min-w-[0px] px-4">
//                                   <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-inter text-body-lg antialiased font-semibold text-contrast-default" css="font-size: 17px">So Far So Good</h3>
//                                   <h3 className="whitespace-normal font-monolight text-metric-lg uppercase font-light text-contrast-default">The Chainsmokers</h3>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="portfolio-value absolute" css="opacity: 1; transform: none">
//                         <div className="box flex items-center rounded-3xl bg-[#7879F1] drop-shadow-xl transition duration-500">
//                           <div className="flex justify-between">
//                             <div>
//                               <h4 className="uppercase font-compressedsans text-heading-h3 antialiased font-light text-contrast-low-inverse">Portfolio Balance</h4>
//                               <h3 className="mt-2 text-white font-monolight text-metric-lg uppercase font-light current-color">$13,988.44</h3>
//                             </div>
//                             <div className="ml-4">
//                               <p className="text-right font-inter text-body-xs antialiased font-light text-contrast-low-inverse" css="line-height: 1.2">Last Month</p>
//                               <h4 className="mt-2 whitespace-nowrap rounded bg-[#9596FF] p-1 px-2 text-white md:mt-3 font-monolight text-metric-sm uppercase font-light current-color">+175.73 (0.33%)</h4>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="artist-card absolute" css="opacity: 1; transform: none">
//                         <div className="overflow-hidden rounded-lg drop-shadow-xl transition duration-500 hover:drop-shadow-2xl md:mr-0 md:min-w-0">
//                           <span css="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: relative; max-width: 100%"
//                             ><span css="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; max-width: 100%"><img css="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27664%27%20height=%27664%27/%3e" /></span
//                             ><img
//                               alt="Rare"
//                               src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcec3a0ecde5102f5e3d1c3e85467e7bf8b887d0b%2F664x664%2Fpalace-ui-royal-io%2Fcff2b4c7-ae88-4f35-a50f-2df01c0dfc63%2F51040e62-9c12-4bdc-bb0e-2003ace2ecfe.jpeg&amp;w=1920&amp;q=75"
//                               decoding="async"
//                               data-nimg="intrinsic"
//                               className="w-full rounded-lg"
//                               css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                               srcset="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcec3a0ecde5102f5e3d1c3e85467e7bf8b887d0b%2F664x664%2Fpalace-ui-royal-io%2Fcff2b4c7-ae88-4f35-a50f-2df01c0dfc63%2F51040e62-9c12-4bdc-bb0e-2003ace2ecfe.jpeg&amp;w=750&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcec3a0ecde5102f5e3d1c3e85467e7bf8b887d0b%2F664x664%2Fpalace-ui-royal-io%2Fcff2b4c7-ae88-4f35-a50f-2df01c0dfc63%2F51040e62-9c12-4bdc-bb0e-2003ace2ecfe.jpeg&amp;w=1920&amp;q=75 2x" /><noscript
//                               ><img
//                                 alt="Rare"
//                                 srcset="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcec3a0ecde5102f5e3d1c3e85467e7bf8b887d0b%2F664x664%2Fpalace-ui-royal-io%2Fcff2b4c7-ae88-4f35-a50f-2df01c0dfc63%2F51040e62-9c12-4bdc-bb0e-2003ace2ecfe.jpeg&amp;w=750&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcec3a0ecde5102f5e3d1c3e85467e7bf8b887d0b%2F664x664%2Fpalace-ui-royal-io%2Fcff2b4c7-ae88-4f35-a50f-2df01c0dfc63%2F51040e62-9c12-4bdc-bb0e-2003ace2ecfe.jpeg&amp;w=1920&amp;q=75 2x"
//                                 src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcec3a0ecde5102f5e3d1c3e85467e7bf8b887d0b%2F664x664%2Fpalace-ui-royal-io%2Fcff2b4c7-ae88-4f35-a50f-2df01c0dfc63%2F51040e62-9c12-4bdc-bb0e-2003ace2ecfe.jpeg&amp;w=1920&amp;q=75"
//                                 decoding="async"
//                                 data-nimg="intrinsic"
//                                 css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                 className="w-full rounded-lg"
//                                 loading="lazy" /></noscript
//                           ></span>
//                         </div>
//                       </div>
//                       <div className="supporting-image absolute left-[9%] bottom-[5%]" css="opacity: 1; transform: none"><img src="https://images.us-east-1.aws.slicknode.com/08a7272574be1dfe08cc16d73932fcc74c6ffd22/palace-ui-royal-io/6fa7dca4-f836-428b-95ef-44c88086386e/9c2c0e57-8f81-4976-a6ef-8bae5d4ddb15.svg" /></div>
//                     </div>
//                   </section>
//                 </main>
//               </div>
//               <main className="content-edition-list_contentEditionList__BvlV_ content-edition-list overflow-hidden border-b pt-16">
//                 <section>
//                   <h4 className="label-2-custom mb-8 uppercase">_Recent Releases</h4>
//                   <div className="-mx-8 px-8" css="margin: 0 -32px">
//                     <div className="mb-12 flex snap-x snap-mandatory overflow-auto whitespace-nowrap p-0 pb-12 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:whitespace-normal md:pb-0 lg:gap-9">
//                       <div className="mr-4 min-w-[90%] snap-center snap-always p-0 sm:min-w-[60%] md:mr-0 md:min-w-0">
//                         <div className="min-w-[90%] rounded-lg drop-shadow-xl transition duration-500 hover:drop-shadow-2xl sm:min-w-[60%] md:mr-0 md:min-w-0" css="transition: all 0.2s ease">
//                           <a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 font-light" href="/editions/diplo-dontforgetmylove"
//                             ><div className="flex flex-col overflow-hidden rounded-lg">
//                               <div className="overflow-hidden">
//                                 <div className="transform-gpu transition-all duration-500"><img loading="lazy" src="https://images.us-east-1.aws.slicknode.com/ac39a6fdfa7ea60408eb5c34ef2faa57b029f919/664x664/palace-ui-royal-io/30132ada-6bd7-4f6c-a491-178b12853010/f925227d-a04d-4087-b1b4-17727f4c3051.png" alt="Don't Forget My Love" className="w-full" css="transform: none" /></div>
//                               </div>
//                               <div className="flex bg-white p-4">
//                                 <div className="flex min-w-[0px] flex-grow items-center">
//                                   <div>
//                                     <div className="flex h-[50px] w-[50px] items-center overflow-hidden rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
//                                       <span css="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: relative; max-width: 100%"
//                                         ><span css="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; max-width: 100%"><img css="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" /></span
//                                         ><img
//                                           alt="Diplo"
//                                           src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fc5dce501539ae00353fe0dabff6bc3bce1e46c4a%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F6b7ee615-8417-4104-9b42-8d8335f9ae88%2Fb7d598d5-4b51-4cae-b6c6-d8f5dfcc1910.jpg&amp;w=128&amp;q=75"
//                                           decoding="async"
//                                           data-nimg="intrinsic"
//                                           className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
//                                           css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                           srcset="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fc5dce501539ae00353fe0dabff6bc3bce1e46c4a%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F6b7ee615-8417-4104-9b42-8d8335f9ae88%2Fb7d598d5-4b51-4cae-b6c6-d8f5dfcc1910.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fc5dce501539ae00353fe0dabff6bc3bce1e46c4a%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F6b7ee615-8417-4104-9b42-8d8335f9ae88%2Fb7d598d5-4b51-4cae-b6c6-d8f5dfcc1910.jpg&amp;w=128&amp;q=75 2x" /><noscript
//                                           ><img
//                                             alt="Diplo"
//                                             srcset="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fc5dce501539ae00353fe0dabff6bc3bce1e46c4a%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F6b7ee615-8417-4104-9b42-8d8335f9ae88%2Fb7d598d5-4b51-4cae-b6c6-d8f5dfcc1910.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fc5dce501539ae00353fe0dabff6bc3bce1e46c4a%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F6b7ee615-8417-4104-9b42-8d8335f9ae88%2Fb7d598d5-4b51-4cae-b6c6-d8f5dfcc1910.jpg&amp;w=128&amp;q=75 2x"
//                                             src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fc5dce501539ae00353fe0dabff6bc3bce1e46c4a%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F6b7ee615-8417-4104-9b42-8d8335f9ae88%2Fb7d598d5-4b51-4cae-b6c6-d8f5dfcc1910.jpg&amp;w=128&amp;q=75"
//                                             decoding="async"
//                                             data-nimg="intrinsic"
//                                             css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                             className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
//                                             loading="lazy" /></noscript
//                                       ></span>
//                                     </div>
//                                   </div>
//                                   <div className="min-w-[0px] px-4">
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-inter text-body-lg antialiased font-semibold text-contrast-default" css="font-size: 18px">Don't Forget My Love</h3>
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-monolight text-metric-lg uppercase font-light text-contrast-default">
//                                       Diplo<!-- -->
//                                       • <span className="whitespace-normal font-monolight text-metric-lg uppercase font-light text-contrast-low">Single</span>
//                                     </h3>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div></a
//                           >
//                         </div>
//                       </div>
//                       <div className="mr-4 min-w-[90%] snap-center snap-always p-0 sm:min-w-[60%] md:mr-0 md:min-w-0">
//                         <div className="min-w-[90%] rounded-lg drop-shadow-xl transition duration-500 hover:drop-shadow-2xl sm:min-w-[60%] md:mr-0 md:min-w-0" css="transition: all 0.2s ease">
//                           <a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 font-light" href="/editions/Nas-Rare"
//                             ><div className="flex flex-col overflow-hidden rounded-lg">
//                               <div className="overflow-hidden">
//                                 <div className="transform-gpu transition-all duration-500"><img loading="lazy" src="https://images.us-east-1.aws.slicknode.com/cec3a0ecde5102f5e3d1c3e85467e7bf8b887d0b/664x664/palace-ui-royal-io/cff2b4c7-ae88-4f35-a50f-2df01c0dfc63/51040e62-9c12-4bdc-bb0e-2003ace2ecfe.jpeg" alt="Rare" className="w-full" css="transform: none" /></div>
//                               </div>
//                               <div className="flex bg-white p-4">
//                                 <div className="flex min-w-[0px] flex-grow items-center">
//                                   <div>
//                                     <div className="flex h-[50px] w-[50px] items-center overflow-hidden rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
//                                       <span css="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: relative; max-width: 100%"
//                                         ><span css="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; max-width: 100%"><img css="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" /></span
//                                         ><img alt="Nas" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                           ><img
//                                             alt="Nas"
//                                             srcset="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fd9008a7c4b692b9ba2587dd985abc0c11f518a07%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F1cf0073a-e3c3-45ed-ad25-fb1e2412f264%2F395ba3a0-0cfa-4a12-9602-6f91d3522429.jpeg&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fd9008a7c4b692b9ba2587dd985abc0c11f518a07%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F1cf0073a-e3c3-45ed-ad25-fb1e2412f264%2F395ba3a0-0cfa-4a12-9602-6f91d3522429.jpeg&amp;w=128&amp;q=75 2x"
//                                             src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fd9008a7c4b692b9ba2587dd985abc0c11f518a07%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F1cf0073a-e3c3-45ed-ad25-fb1e2412f264%2F395ba3a0-0cfa-4a12-9602-6f91d3522429.jpeg&amp;w=128&amp;q=75"
//                                             decoding="async"
//                                             data-nimg="intrinsic"
//                                             css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                             className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
//                                             loading="lazy" /></noscript
//                                       ></span>
//                                     </div>
//                                   </div>
//                                   <div className="min-w-[0px] px-4">
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-inter text-body-lg antialiased font-semibold text-contrast-default" css="font-size: 18px">Rare</h3>
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-monolight text-metric-lg uppercase font-light text-contrast-default">
//                                       Nas<!-- -->
//                                       • <span className="whitespace-normal font-monolight text-metric-lg uppercase font-light text-contrast-low">Single</span>
//                                     </h3>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div></a
//                           >
//                         </div>
//                       </div>
//                       <div className="mr-4 min-w-[90%] snap-center snap-always p-0 sm:min-w-[60%] md:mr-0 md:min-w-0">
//                         <div className="min-w-[90%] rounded-lg drop-shadow-xl transition duration-500 hover:drop-shadow-2xl sm:min-w-[60%] md:mr-0 md:min-w-0" css="transition: all 0.2s ease">
//                           <a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 font-light" href="/editions/thechainsmokers-sofarsogood"
//                             ><div className="flex flex-col overflow-hidden rounded-lg">
//                               <div className="overflow-hidden">
//                                 <div className="transform-gpu transition-all duration-500"><img loading="lazy" src="https://images.us-east-1.aws.slicknode.com/847208970aae966484a367daa2ee215df3671122/664x664/palace-ui-royal-io/b508e129-24bc-49ea-83f3-ba02df0f2ded/58335e21-9375-4aeb-83be-972e5395c7a3.png" alt="So Far So Good" className="w-full" css="transform: none" /></div>
//                               </div>
//                               <div className="flex bg-white p-4">
//                                 <div className="flex min-w-[0px] flex-grow items-center">
//                                   <div>
//                                     <div className="flex h-[50px] w-[50px] items-center overflow-hidden rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
//                                       <span css="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: relative; max-width: 100%"
//                                         ><span css="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; max-width: 100%"><img css="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" /></span
//                                         ><img alt="The Chainsmokers" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                           ><img
//                                             alt="The Chainsmokers"
//                                             srcset="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F5a57459448aaab342ec12757c5a1ef5cede25fca%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F6ca34153-978e-4649-a51a-1b841eb328f8%2Feee84060-004b-45d9-aad3-b06e402d4a54.jpg&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F5a57459448aaab342ec12757c5a1ef5cede25fca%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F6ca34153-978e-4649-a51a-1b841eb328f8%2Feee84060-004b-45d9-aad3-b06e402d4a54.jpg&amp;w=128&amp;q=75 2x"
//                                             src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F5a57459448aaab342ec12757c5a1ef5cede25fca%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F6ca34153-978e-4649-a51a-1b841eb328f8%2Feee84060-004b-45d9-aad3-b06e402d4a54.jpg&amp;w=128&amp;q=75"
//                                             decoding="async"
//                                             data-nimg="intrinsic"
//                                             css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                             className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
//                                             loading="lazy" /></noscript
//                                       ></span>
//                                     </div>
//                                   </div>
//                                   <div className="min-w-[0px] px-4">
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-inter text-body-lg antialiased font-semibold text-contrast-default" css="font-size: 18px">So Far So Good</h3>
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-monolight text-metric-lg uppercase font-light text-contrast-default">
//                                       The Chainsmokers<!-- -->
//                                       • <span className="whitespace-normal font-monolight text-metric-lg uppercase font-light text-contrast-low">Album</span>
//                                     </h3>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div></a
//                           >
//                         </div>
//                       </div>
//                       <div className="mr-4 min-w-[90%] snap-center snap-always p-0 sm:min-w-[60%] md:mr-0 md:min-w-0">
//                         <div className="min-w-[90%] rounded-lg drop-shadow-xl transition duration-500 hover:drop-shadow-2xl sm:min-w-[60%] md:mr-0 md:min-w-0" css="transition: all 0.2s ease">
//                           <a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 font-light" href="/editions/royceda59-caterpillar"
//                             ><div className="flex flex-col overflow-hidden rounded-lg">
//                               <div className="overflow-hidden">
//                                 <div className="transform-gpu transition-all duration-500"><img loading="lazy" src="https://images.us-east-1.aws.slicknode.com/a7dc01d41077c35a8337295eda90d6fba48c6158/664x664/palace-ui-royal-io/75f98512-fb87-4eca-9b5f-257bc7771fc3/8b01b4fd-f082-4599-b473-07041b1a51c2.jpg" alt="Caterpillar feat. Eminem and King Green" className="w-full" css="transform: scale(1.04) translateZ(0px)" /></div>
//                               </div>
//                               <div className="flex bg-white p-4">
//                                 <div className="flex min-w-[0px] flex-grow items-center">
//                                   <div>
//                                     <div className="flex h-[50px] w-[50px] items-center overflow-hidden rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
//                                       <span css="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: relative; max-width: 100%"
//                                         ><span css="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; max-width: 100%"><img css="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" /></span
//                                         ><img alt="Royce Da 5'9&quot;" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                           ><img
//                                             alt='Royce Da 5&#x27;9"'
//                                             srcset="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F66c36ed10ac704d6e8011014fe5b06252ae05ca3%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F0f880e5e-d4b1-48f5-984c-a64401128850%2Fb6ea2a8a-f827-4c4f-9c77-f0ec2bcb36d2.png&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F66c36ed10ac704d6e8011014fe5b06252ae05ca3%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F0f880e5e-d4b1-48f5-984c-a64401128850%2Fb6ea2a8a-f827-4c4f-9c77-f0ec2bcb36d2.png&amp;w=128&amp;q=75 2x"
//                                             src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F66c36ed10ac704d6e8011014fe5b06252ae05ca3%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F0f880e5e-d4b1-48f5-984c-a64401128850%2Fb6ea2a8a-f827-4c4f-9c77-f0ec2bcb36d2.png&amp;w=128&amp;q=75"
//                                             decoding="async"
//                                             data-nimg="intrinsic"
//                                             css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                             className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
//                                             loading="lazy" /></noscript
//                                       ></span>
//                                     </div>
//                                   </div>
//                                   <div className="min-w-[0px] px-4">
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-inter text-body-lg antialiased font-semibold text-contrast-default" css="font-size: 18px">Caterpillar feat. Eminem and King Green</h3>
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-monolight text-metric-lg uppercase font-light text-contrast-default">
//                                       Royce Da 5'9"<!-- -->
//                                       • <span className="whitespace-normal font-monolight text-metric-lg uppercase font-light text-contrast-low">Single</span>
//                                     </h3>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div></a
//                           >
//                         </div>
//                       </div>
//                       <div className="mr-4 min-w-[90%] snap-center snap-always p-0 sm:min-w-[60%] md:mr-0 md:min-w-0">
//                         <div className="min-w-[90%] rounded-lg drop-shadow-xl transition duration-500 hover:drop-shadow-2xl sm:min-w-[60%] md:mr-0 md:min-w-0" css="transition: all 0.2s ease">
//                           <a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 font-light" href="/editions/verite-hes-not-you"
//                             ><div className="flex flex-col overflow-hidden rounded-lg">
//                               <div className="overflow-hidden">
//                                 <div className="transform-gpu transition-all duration-500"><img loading="lazy" src="https://images.us-east-1.aws.slicknode.com/1ab065c57dc2cd539d983489a193f9baf64f1798/664x664/palace-ui-royal-io/788560d3-975b-4e13-a416-75e28701bf9c/6cc952c3-aa47-4d55-bcbc-9ab9709191f4.jpeg" alt="He’s Not You" className="w-full" css="transform: scale(1.04) translateZ(0px)" /></div>
//                               </div>
//                               <div className="flex bg-white p-4">
//                                 <div className="flex min-w-[0px] flex-grow items-center">
//                                   <div>
//                                     <div className="flex h-[50px] w-[50px] items-center overflow-hidden rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
//                                       <span css="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: relative; max-width: 100%"
//                                         ><span css="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; max-width: 100%"><img css="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" /></span
//                                         ><img alt="Vérité" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                           ><img
//                                             alt="Vérité"
//                                             srcset="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Ff80ca41b1617dfa62e737b29c3b71891f9ed5cdf%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F16d0f23f-a3c1-4f6f-92c3-805046bcf2b8%2F7b38ec27-e2f8-491b-8d1b-5c9b08373519.jpeg&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Ff80ca41b1617dfa62e737b29c3b71891f9ed5cdf%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F16d0f23f-a3c1-4f6f-92c3-805046bcf2b8%2F7b38ec27-e2f8-491b-8d1b-5c9b08373519.jpeg&amp;w=128&amp;q=75 2x"
//                                             src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Ff80ca41b1617dfa62e737b29c3b71891f9ed5cdf%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F16d0f23f-a3c1-4f6f-92c3-805046bcf2b8%2F7b38ec27-e2f8-491b-8d1b-5c9b08373519.jpeg&amp;w=128&amp;q=75"
//                                             decoding="async"
//                                             data-nimg="intrinsic"
//                                             css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                             className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
//                                             loading="lazy" /></noscript
//                                       ></span>
//                                     </div>
//                                   </div>
//                                   <div className="min-w-[0px] px-4">
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-inter text-body-lg antialiased font-semibold text-contrast-default" css="font-size: 18px">He’s Not You</h3>
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-monolight text-metric-lg uppercase font-light text-contrast-default">
//                                       Vérité<!-- -->
//                                       • <span className="whitespace-normal font-monolight text-metric-lg uppercase font-light text-contrast-low">Single</span>
//                                     </h3>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div></a
//                           >
//                         </div>
//                       </div>
//                       <div className="mr-4 min-w-[90%] snap-center snap-always p-0 sm:min-w-[60%] md:mr-0 md:min-w-0">
//                         <div className="min-w-[90%] rounded-lg drop-shadow-xl transition duration-500 hover:drop-shadow-2xl sm:min-w-[60%] md:mr-0 md:min-w-0" css="transition: all 0.2s ease">
//                           <a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 font-light" href="/editions/worst-case"
//                             ><div className="flex flex-col overflow-hidden rounded-lg">
//                               <div className="overflow-hidden">
//                                 <div className="transform-gpu transition-all duration-500"><img loading="lazy" src="https://images.us-east-1.aws.slicknode.com/de2c3aca91faf57b0b45ee3dded9c121e7bc1756/664x664/palace-ui-royal-io/8e174c81-4ed4-444f-a76f-76d6aa241b98/07bd6473-a34f-4fa6-b736-2e3c54b6f75e.jpeg" alt="Worst Case" className="w-full" css="transform: scale(1.04) translateZ(0px)" /></div>
//                               </div>
//                               <div className="flex bg-white p-4">
//                                 <div className="flex min-w-[0px] flex-grow items-center">
//                                   <div>
//                                     <div className="flex h-[50px] w-[50px] items-center overflow-hidden rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]">
//                                       <span css="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: relative; max-width: 100%"
//                                         ><span css="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; max-width: 100%"><img css="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" /></span
//                                         ><img alt="Justin Blau" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                           ><img
//                                             alt="Justin Blau"
//                                             srcset="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F7902f0932ac6de5969ca338fa211fddd53b2cbdf%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F69ff3964-3a28-4156-aa90-277bda951985%2F857e17e5-a23c-48bb-9427-5de34793459d.jpeg&amp;w=64&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F7902f0932ac6de5969ca338fa211fddd53b2cbdf%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F69ff3964-3a28-4156-aa90-277bda951985%2F857e17e5-a23c-48bb-9427-5de34793459d.jpeg&amp;w=128&amp;q=75 2x"
//                                             src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F7902f0932ac6de5969ca338fa211fddd53b2cbdf%2F70x70%2Fsmart%2Fpalace-ui-royal-io%2F69ff3964-3a28-4156-aa90-277bda951985%2F857e17e5-a23c-48bb-9427-5de34793459d.jpeg&amp;w=128&amp;q=75"
//                                             decoding="async"
//                                             data-nimg="intrinsic"
//                                             css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                             className="mt-0 h-[50px] w-[50px] max-w-full rounded-full md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"
//                                             loading="lazy" /></noscript
//                                       ></span>
//                                     </div>
//                                   </div>
//                                   <div className="min-w-[0px] px-4">
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-inter text-body-lg antialiased font-semibold text-contrast-default" css="font-size: 18px">Worst Case</h3>
//                                     <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-monolight text-metric-lg uppercase font-light text-contrast-default">
//                                       Justin Blau<!-- -->
//                                       • <span className="whitespace-normal font-monolight text-metric-lg uppercase font-light text-contrast-low">Single</span>
//                                     </h3>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div></a
//                           >
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mx-auto mb-8 hidden justify-center md:flex md:pb-12"><button className="tracking-[0.4px] rounded-lg relative font-interregular font-regular disabled:cursor-default cursor-pointer disabled:pointer-events-none select-none ease-in-out transition-all transition duration-200 overflow-ellipsis whitespace-nowrap uppercase border border-surface-2 bg-surface-2 hover:bg-surface-0 hover:text-contrast-max-inverse text-contrast-high-inverse disabled:border-surface-2 disabled:opacity-30 disabled:text-contrast-min-inverse px-6 py-3 text-button-sm">Show More</button></div>
//                   </div>
//                 </section>
//               </main>
//               <main className="md:pt-18 pb-8 pt-16 md:pb-24">
//                 <section className="flex flex-col"><h2 className="label-12-custom max-w-[400px] font-bold md:max-w-[850px]">Never miss a drop</h2></section>
//                 <section className="flex flex-col">
//                   <div className="flex flex-col justify-between md:flex-row md:items-center md:py-4">
//                     <h3 className="heading-2-custom mt-4 mb-6 max-w-[600px] pr-12 md:mb-0 md:mt-0"><p>Exciting artists are sharing ownership on DeMuse. Sign up to get notified about the latest releases.</p></h3>
//                     <a className="tracking-[0.4px] rounded-lg relative font-interregular font-regular disabled:cursor-default cursor-pointer disabled:pointer-events-none select-none ease-in-out transition-all transition duration-200 overflow-ellipsis whitespace-nowrap block w-full text-center md:max-w-[250px] uppercase border border-interactive-1 bg-interactive-1 hover:text-contrast-high-inverse hover:opacity-80 text-contrast-high-inverse disabled:border-base-2 disabled:bg-base-1 disabled:text-base-2 px-6 py-4 text-button-sm" href="https://royal.io/auth/register">CREATE ACCOUNT</a>
//                   </div>
//                 </section>
//               </main>
//               <main css="background: #f7f7f7" className="pb-12 pt-16 md:pb-12 md:pt-16">
//                 <section className="flex flex-col">
//                   <div><h2 className="label-12-custom">Imagine a world where artists and fans own music together</h2></div>
//                 </section>
//               </main>
//               <main css="background: #f7f7f7" className="pb-16 md:pb-24">
//                 <section>
//                   <div className="w-full grid-cols-3 md:grid md:gap-6 lg:gap-9">
//                     <div className="relative mb-12 flex flex-col overflow-hidden md:mb-0 md:block md:items-center">
//                       <div className="relative flex items-center justify-center md:w-full">
//                         <div className="overflow-hidden rounded-xl">
//                           <div css="transform: scale(1.3) rotate(15deg) translateZ(0)"><img src="https://images.us-east-1.aws.slicknode.com/152cc02ff3fb6d1205442b34f99100181953564b/756x600/palace-ui-royal-io/6fcfd628-794d-46ef-bdfb-793ba4283caa/37f2b378-b8d8-4fa2-824c-1dc70daf1490.jpeg" className="w-full" width="600" height="400" css="transform: scale(1.05) translateZ(0px)" /></div>
//                         </div>
//                       </div>
//                       <h3 className="heading-3-custom mt-6 w-full uppercase">Own a piece of a song or album</h3>
//                       <h3 className="body-lg-custom ] w-full max-w-[90%] pt-3 md:max-w-none md:pr-2"><p>Music revenue is expected to double by 2030. For the first time ever, you can participate in ownership by investing in streaming rights.</p></h3>
//                     </div>
//                     <div className="relative mb-12 flex flex-col overflow-hidden md:mb-0 md:block md:items-center">
//                       <div className="relative flex items-center justify-center md:w-full">
//                         <div className="overflow-hidden rounded-xl">
//                           <div css="transform: scale(1.3) rotate(15deg) translateZ(0)"><img src="https://images.us-east-1.aws.slicknode.com/f0113fc78dc96d9f4ac28e234d88ecab708442f4/756x600/palace-ui-royal-io/5dc6a613-0ff8-4f97-b08d-4e0bddf493d7/96136dae-2528-4a84-9636-ca4a7aaceb6a.jpeg" className="w-full" width="600" height="400" css="transform: scale(1.05) translateZ(0px)" /></div>
//                         </div>
//                       </div>
//                       <h3 className="heading-3-custom mt-6 w-full uppercase">Earn royalties alongside artists</h3>
//                       <h3 className="body-lg-custom ] w-full max-w-[90%] pt-3 md:max-w-none md:pr-2"><p>Partner with artists you believe in on DeMuse. You’ll share in their success, earn royalties as the music streams, and win together.</p></h3>
//                     </div>
//                     <div className="relative mb-12 flex flex-col overflow-hidden md:mb-0 md:block md:items-center">
//                       <div className="relative flex items-center justify-center md:w-full">
//                         <div className="overflow-hidden rounded-xl">
//                           <div css="transform: scale(1.3) rotate(15deg) translateZ(0)"><img src="https://images.us-east-1.aws.slicknode.com/4bd6ae71bb9e479e4d102e35b0a04e257b856651/756x600/palace-ui-royal-io/5ad595b3-5a8f-469e-86dc-47ea10f02e73/5f2e0e70-9cc0-4210-92be-0a9348652e17.jpeg" className="w-full" width="600" height="400" css="transform: scale(1.05) translateZ(0px)" /></div>
//                         </div>
//                       </div>
//                       <h3 className="heading-3-custom mt-6 w-full uppercase">Unlock exclusive access and extras</h3>
//                       <h3 className="body-lg-custom ] w-full max-w-[90%] pt-3 md:max-w-none md:pr-2"><p>Join artist communities and get curated benefits like merch, private listening parties, meet &amp; greets, and more.</p></h3>
//                     </div>
//                   </div>
//                 </section>
//               </main>
//               <main className="relative bg-white pb-12 pt-16 md:pb-12 md:pt-24">
//                 <section className="relative z-10 flex flex-col">
//                   <div>
//                     <h4 className="label-2-custom mb-4 uppercase">_<!-- -->Artists</h4>
//                     <h3 className="label-12-custom">A new era of artist-fan connection</h3>
//                     <h3 className="heading-2-custom mt-4 mb-6"><p>Through collective ownership, artists have the opportunity to power their career, maintain control of their work, and connect with their biggest supporters.</p></h3>
//                   </div>
//                 </section>
//               </main>
//               <main className="">
//                 <section>
//                   <div className="relative">
//                     <div className="overflow-hidden rounded-lg shadow-xl">
//                       <video controls="" controlslist="nodownload" playsinline="" poster="https://images.us-east-1.aws.slicknode.com/939045dc4283976acdfe9dd106e2605fa0c52a4c/1156x/palace-ui-royal-io/c15f2a44-d69f-4591-9818-63d1b855406d/15fc20a7-0d9d-4159-9a0b-9538872d3f57.png" css="width: 100%; object-fit: cover"><source src="https://api.royal.io/assets/5794be0f-2601-473e-9fd7-6dd15316d046" type="video/mp4" /></video>
//                     </div>
//                   </div>
//                 </section>
//               </main>
//               <main className="md:pt-18 pb-8 pt-16 md:pb-24">
//                 <section className="flex flex-col"><h2 className="label-12-custom max-w-[400px] font-bold md:max-w-[850px]">Are you an artist?</h2></section>
//                 <section className="flex flex-col">
//                   <div className="flex flex-col justify-between md:flex-row md:items-center md:py-4">
//                     <h3 className="heading-2-custom mt-4 mb-6 max-w-[600px] pr-12 md:mb-0 md:mt-0"><p>We'd love to chat with you.</p></h3>
//                     <a className="tracking-[0.4px] rounded-lg relative font-interregular font-regular disabled:cursor-default cursor-pointer disabled:pointer-events-none select-none ease-in-out transition-all transition duration-200 overflow-ellipsis whitespace-nowrap block w-full text-center md:max-w-[250px] uppercase border border-interactive-1 bg-interactive-1 hover:text-contrast-high-inverse hover:opacity-80 text-contrast-high-inverse disabled:border-base-2 disabled:bg-base-1 disabled:text-base-2 px-6 py-4 text-button-sm" href="/artist-submission">Hit us up</a>
//                   </div>
//                 </section>
//               </main>
//               <div className="w-full bg-base-1 py-6">
//                 <div css="overflow: hidden">
//                   <div className="ticker_ticker__9Jcrk" css="animation-duration: 45s; display: flex">
//                     <div css="display: flex">
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                       <div><p className="font-monolight text-metric-sm uppercase font-light text-contrast-default" css="margin-right: 10px">Hear from artists ///</p></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative h-[420px] overflow-hidden md:h-[675px]">
//                 <div className="content-testimonial-section_contentTestimonialSection__M6w_g">
//                   <div className="slick-slider slick-initialized" dir="ltr">
//                     <div className="slick-list" css="height: 681px">
//                       <div className="slick-track" css="width: 10125px; opacity: 1; transform: translate3d(-1125px, 0px, 0px)">
//                         <div data-index="-1" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" css="width: 1125px">
//                           <div>
//                             <div tabindex="-1" css="width: 100%; display: inline-block">
//                               <div className="relative overflow-hidden">
//                                 <div className="relative h-[420px] bg-black md:h-[675px]">
//                                   <span css="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0"
//                                     ><img alt="BIG BOI" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fill" className="h-full w-full object-cover" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                       ><img
//                                         alt="BIG BOI"
//                                         sizes="100vw"
//                                         srcset="
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=640&amp;q=75   640w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=750&amp;q=75   750w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=828&amp;q=75   828w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=1080&amp;q=75 1080w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=1200&amp;q=75 1200w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=1920&amp;q=75 1920w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=2048&amp;q=75 2048w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=3840&amp;q=75 3840w
//                                         "
//                                         src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=3840&amp;q=75"
//                                         decoding="async"
//                                         data-nimg="fill"
//                                         css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                         className="h-full w-full object-cover"
//                                         loading="lazy" /></noscript
//                                   ></span>
//                                 </div>
//                                 <div className="absolute inset-0">
//                                   <main className="h-full">
//                                     <section className="flex h-full items-end">
//                                       <div>
//                                         <p className="mb-4 uppercase text-white font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased font-light current-color">BIG BOI</p>
//                                         <p className="label-3-custom max-w-[300px] pb-[42px] uppercase text-white md:max-w-[550px] md:pb-[142px] font-compressedsans text-heading-h4 antialiased font-light current-color">“THE MUSIC INDUSTRY NEEDS INNOVATION. I’M TEAMING UP WITH ROYAL SO FANS CAN INVEST IN MY MUSIC AND EARN ROYALTIES WITH ME.”</p>
//                                       </div>
//                                     </section>
//                                   </main>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-index="0" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" css="outline: none; width: 1125px">
//                           <div>
//                             <div tabindex="-1" css="width: 100%; display: inline-block">
//                               <div className="relative overflow-hidden">
//                                 <div className="relative h-[420px] bg-black md:h-[675px]">
//                                   <span css="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0"
//                                     ><img
//                                       alt="THE CHAINSMOKERS"
//                                       sizes="100vw"
//                                       srcset="
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=640&amp;q=75   640w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=750&amp;q=75   750w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=828&amp;q=75   828w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=1080&amp;q=75 1080w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=1200&amp;q=75 1200w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=1920&amp;q=75 1920w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=2048&amp;q=75 2048w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=3840&amp;q=75 3840w
//                                       "
//                                       src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=3840&amp;q=75"
//                                       decoding="async"
//                                       data-nimg="fill"
//                                       className="h-full w-full object-cover"
//                                       css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                   /></span>
//                                 </div>
//                                 <div className="absolute inset-0">
//                                   <main className="h-full">
//                                     <section className="flex h-full items-end">
//                                       <div>
//                                         <p className="mb-4 uppercase text-white font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased font-light current-color">THE CHAINSMOKERS</p>
//                                         <p className="label-3-custom max-w-[300px] pb-[42px] uppercase text-white md:max-w-[550px] md:pb-[142px] font-compressedsans text-heading-h4 antialiased font-light current-color">"ROYAL’S MODEL OF MODERNIZING THE WAY WE COLLECT AND SHARE MUSIC MADE PERFECT SENSE TO US AS MUSICIANS AND INVESTORS-WE HAD TO GET INVOLVED."</p>
//                                       </div>
//                                     </section>
//                                   </main>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-index="1" className="slick-slide" tabindex="-1" aria-hidden="true" css="outline: none; width: 1125px">
//                           <div>
//                             <div tabindex="-1" css="width: 100%; display: inline-block">
//                               <div className="relative overflow-hidden">
//                                 <div className="relative h-[420px] bg-black md:h-[675px]">
//                                   <span css="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0"
//                                     ><img alt="Nas" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fill" className="h-full w-full object-cover" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                       ><img
//                                         alt="Nas"
//                                         sizes="100vw"
//                                         srcset="
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=640&amp;q=75   640w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=750&amp;q=75   750w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=828&amp;q=75   828w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=1080&amp;q=75 1080w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=1200&amp;q=75 1200w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=1920&amp;q=75 1920w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=2048&amp;q=75 2048w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=3840&amp;q=75 3840w
//                                         "
//                                         src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=3840&amp;q=75"
//                                         decoding="async"
//                                         data-nimg="fill"
//                                         css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                         className="h-full w-full object-cover"
//                                         loading="lazy" /></noscript
//                                   ></span>
//                                 </div>
//                                 <div className="absolute inset-0">
//                                   <main className="h-full">
//                                     <section className="flex h-full items-end">
//                                       <div>
//                                         <p className="mb-4 uppercase text-white font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased font-light current-color">Nas</p>
//                                         <p className="label-3-custom max-w-[300px] pb-[42px] uppercase text-white md:max-w-[550px] md:pb-[142px] font-compressedsans text-heading-h4 antialiased font-light current-color">"I'm excited to partner with DeMuse so the world can connect with my music in a new way."</p>
//                                       </div>
//                                     </section>
//                                   </main>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-index="2" className="slick-slide" tabindex="-1" aria-hidden="true" css="outline: none; width: 1125px">
//                           <div>
//                             <div tabindex="-1" css="width: 100%; display: inline-block">
//                               <div className="relative overflow-hidden">
//                                 <div className="relative h-[420px] bg-black md:h-[675px]">
//                                   <span css="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0"
//                                     ><img alt="Vérité" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fill" className="h-full w-full object-cover" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                       ><img
//                                         alt="Vérité"
//                                         sizes="100vw"
//                                         srcset="
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=640&amp;q=75   640w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=750&amp;q=75   750w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=828&amp;q=75   828w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=1080&amp;q=75 1080w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=1200&amp;q=75 1200w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=1920&amp;q=75 1920w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=2048&amp;q=75 2048w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=3840&amp;q=75 3840w
//                                         "
//                                         src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=3840&amp;q=75"
//                                         decoding="async"
//                                         data-nimg="fill"
//                                         css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                         className="h-full w-full object-cover"
//                                         loading="lazy" /></noscript
//                                   ></span>
//                                 </div>
//                                 <div className="absolute inset-0">
//                                   <main className="h-full">
//                                     <section className="flex h-full items-end">
//                                       <div>
//                                         <p className="mb-4 uppercase text-white font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased font-light current-color">Vérité</p>
//                                         <p className="label-3-custom max-w-[300px] pb-[42px] uppercase text-white md:max-w-[550px] md:pb-[142px] font-compressedsans text-heading-h4 antialiased font-light current-color">“I REALLY BELIEVE FANS ARE THE FUTURE OF MUSIC AND TOGETHER WE CAN DO SOMETHING MASSIVE.”</p>
//                                       </div>
//                                     </section>
//                                   </main>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-index="3" className="slick-slide" tabindex="-1" aria-hidden="true" css="outline: none; width: 1125px">
//                           <div>
//                             <div tabindex="-1" css="width: 100%; display: inline-block">
//                               <div className="relative overflow-hidden">
//                                 <div className="relative h-[420px] bg-black md:h-[675px]">
//                                   <span css="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0"
//                                     ><img alt="BIG BOI" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fill" className="h-full w-full object-cover" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                       ><img
//                                         alt="BIG BOI"
//                                         sizes="100vw"
//                                         srcset="
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=640&amp;q=75   640w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=750&amp;q=75   750w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=828&amp;q=75   828w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=1080&amp;q=75 1080w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=1200&amp;q=75 1200w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=1920&amp;q=75 1920w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=2048&amp;q=75 2048w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=3840&amp;q=75 3840w
//                                         "
//                                         src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=3840&amp;q=75"
//                                         decoding="async"
//                                         data-nimg="fill"
//                                         css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                         className="h-full w-full object-cover"
//                                         loading="lazy" /></noscript
//                                   ></span>
//                                 </div>
//                                 <div className="absolute inset-0">
//                                   <main className="h-full">
//                                     <section className="flex h-full items-end">
//                                       <div>
//                                         <p className="mb-4 uppercase text-white font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased font-light current-color">BIG BOI</p>
//                                         <p className="label-3-custom max-w-[300px] pb-[42px] uppercase text-white md:max-w-[550px] md:pb-[142px] font-compressedsans text-heading-h4 antialiased font-light current-color">“THE MUSIC INDUSTRY NEEDS INNOVATION. I’M TEAMING UP WITH ROYAL SO FANS CAN INVEST IN MY MUSIC AND EARN ROYALTIES WITH ME.”</p>
//                                       </div>
//                                     </section>
//                                   </main>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-index="4" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" css="width: 1125px">
//                           <div>
//                             <div tabindex="-1" css="width: 100%; display: inline-block">
//                               <div className="relative overflow-hidden">
//                                 <div className="relative h-[420px] bg-black md:h-[675px]">
//                                   <span css="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0"
//                                     ><img
//                                       alt="THE CHAINSMOKERS"
//                                       sizes="100vw"
//                                       srcset="
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=640&amp;q=75   640w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=750&amp;q=75   750w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=828&amp;q=75   828w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=1080&amp;q=75 1080w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=1200&amp;q=75 1200w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=1920&amp;q=75 1920w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=2048&amp;q=75 2048w,
//                                         /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=3840&amp;q=75 3840w
//                                       "
//                                       src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fa571b5b7b543b623b80c0450e5afcb1de1e52c65%2F2000x%2Fpalace-ui-royal-io%2Fae69b662-b74c-402e-9546-479ab5e4b92f%2F2ce6907f-6b26-4779-82cf-a9ad616610e3.png&amp;w=3840&amp;q=75"
//                                       decoding="async"
//                                       data-nimg="fill"
//                                       className="h-full w-full object-cover"
//                                       css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                   /></span>
//                                 </div>
//                                 <div className="absolute inset-0">
//                                   <main className="h-full">
//                                     <section className="flex h-full items-end">
//                                       <div>
//                                         <p className="mb-4 uppercase text-white font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased font-light current-color">THE CHAINSMOKERS</p>
//                                         <p className="label-3-custom max-w-[300px] pb-[42px] uppercase text-white md:max-w-[550px] md:pb-[142px] font-compressedsans text-heading-h4 antialiased font-light current-color">"ROYAL’S MODEL OF MODERNIZING THE WAY WE COLLECT AND SHARE MUSIC MADE PERFECT SENSE TO US AS MUSICIANS AND INVESTORS-WE HAD TO GET INVOLVED."</p>
//                                       </div>
//                                     </section>
//                                   </main>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-index="5" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" css="width: 1125px">
//                           <div>
//                             <div tabindex="-1" css="width: 100%; display: inline-block">
//                               <div className="relative overflow-hidden">
//                                 <div className="relative h-[420px] bg-black md:h-[675px]">
//                                   <span css="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0"
//                                     ><img alt="Nas" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fill" className="h-full w-full object-cover" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                       ><img
//                                         alt="Nas"
//                                         sizes="100vw"
//                                         srcset="
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=640&amp;q=75   640w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=750&amp;q=75   750w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=828&amp;q=75   828w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=1080&amp;q=75 1080w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=1200&amp;q=75 1200w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=1920&amp;q=75 1920w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=2048&amp;q=75 2048w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=3840&amp;q=75 3840w
//                                         "
//                                         src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2Fcc11bd39158dd0245b14f1808919db4e3ab7b538%2F2000x%2Fpalace-ui-royal-io%2Fdd826ca4-94d4-4885-80bb-1a0c85a1901b%2Ff77aa88d-afa8-495f-b8dc-c3baa8b7fe62.jpg&amp;w=3840&amp;q=75"
//                                         decoding="async"
//                                         data-nimg="fill"
//                                         css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                         className="h-full w-full object-cover"
//                                         loading="lazy" /></noscript
//                                   ></span>
//                                 </div>
//                                 <div className="absolute inset-0">
//                                   <main className="h-full">
//                                     <section className="flex h-full items-end">
//                                       <div>
//                                         <p className="mb-4 uppercase text-white font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased font-light current-color">Nas</p>
//                                         <p className="label-3-custom max-w-[300px] pb-[42px] uppercase text-white md:max-w-[550px] md:pb-[142px] font-compressedsans text-heading-h4 antialiased font-light current-color">"I'm excited to partner with DeMuse so the world can connect with my music in a new way."</p>
//                                       </div>
//                                     </section>
//                                   </main>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-index="6" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" css="width: 1125px">
//                           <div>
//                             <div tabindex="-1" css="width: 100%; display: inline-block">
//                               <div className="relative overflow-hidden">
//                                 <div className="relative h-[420px] bg-black md:h-[675px]">
//                                   <span css="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0"
//                                     ><img alt="Vérité" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fill" className="h-full w-full object-cover" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                       ><img
//                                         alt="Vérité"
//                                         sizes="100vw"
//                                         srcset="
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=640&amp;q=75   640w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=750&amp;q=75   750w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=828&amp;q=75   828w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=1080&amp;q=75 1080w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=1200&amp;q=75 1200w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=1920&amp;q=75 1920w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=2048&amp;q=75 2048w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=3840&amp;q=75 3840w
//                                         "
//                                         src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F2c6e1575836f02af06b1ff636bda976aa257a458%2F2000x%2Fpalace-ui-royal-io%2Fcbd77b2b-503d-4ab2-a799-373fc73154aa%2F4dd8b986-ea1f-4353-b4c2-7a45c8656fe4.png&amp;w=3840&amp;q=75"
//                                         decoding="async"
//                                         data-nimg="fill"
//                                         css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                         className="h-full w-full object-cover"
//                                         loading="lazy" /></noscript
//                                   ></span>
//                                 </div>
//                                 <div className="absolute inset-0">
//                                   <main className="h-full">
//                                     <section className="flex h-full items-end">
//                                       <div>
//                                         <p className="mb-4 uppercase text-white font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased font-light current-color">Vérité</p>
//                                         <p className="label-3-custom max-w-[300px] pb-[42px] uppercase text-white md:max-w-[550px] md:pb-[142px] font-compressedsans text-heading-h4 antialiased font-light current-color">“I REALLY BELIEVE FANS ARE THE FUTURE OF MUSIC AND TOGETHER WE CAN DO SOMETHING MASSIVE.”</p>
//                                       </div>
//                                     </section>
//                                   </main>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-index="7" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" css="width: 1125px">
//                           <div>
//                             <div tabindex="-1" css="width: 100%; display: inline-block">
//                               <div className="relative overflow-hidden">
//                                 <div className="relative h-[420px] bg-black md:h-[675px]">
//                                   <span css="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0"
//                                     ><img alt="BIG BOI" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="fill" className="h-full w-full object-cover" css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%" /><noscript
//                                       ><img
//                                         alt="BIG BOI"
//                                         sizes="100vw"
//                                         srcset="
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=640&amp;q=75   640w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=750&amp;q=75   750w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=828&amp;q=75   828w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=1080&amp;q=75 1080w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=1200&amp;q=75 1200w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=1920&amp;q=75 1920w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=2048&amp;q=75 2048w,
//                                           /_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=3840&amp;q=75 3840w
//                                         "
//                                         src="/_next/image?url=https%3A%2F%2Fimages.us-east-1.aws.slicknode.com%2F0a00dcb15dc51c835df344dbbf3e6bd4c15d2106%2F2000x%2Fpalace-ui-royal-io%2F85c3128d-b786-443c-aa43-35d34be7cd8a%2F2c3b9fdf-2ffc-4ede-8e92-b447dc2206a9.png&amp;w=3840&amp;q=75"
//                                         decoding="async"
//                                         data-nimg="fill"
//                                         css="position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%"
//                                         className="h-full w-full object-cover"
//                                         loading="lazy" /></noscript
//                                   ></span>
//                                 </div>
//                                 <div className="absolute inset-0">
//                                   <main className="h-full">
//                                     <section className="flex h-full items-end">
//                                       <div>
//                                         <p className="mb-4 uppercase text-white font-compressedsans text-mobile-heading-h1 md:text-heading-h1 antialiased font-light current-color">BIG BOI</p>
//                                         <p className="label-3-custom max-w-[300px] pb-[42px] uppercase text-white md:max-w-[550px] md:pb-[142px] font-compressedsans text-heading-h4 antialiased font-light current-color">“THE MUSIC INDUSTRY NEEDS INNOVATION. I’M TEAMING UP WITH ROYAL SO FANS CAN INVEST IN MY MUSIC AND EARN ROYALTIES WITH ME.”</p>
//                                       </div>
//                                     </section>
//                                   </main>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <ul css="display: block" className="slick-dots">
//                       <li className="slick-active"><button>1</button></li>
//                       <li className=""><button>2</button></li>
//                       <li className=""><button>3</button></li>
//                       <li className=""><button>4</button></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <main className="bg-surface-1 pb-16 pt-16 md:pb-24 md:pt-24">
//                 <section className="flex flex-col">
//                   <h4 className="label-2-custom mb-4 uppercase text-line-0">_<!-- -->FAQ</h4>
//                   <h3 className="heading-1-custom mb-8 text-line-0 md:mb-8">Have questions? We got you.</h3>
//                   <div className="w-full max-w-[960px]">
//                     <div data-accordion-component="Accordion" className="accordion">
//                       <div data-accordion-component="AccordionItem" className="accordion__item">
//                         <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level="3">
//                           <div className="accordion__button" id="accordion__heading-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjE" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjE" role="button" tabindex="0" data-accordion-component="AccordionItemButton">
//                             <div className="flex w-full justify-between">
//                               <h3 className="label-1-custom-faq mr-4 flex items-center justify-between text-line-0">What is DeMuse?</h3>
//                               <div className="flex h-8 min-h-[2rem] w-8 min-w-[2rem] rotate-45 items-center justify-center rounded-full border border-white transition-transform">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="min-w-5 min-h-5 h-5 w-5" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjE" hidden="">
//                           <div className="body-lg-custom mt-4 text-heading-h5 text-line-0 md:max-w-2xl">
//                             <div className="prose prose-invert">
//                               <p>DeMuse is a marketplace that enables anyone to invest in music and earn royalties alongside artists. We believe the future of the music industry is one where fans and artists co-own music and participate in the financial upside together.</p>
//                               <p>We also believe in artists' freedom. DeMuse allows artists to retain independence and creative control as fans fuel their careers.</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div data-accordion-component="AccordionItem" className="accordion__item">
//                         <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level="3">
//                           <div className="accordion__button" id="accordion__heading-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjI" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjI" role="button" tabindex="0" data-accordion-component="AccordionItemButton">
//                             <div className="flex w-full justify-between">
//                               <h3 className="label-1-custom-faq mr-4 flex items-center justify-between text-line-0">When I buy music rights through DeMuse, what do I get?</h3>
//                               <div className="flex h-8 min-h-[2rem] w-8 min-w-[2rem] rotate-45 items-center justify-center rounded-full border border-white transition-transform">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="min-w-5 min-h-5 h-5 w-5" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjI" hidden="">
//                           <div className="body-lg-custom mt-4 text-heading-h5 text-line-0 md:max-w-2xl">
//                             <div className="prose prose-invert">
//                               <p>When you invest in songs or albums on DeMuse, you get a token representing a percentage of the music’s streaming rights, plus extras. You earn royalties alongside the artist and get paid when they do.</p>
//                               <p>Artists choose what percentage of the song's royalties to drop. They can also attach extras like fan experiences, exclusive tracks, merch, and more—it's all up to them.</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div data-accordion-component="AccordionItem" className="accordion__item">
//                         <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level="3">
//                           <div className="accordion__button" id="accordion__heading-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjM" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjM" role="button" tabindex="0" data-accordion-component="AccordionItemButton">
//                             <div className="flex w-full justify-between">
//                               <h3 className="label-1-custom-faq mr-4 flex items-center justify-between text-line-0">How do I buy a token during a drop?</h3>
//                               <div className="flex h-8 min-h-[2rem] w-8 min-w-[2rem] rotate-45 items-center justify-center rounded-full border border-white transition-transform">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="min-w-5 min-h-5 h-5 w-5" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjM" hidden="">
//                           <div className="body-lg-custom mt-4 text-heading-h5 text-line-0 md:max-w-2xl">
//                             <div className="prose prose-invert">
//                               <p>During a drop, you can buy a token through DeMuse’s website with a credit card, debit card, or crypto. Before you buy, you’ll be able to see the percentage of ownership per token tier, the extras attached, and information about pricing.</p>
//                               <p>If you get a token during a drop, it will appear on your DeMuse dashboard. Missed out on a drop? You can buy a token on secondary markets like OpenSea.</p>
//                               <p><a href="https://royal.io/auth/register">Create a free DeMuse account</a> to receive email notifications about upcoming drops. You can also follow us on social media to keep up with the latest releases.</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div data-accordion-component="AccordionItem" className="accordion__item">
//                         <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level="3">
//                           <div className="accordion__button" id="accordion__heading-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjQ" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjQ" role="button" tabindex="0" data-accordion-component="AccordionItemButton">
//                             <div className="flex w-full justify-between">
//                               <h3 className="label-1-custom-faq mr-4 flex items-center justify-between text-line-0">How do I claim streaming royalties?</h3>
//                               <div className="flex h-8 min-h-[2rem] w-8 min-w-[2rem] rotate-45 items-center justify-center rounded-full border border-white transition-transform">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="min-w-5 min-h-5 h-5 w-5" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjQ" hidden="">
//                           <div className="body-lg-custom mt-4 text-heading-h5 text-line-0 md:max-w-2xl">
//                             <div className="prose prose-invert">
//                               <p>Once you buy a token, your royalties start accruing as the song, EP, or album streams on platforms like Spotify and Apple Music.</p>
//                               <p>You get paid your portion of the royalties when the artist gets paid. The time to payout will vary depending on the artist—on average, payouts happen every 6 months—and we’ll notify you when royalties become available to claim.</p>
//                               <p>Once available, you’ll claim your royalties in your DeMuse dashboard by transferring funds to another crypto wallet (bank transfers coming soon!).</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div data-accordion-component="AccordionItem" className="accordion__item">
//                         <div data-accordion-component="AccordionItemHeading" role="heading" className="accordion__heading" aria-level="3">
//                           <div className="accordion__button" id="accordion__heading-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjU" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjU" role="button" tabindex="0" data-accordion-component="AccordionItemButton">
//                             <div className="flex w-full justify-between">
//                               <h3 className="label-1-custom-faq mr-4 flex items-center justify-between text-line-0">Can I sell my token?</h3>
//                               <div className="flex h-8 min-h-[2rem] w-8 min-w-[2rem] rotate-45 items-center justify-center rounded-full border border-white transition-transform">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="min-w-5 min-h-5 h-5 w-5" color="#fff"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div data-accordion-component="AccordionItemPanel" className="accordion__panel" id="accordion__panel-acc-Q29udGVudF9BY2NvcmRpb25JdGVtOjU" hidden="">
//                           <div className="body-lg-custom mt-4 text-heading-h5 text-line-0 md:max-w-2xl">
//                             <div className="prose prose-invert">
//                               <p>Yes, you can list your token for sale at any time on NFT exchanges such as <a href="http://opensea.io/royal-official?tab=created">OpenSea</a>.</p>
//                               <p>One exciting part of purchasing music rights is that these assets may appreciate—artist and song popularity, token demand, extras, and more can all play a role in secondary pricing.</p>
//                               <p>Once you sell your token, royalty payouts and unclaimed extras will go to the new token owner.</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="max-w-[200px]"><a target="_blank" rel="noopener noreferrer" className="tracking-[0.4px] rounded-lg relative font-interregular font-regular disabled:cursor-default cursor-pointer disabled:pointer-events-none select-none ease-in-out transition-all transition duration-200 overflow-ellipsis whitespace-nowrap mt-16 block uppercase bg-white border border-white text-contrast-high hover:text-contrast-high hover:opacity-80 px-6 py-4 text-button-sm" href="https://support.royal.io/hc/en-us">Visit our help center</a></div>
//                 </section>
//               </main>
//             </div>
//           </div>
//         </div>
//         <div css="max-width: 1900px; margin: 0 auto">
//           <footer className="w-full layout-footer_layoutFooter__A1W7M">
//             <div className="border-b-0 border-t-.5 border-line-0 px-8 py-8 font-normal dark">
//               <div className="flex flex-col md:flex-row">
//                 <div className="flex-1 md:pt-10">
//                   <svg className="royal-icon w-16" fill="none" viewBox="0 0 883 231">
//                     <path
//                       className="fill-current"
//                       d="M324.489 187.442v-68.921a33.084 33.084 0 012.795-16.616 33.082 33.082 0 0110.614-13.086 43.259 43.259 0 0130.424-7.21V40.372a52.34 52.34 0 00-26.675 7.21 38.716 38.716 0 00-17.158 20.762V43.256H287v144.186h37.489zm121.045 4.037a75.333 75.333 0 0054.257-21.957 75.342 75.342 0 0022.163-54.173 76.708 76.708 0 10-147.527 28.894 76.706 76.706 0 0071.18 47.236h-.073zm0-36.046a37.927 37.927 0 01-27.972-11.247 42.464 42.464 0 010-57.098 37.419 37.419 0 0128.045-11.534 38.067 38.067 0 0127.9 10.958 41.887 41.887 0 010 57.097 38.07 38.07 0 01-27.9 11.535l-.073.289zm94.443 75.265a72.1 72.1 0 0046.285-11.607 88.247 88.247 0 0029.847-41.886l52.484-133.95h-39.796l-31.793 89.901-37.705-89.9h-40.661l59.117 129.767a40.731 40.731 0 01-13.987 19.754 39.649 39.649 0 01-23.791 5.911v32.01zm195.447-39.075a56.594 56.594 0 0047.005-21.051v16.87h37.201V43.256h-37.201V60.27a56.596 56.596 0 00-47.005-21.051 65.315 65.315 0 00-49.457 22.06 81.177 81.177 0 000 108.14 65.326 65.326 0 0049.457 22.06v.144zm7.209-35.469a38.727 38.727 0 01-28.837-11.247 40.442 40.442 0 01-11.247-29.414 39.869 39.869 0 0111.247-29.27 38.495 38.495 0 0128.837-11.39 38.932 38.932 0 0128.838 11.39 43.256 43.256 0 010 58.54 38.94 38.94 0 01-29.126 11.246l.288.145zM883 187.442V0h-37.2v187.442H883z"
//                     ></path>
//                     <path className="fill-current" fill-rule="evenodd" d="M183.542 44c1.043 0 2.074.224 3.021.656a7.212 7.212 0 012.468 1.848l49.108 57.235a7.113 7.113 0 011.861 4.793 7.117 7.117 0 01-1.861 4.794L134 222V44h49.542zM106 44.214V222L1.864 113.242A7.096 7.096 0 010 108.454c0-1.768.664-3.474 1.864-4.787l49.21-57.166a7.228 7.228 0 012.472-1.846A7.315 7.315 0 0156.574 44l49.426.214z" clip-rule="evenodd"></path>
//                   </svg>
//                 </div>
//                 <div className="flex-1 pt-10">
//                   <div className="grid content-start gap-2"><a target="_blank" className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm font-light" href="https://support.royal.io/hc/en-us">Help Center</a><a target="_blank" className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 block text-body-sm font-light" href="https://support.royal.io/hc/en-us/requests/new">Support</a></div>
//                 </div>
//                 <div className="flex-1 pt-10">
//                   <div className="grid content-start gap-2">
//                     <a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm font-light" href="/blog">Blog</a><a target="_blank" className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm font-light" href="https://twitter.com/join_royal">Twitter</a><a target="_blank" className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm font-light" href="https://www.facebook.com/royalmarketofficial">Facebook</a
//                     ><a target="_blank" className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm font-light" href="https://www.youtube.com/channel/UCY1Ro9e8fCaYnj2Eqzyjcbg">Youtube</a><a target="_blank" className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm font-light" href="https://www.tiktok.com/@join_royal">TikTok</a><a target="_blank" className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm font-light" href="https://www.instagram.com/join_royal">Instagram</a
//                     ><a target="_blank" className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm font-light" href="https://discord.gg/mASJakvuzh">Discord</a>
//                   </div>
//                 </div>
//                 <div className="flex-1 pt-10">
//                   <div className="grid content-start gap-2">
//                     <a target="_blank" className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm font-light" href="https://jobs.lever.co/DeMuse">Jobs</a><a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm font-light" href="/legal/privacy">Privacy</a><a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm hover:opacity-80 font-light" href="/legal/tos">Terms of Service</a
//                     ><a className="antialiased font-inter text-contrast-default hover:interactive-1 ease-in-out transition-all transition duration-150 text-body-sm hover:opacity-80 font-light" href="/legal/risks">Associated Risks</a>
//                   </div>
//                 </div>
//               </div>
//               <p className="mt-10 text-contrast-low font-inter text-body-sm antialiased font-light text-contrast-default">
//                 ©
//                 <!-- -->2022<!-- -->
//                 DeMuse Markets Inc.
//               </p>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//     <div className="z-tippy-top md:w-7/8 fixed bottom-0 left-0 right-0 mb-4 ml-2 mr-2 flex flex-col space-y-4 md:bottom-10 md:left-10 md:m-0 md:max-w-md"></div>
//     <!--/$-->
//   </div>
//   )
// }