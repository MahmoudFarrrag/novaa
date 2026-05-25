import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [

  // {
  //   id: "avatars",
  //   title: "Trips",
  //   translate: "Trips",
  //   type: "collapsible",
  //   icon: "users",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "users",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "users-add", 
  //     },
  //   ],
  // },

 
      {
        id: "anmar-home-details",
        title: "Home Details",
        translate: "MENU.ANMAR.HOME_DETAILS",
        type: "collapsible",
        icon: "info",
        children: [
          { id: "anmar-home-details-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/home-details" },
          // { id: "anmar-home-details-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/home-details/add" }
        ]
      },
      {
        id: "anmar-home-about",
        title: "Home About",
        translate: "MENU.ANMAR.HOME_ABOUT",
        type: "collapsible",
        icon: "home",
        children: [
          { id: "anmar-home-about-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/home-about" },
          // { id: "anmar-home-about-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/home-about/add" }
        ]
      },
      {
        id: "anmar-home-services",
        title: "Home Services",
        translate: "MENU.ANMAR.HOME_SERVICES",
        type: "collapsible",
        icon: "settings",
        children: [
          { id: "anmar-home-services-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/home-services" },
          // { id: "anmar-home-services-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/home-services/add" }
        ]
      },
      {
        id: "anmar-home-work",
        title: "Home Work",
        translate: "MENU.ANMAR.HOME_WORK",
        type: "collapsible",
        icon: "briefcase",
        children: [
          { id: "anmar-home-work-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/home-work" },
          // { id: "anmar-home-work-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/home-work/add" }
        ]
      },
      {
        id: "anmar-home-clients",
        title: "Home Clients",
        translate: "MENU.ANMAR.HOME_CLIENTS",
        type: "collapsible",
        icon: "users",
        children: [
          { id: "anmar-home-clients-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/home-clients" },
          // { id: "anmar-home-clients-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/home-clients/add" }
        ]
      },
      {
        id: "anmar-home-partners",
        title: "Home Partners",
        translate: "MENU.ANMAR.HOME_PARTNERS",
        type: "collapsible",
        icon: "link",
        children: [
          { id: "anmar-home-partners-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/home-partners" },
          // { id: "anmar-home-partners-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/home-partners/add" }
        ]
      },
      {
        id: "anmar-about-dates",
        title: "About Dates",
        translate: "MENU.ANMAR.ABOUT_DATES",
        type: "collapsible",
        icon: "calendar",
        children: [
          { id: "anmar-about-dates-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/about-dates" },
          // { id: "anmar-about-dates-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/about-dates/add" }
        ]
      },
      {
        id: "anmar-about-vision",
        title: "About Vision",
        translate: "MENU.ANMAR.ABOUT_VISION",
        type: "collapsible",
        icon: "eye",
        children: [
          { id: "anmar-about-vision-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/about-vision" },
          // { id: "anmar-about-vision-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/about-vision/add" }
        ]
      },
      {
        id: "anmar-about-value",
        title: "About Value",
        translate: "MENU.ANMAR.ABOUT_VALUE",
        type: "collapsible",
        icon: "star",
        children: [
          { id: "anmar-about-value-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/about-value" },
          // { id: "anmar-about-value-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/about-value/add" }
        ]
      },
      {
        id: "anmar-about-team",
        title: "About Team",
        translate: "MENU.ANMAR.ABOUT_TEAM",
        type: "collapsible",
        icon: "user-check",
        children: [
          { id: "anmar-about-team-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/about-team" },
          // { id: "anmar-about-team-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/about-team/add" }
        ]
      },
      {
        id: "anmar-services-steps",
        title: "Services Steps",
        translate: "MENU.ANMAR.SERVICES_STEPS",
        type: "collapsible",
        icon: "list",
        children: [
          { id: "anmar-services-steps-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/services-steps" },
          // { id: "anmar-services-steps-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/services-steps/add" }
        ]
      },
      {
        id: "anmar-contact-messages",
        title: "Contact Messages",
        translate: "MENU.ANMAR.CONTACT_MESSAGES",
        type: "collapsible",
        icon: "mail",
        children: [
          { id: "anmar-contact-messages-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/contact-messages" }
        ]
      },
      {
        id: "anmar-blog",
        title: "Blog",
        translate: "MENU.ANMAR.BLOG",
        type: "collapsible",
        icon: "file-text",
        children: [
          { id: "anmar-blog-list", title: "List", translate: "MENU.ANMAR.LIST", type: "item", icon: "list", url: "anmar/blog" },
          // { id: "anmar-blog-add", title: "Add", translate: "MENU.ANMAR.ADD", type: "item", icon: "plus", url: "anmar/blog/add" }
        ]
      }

   
  // {
  //   id: "avatars",
  //   title: "Ads",
  //   translate:  "MENU.DASHBOARD.ads",
  //   type: "collapsible" ,
  //   icon: "image", 
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "ads",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "add-ads",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Counselors",
  //   translate:  "MENU.DASHBOARD.counselors",
  //   type: "collapsible",
  //   icon: "package",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "Stores",
  //       type: "item",
  //       icon: "circle",
  //       url: "counselors",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "add-counselors",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Stores Offers",
  //   translate:  "MENU.DASHBOARD.stores_offers",
  //   type: "collapsible",
  //   icon: "dollar-sign",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "Vouchers",
  //       type: "item",
  //       icon: "circle",
  //       url: "StoresOffers-Vouchers",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "StoresOffers-add",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Cancelation Reason",
  //   translate:  "MENU.DASHBOARD.cancelation_reason",
  //   type: "collapsible",
  //   icon: "tablet",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "CancelationReasons",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "CancelationReasons-add",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Companies",
  //   translate:  "MENU.DASHBOARD.companies",
  //   type: "collapsible",
  //   icon: "hexagon",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "Companies",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "Companies-add",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Consulting",
  //   translate:  "MENU.DASHBOARD.consulting",
  //   type: "collapsible",
  //   icon: "credit-card",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "Consulting",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "Consulting-add",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Categories",
  //   translate:  "MENU.DASHBOARD.categories",
  //   type: "collapsible",
  //   icon: "percent",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "Categories",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "Categories-add",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Services",
  //   translate:  "MENU.DASHBOARD.services",
  //   type: "collapsible",
  //   icon: "map-pin",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "Services",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "Services-add",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Tags",
  //   translate:  "MENU.DASHBOARD.tags",
  //   type: "collapsible",
  //   icon: "video",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "Tags",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "Tags-add",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Articles",
  //   translate:  "MENU.DASHBOARD.articles",
  //   type: "collapsible",
  //   icon: "upload",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "Articles",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "Articles-add",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Offers",
  //   translate: "MENU.DASHBOARD.offers",
  //   type: "collapsible",
  //   icon: "settings",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "Offers",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "Offers-add",
  //     },
  //   ],
  // },
  // {
  //   id: "avatars",
  //   title: "Plant Cards",
  //   translate:  "MENU.DASHBOARD.plantcards",
  //   type: "collapsible",
  //   icon: "flag",
  //   children: [
  //     {
  //       id: "avatars-list",
  //       title: "List",
  //       translate: "MENU.DASHBOARD.list",
  //       type: "item",
  //       icon: "circle",
  //       url: "planetCards",
  //     },
  //     {
  //       id: "avatars-add",
  //       title: "Add",
  //       translate: "MENU.DASHBOARD.add",
  //       type: "item",
  //       icon: "circle",
  //       url: "planetCards-add",
  //     },
  //   ],
  // },
 
  // {
  //   id: "settings",
  //   title: "Settings",
  //   translate: "MENU.DASHBOARD.Settings",
  //   type: "collapsible", // Allows the menu to be clickable and expandable
  //   icon: "help-circle",
  //   children: [
  //     {
  //       id: "show-details",
  //       title: "Show Details",
  //       translate: "MENU.DASHBOARD.ShowDetails",
  //       type: "item",
  //       icon: "circle",
  //       url: "settings",
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Terms & Conditions",
  //       translate: "MENU.DASHBOARD.TermsAndConditions",
  //       type: "collapsible", // Expandable item with children
  //       icon: "lock",
  //       children: [
  //         {
  //           id: "terms-show-details",
  //           title: "Show Details",
  //           translate: "MENU.DASHBOARD.ShowDetails",
  //           type: "item",
  //           icon: "circle",
  //           url: "terms-conditions",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "About",
  //       translate: "MENU.DASHBOARD.About",
  //       type: "collapsible", // Expandable item with children
  //       icon: "file-text",
  //       children: [
  //         {
  //           id: "terms-show-details",
  //           title: "Show Details",
  //           translate: "MENU.DASHBOARD.ShowDetails",
  //           type: "item",
  //           icon: "circle",
  //           url: "about",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Notifications",
  //       translate: "MENU.DASHBOARD.Notifications",
  //       type: "collapsible", // Expandable item with children
  //       icon: "shuffle",
  //       children: [
  //         {
  //           id: "terms-show-details",
  //           title: "Show Details",
  //           translate: "MENU.DASHBOARD.ShowDetails",
  //           type: "item",
  //           icon: "circle",
  //           url: "Notifications",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Currencies",
  //       translate: "MENU.DASHBOARD.Currencies",
  //       type: "collapsible", // Expandable item with children
  //       icon: "package",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "currencies",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "curriences-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Countries",
  //       translate: "MENU.DASHBOARD.Countries",
  //       type: "collapsible", // Expandable item with children
  //       icon: "gift",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "countries",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "countries-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Cities",
  //       translate: "MENU.DASHBOARD.Cities",
  //       type: "collapsible", // Expandable item with children
  //       icon: "grid",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "cities",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "cities-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Language.plans",
  //       translate: "MENU.DASHBOARD.plans",
  //       type: "collapsible", // Expandable item with children
  //       icon: "calendar",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "plans",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "languagePlans-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Open Screens",
  //       translate: "MENU.DASHBOARD.OpenScreens",
  //       type: "collapsible", // Expandable item with children
  //       icon: "video",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "open-screen",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "openScreens-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Language.light",
  //       translate: "MENU.DASHBOARD.light",
  //       type: "collapsible", // Expandable item with children
  //       icon: "list",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "light",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "languageLight-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Ganatak community",
  //       translate: "MENU.DASHBOARD.GanatakCommunity",
  //       type: "collapsible", // Expandable item with children
  //       icon: "help-circle",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "ganatak",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "ganatakCommunity-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "language.root",
  //       translate: "MENU.DASHBOARD.root",
  //       type: "collapsible", // Expandable item with children
  //       icon: "paperclip",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "root",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "languageRoot-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "language.seed",
  //       translate: "MENU.DASHBOARD.seed",
  //       type: "collapsible", // Expandable item with children
  //       icon: "check-square",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "seed",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "languageSeed-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "language.soil",
  //       translate: "MENU.DASHBOARD.soil",
  //       type: "collapsible", // Expandable item with children
  //       icon: "file-text",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "soil",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "languageSoil-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "language.stem",
  //       translate: "MENU.DASHBOARD.stem",
  //       type: "collapsible", // Expandable item with children
  //       icon: "bookmark",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "stem",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "languageStem-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Paperform",
  //       translate: "MENU.DASHBOARD.Paperform",
  //       type: "collapsible", // Expandable item with children
  //       icon: "book",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "paperform",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "paperForm-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Sizes",
  //       translate: "MENU.DASHBOARD.Sizes",
  //       type: "collapsible", // Expandable item with children
  //       icon: "book-open",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "sizes",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "sizes-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Language.counselorspayment",
  //       translate: "MENU.DASHBOARD.counselorspayment",
  //       type: "collapsible", // Expandable item with children
  //       icon: "bar-chart-2",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "counselorPayment",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "languageConsulers-add",
  //         },
  //       ],
  //     },
  //     {
  //       id: "terms-and-conditions",
  //       title: "Sliders",
  //       translate: "MENU.DASHBOARD.Sliders",
  //       type: "collapsible", // Expandable item with children
  //       icon: "sliders",
  //       children: [
  //         {
  //           id: "avatars-list",
  //           title: "List",
  //           translate: "MENU.DASHBOARD.list",
  //           type: "item",
  //           icon: "circle",
  //           url: "sliders",
  //         },
  //         {
  //           id: "avatars-add",
  //           title: "Add",
  //           translate: "MENU.DASHBOARD.add",
  //           type: "item",
  //           icon: "circle",
  //           url: "sliders-add",
  //         },
  //       ],
  //     },


  //   ],
  // },
 


    
]
