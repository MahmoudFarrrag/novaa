import { AnmarResourceConfig } from './anmar-resource.types';

export const ANMAR_RESOURCES: Record<string, AnmarResourceConfig> = {
  "homeDetails": {
    "key": "homeDetails",
    "route": "home-details",
    "title": "Home Details",
    "endpoint": "/dashboard/home/details",
    "icon": "home",
    "allowCreate": true,
    "fields": [
      {
        "name": "key",
        "label": "Key",
        "type": "select",
        "required": true,
        "options": [
          "experience",
          "digital_solutions",
          "technical_support",
          "customized_services"
        ]
      },
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "description_ar",
        "label": "Description (AR)",
        "type": "textarea"
      },
      {
        "name": "description_en",
        "label": "Description (EN)",
        "type": "textarea"
      },
      {
        "name": "value",
        "label": "Value",
        "type": "text"
      },
      {
        "name": "icon",
        "label": "Icon",
        "type": "text"
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "key",
      "title_ar",
      "title_en",
      "description_ar",
      "description_en",
      "value",
      "icon",
      "is_active",
      "sort_order"
    ]
  },
  "homeAbout": {
    "key": "homeAbout",
    "route": "home-about",
    "title": "Home About",
    "endpoint": "/dashboard/home/about",
    "icon": "info",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "description_ar",
        "label": "Description (AR)",
        "type": "textarea"
      },
      {
        "name": "description_en",
        "label": "Description (EN)",
        "type": "textarea"
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "title_ar",
      "title_en",
      "description_ar",
      "description_en",
      "is_active",
      "sort_order"
    ]
  },
  "homeServices": {
    "key": "homeServices",
    "route": "home-services",
    "title": "Home Services",
    "endpoint": "/dashboard/home/services",
    "icon": "layers",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "description_ar",
        "label": "Description (AR)",
        "type": "textarea"
      },
      {
        "name": "description_en",
        "label": "Description (EN)",
        "type": "textarea"
      },
      {
        "name": "programming_languages",
        "label": "Programming Languages",
        "type": "array-text"
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "title_ar",
      "title_en",
      "description_ar",
      "description_en",
      "programming_languages",
      "is_active",
      "sort_order"
    ]
  },
  "homeWork": {
    "key": "homeWork",
    "route": "home-work",
    "title": "Home Work",
    "endpoint": "/dashboard/home/work",
    "icon": "briefcase",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "languages",
        "label": "Languages",
        "type": "array-text"
      },
      {
        "name": "video",
        "label": "Video",
        "type": "text"
      },
      {
        "name": "link",
        "label": "Link",
        "type": "text"
      },
      {
        "name": "description_ar",
        "label": "Description (AR)",
        "type": "textarea"
      },
      {
        "name": "description_en",
        "label": "Description (EN)",
        "type": "textarea"
      },
      {
        "name": "category",
        "label": "Category",
        "type": "select",
        "options": [
          "website",
          "app",
          "marketing",
          "other"
        ],
        "required": true
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "title_ar",
      "title_en",
      "languages",
      "video",
      "link",
      "description_ar",
      "description_en",
      "category",
      "is_active",
      "sort_order"
    ]
  },
  "homeBusiness": {
    "key": "homeBusiness",
    "route": "home-business",
    "title": "Business",
    "endpoint": "/dashboard/home/business",
    "icon": "briefcase",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "languages",
        "label": "Languages",
        "type": "array-text"
      },
      {
        "name": "video",
        "label": "Video",
        "type": "text"
      },
      {
        "name": "description_ar",
        "label": "Description (AR)",
        "type": "textarea"
      },
      {
        "name": "description_en",
        "label": "Description (EN)",
        "type": "textarea"
      },
      {
        "name": "category",
        "label": "Category",
        "type": "text"
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "title_ar",
      "title_en",
      "languages",
      "video",
      "description_ar",
      "description_en",
      "category",
      "is_active",
      "sort_order"
    ]
  },
  "homeClients": {
    "key": "homeClients",
    "route": "home-clients",
    "title": "Home Clients",
    "endpoint": "/dashboard/home/clients",
    "icon": "users",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "name",
      "is_active",
      "sort_order"
    ]
  },
  "homePartners": {
    "key": "homePartners",
    "route": "home-partners",
    "title": "Home Partners",
    "endpoint": "/dashboard/home/partners",
    "icon": "link",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "website_url",
        "label": "Website URL",
        "type": "text"
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "name",
      "website_url",
      "is_active",
      "sort_order"
    ]
  },
  "aboutDates": {
    "key": "aboutDates",
    "route": "about-dates",
    "title": "About Dates",
    "endpoint": "/dashboard/about/dates",
    "icon": "calendar",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "year",
        "label": "Year",
        "type": "number",
        "required": true
      },
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "description_ar",
        "label": "Description (AR)",
        "type": "textarea"
      },
      {
        "name": "description_en",
        "label": "Description (EN)",
        "type": "textarea"
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "year",
      "title_ar",
      "title_en",
      "description_ar",
      "description_en",
      "is_active",
      "sort_order"
    ]
  },
  "aboutVision": {
    "key": "aboutVision",
    "route": "about-vision",
    "title": "About Vision",
    "endpoint": "/dashboard/about/vision",
    "icon": "eye",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "description_ar",
        "label": "Description (AR)",
        "type": "textarea"
      },
      {
        "name": "description_en",
        "label": "Description (EN)",
        "type": "textarea"
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "title_ar",
      "title_en",
      "description_ar",
      "description_en",
      "is_active",
      "sort_order"
    ]
  },
  "aboutValue": {
    "key": "aboutValue",
    "route": "about-value",
    "title": "About Value",
    "endpoint": "/dashboard/about/value",
    "icon": "star",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "description_ar",
        "label": "Description (AR)",
        "type": "textarea"
      },
      {
        "name": "description_en",
        "label": "Description (EN)",
        "type": "textarea"
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "title_ar",
      "title_en",
      "description_ar",
      "description_en",
      "is_active",
      "sort_order"
    ]
  },
  "aboutTeam": {
    "key": "aboutTeam",
    "route": "about-team",
    "title": "About Team",
    "endpoint": "/dashboard/about/team",
    "icon": "user-check",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "name_ar",
        "label": "Name (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "name_en",
        "label": "Name (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "name_ar",
      "name_en",
      "title_ar",
      "title_en",
      "is_active",
      "sort_order"
    ]
  },
  "servicesSteps": {
    "key": "servicesSteps",
    "route": "services-steps",
    "title": "Services Steps",
    "endpoint": "/dashboard/services/steps",
    "icon": "git-commit",
    "allowCreate": true,
    "fields": [
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "description_ar",
        "label": "Description (AR)",
        "type": "textarea"
      },
      {
        "name": "description_en",
        "label": "Description (EN)",
        "type": "textarea"
      },
      {
        "name": "step_number",
        "label": "Step Number",
        "type": "number",
        "required": true
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "title_ar",
      "title_en",
      "description_ar",
      "description_en",
      "step_number",
      "is_active",
      "sort_order"
    ]
  },
  "contactMessages": {
    "key": "contactMessages",
    "route": "contact-messages",
    "title": "Contact Messages",
    "endpoint": "/dashboard/contact-messages",
    "icon": "mail",
    "allowCreate": false,
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "readonly": true
      },
      {
        "name": "email",
        "label": "Email",
        "type": "text",
        "readonly": true
      },
      {
        "name": "type",
        "label": "Type",
        "type": "text",
        "readonly": true
      },
      {
        "name": "about",
        "label": "About",
        "type": "textarea",
        "readonly": true
      },
      {
        "name": "status",
        "label": "Status",
        "type": "select",
        "required": true,
        "options": [
          "new",
          "read",
          "replied"
        ]
      }
    ],
    "columns": [
      "name",
      "email",
      "type",
      "about",
      "status"
    ]
  },
  "blog": {
    "key": "blog",
    "route": "blog",
    "title": "Blog",
    "endpoint": "/dashboard/blog",
    "icon": "edit",
    "allowCreate": true,
    "fields": [
      {
        "name": "image",
        "label": "Image",
        "type": "text"
      },
      {
        "name": "title_ar",
        "label": "Title (AR)",
        "type": "text",
        "required": true
      },
      {
        "name": "title_en",
        "label": "Title (EN)",
        "type": "text",
        "required": true
      },
      {
        "name": "description_ar",
        "label": "Description (AR)",
        "type": "textarea"
      },
      {
        "name": "description_en",
        "label": "Description (EN)",
        "type": "textarea"
      },
      {
        "name": "content_ar",
        "label": "Content (AR)",
        "type": "textarea"
      },
      {
        "name": "content_en",
        "label": "Content (EN)",
        "type": "textarea"
      },
      {
        "name": "date",
        "label": "Date",
        "type": "date"
      },
      {
        "name": "categories",
        "label": "Categories",
        "type": "array-text"
      },
      {
        "name": "slug",
        "label": "Slug",
        "type": "text"
      },
      {
        "name": "is_active",
        "label": "Active",
        "type": "checkbox"
      },
      {
        "name": "sort_order",
        "label": "Sort Order",
        "type": "number"
      }
    ],
    "columns": [
      "image",
      "title_ar",
      "title_en",
      "description_ar",
      "description_en",
      "content_ar",
      "content_en",
      "date",
      "categories",
      "slug",
      "is_active",
      "sort_order"
    ]
  }
};
