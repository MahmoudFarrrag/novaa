import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.DASHBOARD.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'sample',
    title: 'Sample',
    translate: 'MENU.DASHBOARD.SAMPLE',
    type: 'item',
    icon: 'file',
    url: 'sample'
  },
  {
    id: "avatars",
    title: "Avatars",
    translate: "MENU.Avatars",
    type: "collapsible",
    icon: "image",
    children: [
      {
        id: "avatars-list",
        title: "List",
        translate: "MENU.List",
        type: "item",
        icon: "circle",
        url: "settings/avatars",
      },
      {
        id: "avatars-add",
        title: "Add",
        translate: "MENU.Add",
        type: "item",
        icon: "circle",
        url: "settings/add-avatar",
      },
    ],
  },


  
    {
      id: 'users_section',
      title: 'Users',
      translate: 'MENU.USERS_SECTION',
      type: 'collapsible',
      icon: 'user',
      children: [
        {
          id: 'users_list',
          title: 'Users List',
          translate: 'MENU.USERS.LIST',
          type: 'item',
          icon: 'circle',
          url: 'users'
        },
        {
          id: 'add_user',
          title: 'Add User',
          translate: 'MENU.USERS.ADD',
          type: 'item',
          icon: 'circle',
          url: 'users/create'
        }
      ]
    },
    {
      id: 'products_list',
      title: 'Products',
      translate: 'MENU.PRODUCTS.Title',
      type: 'collapsible',
      icon: 'shopping-cart',
      children: [
        {
          id: 'products',
          title: 'Product List',
          translate: 'MENU.PRODUCTS.LIST',
          type: 'item',
          icon: 'circle',
          url: 'products'
        },
        {
          id: 'products_at_home',
          title: 'Products at Home',
          translate: 'MENU.PRODUCTS.AT_HOME',
          type: 'item',
          icon: 'circle',
          url: 'products-at-home'
        }
      ]
    },
    {
      id: 'counselors',
      title: 'Counselors',
      translate: 'MENU.COUNSELORS.Title',
      type: 'collapsible',
      icon: 'user',
      children: [
        {
          id: 'counselors_list',
          title: 'Counselors List',
          translate: 'MENU.COUNSELORS.LIST',
          type: 'item',
          icon: 'circle',
          url: 'counselors'
        },
        {
          id: 'add_counselor',
          title: 'Add Counselor',
          translate: 'MENU.COUNSELORS.ADD',
          type: 'item',
          icon: 'circle',
          url: 'counselors/create'
        }
      ]
    },
    {
      id: 'stores',
      title: 'Stores',
      translate: 'MENU.STORES.Title',
      type: 'collapsible',
      icon: 'shopping-cart',
      children: [
        {
          id: 'stores_list',
          title: 'Stores List',
          translate: 'MENU.STORES.LIST',
          type: 'item',
          icon: 'circle',
          url: 'stores'
        },
        {
          id: 'add_store',
          title: 'Add Store',
          translate: 'MENU.STORES.ADD',
          type: 'item',
          icon: 'circle',
          url: 'stores/create'
        }
      ]
    },
    {
      id: 'stores_offers',
      title: 'Store Offers',
      translate: 'MENU.STORES_OFFERS.Title',
      type: 'collapsible',
      icon: 'gift',
      children: [
        {
          id: 'stores_offers_list',
          title: 'Offers List',
          translate: 'MENU.STORES_OFFERS.LIST',
          type: 'item',
          icon: 'circle',
          url: 'storesOffers'
        }
      ]
    },
    {
      id: 'voucher',
      title: 'Voucher',
      translate: 'MENU.VOUCHER.Title',
      type: 'collapsible',
      icon: 'gift',
      children: [
        {
          id: 'voucher_type',
          title: 'Voucher Types',
          translate: 'MENU.VOUCHER.TYPE',
          type: 'item',
          icon: 'circle',
          url: 'voucher-type'
        },
        {
          id: 'voucher_list',
          title: 'Voucher List',
          translate: 'MENU.VOUCHER.LIST',
          type: 'item',
          icon: 'circle',
          url: 'voucher'
        }
      ]
    },
  
    {
      id: 'cancelation_reasons',
      title: 'Cancellation Reasons',
      translate: 'MENU.cancelation_reasons.Title',
      type: 'collapsible',
      icon: 'bookmark',
      children: [
        {
          id: 'reasons_list',
          title: 'Reason List',
          translate: 'MENU.cancelation_reasons.LIST',
          type: 'item',
          icon: 'circle',
          url: 'cancelation_reasons'
        },
        {
          id: 'add_reason',
          title: 'Add Reason',
          translate: 'MENU.cancelation_reasons.ADD',
          type: 'item',
          icon: 'circle',
          url: 'cancelation_reasons/create'
        }
      ]
    },
    {
      id: 'companies',
      title: 'Companies',
      translate: 'MENU.COMPANIES.Title',
      type: 'collapsible',
      icon: 'list',
      children: [
        {
          id: 'companies_list',
          title: 'Company List',
          translate: 'MENU.COMPANIES.LIST',
          type: 'item',
          icon: 'circle',
          url: 'companies'
        },
        {
          id: 'archived_companies',
          title: 'Archived Companies',
          translate: 'MENU.COMPANIES.ARCHIVED',
          type: 'item',
          icon: 'circle',
          url: 'arc-companies'
        },
        {
          id: 'add_company',
          title: 'Add Company',
          translate: 'MENU.COMPANIES.ADD',
          type: 'item',
          icon: 'circle',
          url: 'companies/create'
        }
      ]
    },
    {
      id: 'consulting',
      title: 'consulting',
      translate: 'MENU.consulting.Title',
      type: 'collapsible',
      icon: 'grid',
      children: [
        {
          id: 'consulting_list',
          title: 'Service List',
          translate: 'MENU.consulting.LIST',
          type: 'item',
          icon: 'circle',
          url: 'consulting'
        }
      ]
    },
    {
      id: 'SECTION',
      title: 'SECTION',
      translate: 'MENU.SECTION.Title',
      type: 'collapsible',
      icon: 'grid',
      children: [
        {
          id: 'SECTION_TYPES',
          title: 'Service TYPES',
          translate: 'MENU.SECTION.TYPES',
          type: 'item',
          icon: 'circle',
          url: 'SECTION/TYPES'
        },
        {
          id: 'SECTION_list',
          title: 'Service List',
          translate: 'MENU.SECTION.LIST',
          type: 'item',
          icon: 'circle',
          url: 'SECTION'
        },
        {
          id: 'add_service',
          title: 'Add Service',
          translate: 'MENU.SECTION.ADD',
          type: 'item',
          icon: 'circle',
          url: 'SECTION/create'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      translate: 'MENU.SERVICES.Title',
      type: 'collapsible',
      icon: 'grid',
      children: [
        {
          id: 'services_list',
          title: 'Service List',
          translate: 'MENU.SERVICES.LIST',
          type: 'item',
          icon: 'circle',
          url: 'services'
        },
        {
          id: 'add_service',
          title: 'Add Service',
          translate: 'MENU.SERVICES.ADD',
          type: 'item',
          icon: 'circle',
          url: 'services/create'
        }
      ]
    },
 
    {
      id: 'tags',
      title: 'Tags',
      translate: 'MENU.TAGS.Title',
      type: 'collapsible',
      icon: 'list',
      children: [
        {
          id: 'tags_list',
          title: 'Tags List',
          translate: 'MENU.TAGS.LIST',
          type: 'item',
          icon: 'circle',
          url: 'tags'
        },
        {
          id: 'add_tag',
          title: 'Add Tag',
          translate: 'MENU.TAGS.ADD',
          type: 'item',
          icon: 'circle',
          url: 'tags/create'
        }
      ]
    },
   {
      id: 'articles',
      title: 'Articles',
      translate: 'MENU.ARTICLES.Title',
      type: 'collapsible',
      icon: 'book-open',
      children: [
        {
          id: 'articles_list',
          title: 'Articles List',
          translate: 'MENU.ARTICLES.LIST',
          type: 'item',
          icon: 'circle',
          url: 'articles'
        },
        {
          id: 'mini_articles',
          title: 'Mini Articles',
          translate: 'MENU.ARTICLES.Plant_groups',
          type: 'item',
          icon: 'circle',
          url: 'Plant_groups/Articles'
        },
        {
          id: 'add_article',
          title: 'Add Article',
          translate: 'MENU.ARTICLES.ADD',
          type: 'item',
          icon: 'circle',
          url: 'Plant_groups/create'
        },
        {
          id: 'various_article',
          title: 'various Article',
          translate: 'MENU.ARTICLES.various',
          type: 'item',
          icon: 'circle',
          url: 'various'
        },
        {
          id: 'add_article',
          title: 'Add Article',
          translate: 'MENU.ARTICLES.ADD',
          type: 'item',
          icon: 'circle',
          url: 'various/create'
        },
      ]
    },
    {
      id: 'offers',
      title: 'offers',
      translate: 'MENU.offers.Title',
      type: 'collapsible',
      icon: 'list',
      children: [
        {
          id: 'offers_list',
          title: 'offers List',
          translate: 'MENU.offers.LIST',
          type: 'item',
          icon: 'circle',
          url: 'offers'
        },
        {
          id: 'add_offers',
          title: 'Add offers',
          translate: 'MENU.offers.ADD',
          type: 'item',
          icon: 'circle',
          url: 'offers/create'
        }
      ]
    },
    {
      id: "plantcards",
      title: "language.plantcards",
      translate: "MENU.PLANTCARDS.TITLE",
      type: "collapsible",
      icon: "book",
      children: [
        {
          id: "plantcards_list",
          title: "web.list",
          translate: "MENU.PLANTCARDS.LIST",
          type: "item",
          icon: "circle",
          url: "plantcards"
        },
        {
          id: "add_plantcard",
          title: "web.add",
          translate: "MENU.PLANTCARDS.ADD",
          type: "item",
          icon: "circle",
          url: "plantcards/create"
        },
        {
          id: "plantleaverscolor",
          title: "language.plantleaverscolor",
          translate: "MENU.PLANTCARDS.LEAVERSCOLOR.TITLE",
          type: "collapsible",
          icon: "edit",
          children: [
            {
              id: "plantleaverscolor_list",
              title: "web.list",
              translate: "MENU.PLANTCARDS.LEAVERSCOLOR.LIST",
              type: "item",
              icon: "circle",
              url: "plantleaverscolor"
            },
            {
              id: "add_plantleaverscolor",
              title: "web.add",
              translate: "MENU.PLANTCARDS.LEAVERSCOLOR.ADD",
              type: "item",
              icon: "circle",
              url: "plantleaverscolor/create"
            }
          ]
        },
        {
          id: "plantleaversform",
          title: "language.plantleaversform",
          translate: "MENU.PLANTCARDS.LEAVERSFORM.TITLE",
          type: "collapsible",
          icon: "codepen",
          children: [
            {
              id: "plantleaversform_list",
              title: "web.list",
              translate: "MENU.PLANTCARDS.LEAVERSFORM.LIST",
              type: "item",
              icon: "circle",
              url: "plantleaversform"
            },
            {
              id: "add_plantleaversform",
              title: "web.add",
              translate: "MENU.PLANTCARDS.LEAVERSFORM.ADD",
              type: "item",
              icon: "circle",
              url: "plantleaversform/create"
            }
          ]
        },
        {
          id: "flowerform",
          title: "language.flowerform",
          translate: "MENU.PLANTCARDS.FLOWERFORM.TITLE",
          type: "collapsible",
          icon: "command",
          children: [
            {
              id: "flowerform_list",
              title: "web.list",
              translate: "MENU.PLANTCARDS.FLOWERFORM.LIST",
              type: "item",
              icon: "circle",
              url: "flowerform"
            },
            {
              id: "add_flowerform",
              title: "web.add",
              translate: "MENU.PLANTCARDS.FLOWERFORM.ADD",
              type: "item",
              icon: "circle",
              url: "flowerform/create"
            }
          ]
        },
        {
          id: "flowercolor",
          title: "language.flowercolor",
          translate: "MENU.PLANTCARDS.FLOWERCOLOR.TITLE",
          type: "collapsible",
          icon: "disc",
          children: [
            {
              id: "flowercolor_list",
              title: "web.list",
              translate: "MENU.PLANTCARDS.FLOWERCOLOR.LIST",
              type: "item",
              icon: "circle",
              url: "flowercolor"
            },
            {
              id: "add_flowercolor",
              title: "web.add",
              translate: "MENU.PLANTCARDS.FLOWERCOLOR.ADD",
              type: "item",
              icon: "circle",
              url: "flowercolor/create"
            }
          ]
        }
      ]
    }
    
]
