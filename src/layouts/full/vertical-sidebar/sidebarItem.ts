export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  id?: number;
  to?: string;
  chip?: string;
  BgColor?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}
const sidebarItem: menu[] = [
  {
    header: "dashboards",
    id: 1,
    children: [
      {
        title: "Dashboard",
        icon: "home-2-linear",
        to: "/",
      },
      {
        title: "Merchant",
        icon: "users-group-rounded-line-duotone",
        to: "/merchant",
      },
      {
        title: "Categories",
        icon: "cardholder-line-duotone",
        to: "/",
        children: [
          {
            title: "Category1",
            to: "/categories/categories1",
          },
          {
            title: "Category2",
            to: "/categories/categories2",
          },
          {
            title: "Category3",
            to: "/categories/categories3",
          },
        ],
      },
      {
        title: "Services",
        icon: "chart-square-line-duotone",
        to: "/services",
      },
      {
        title: "Booking",
        icon: "notes-linear",
        to: "/booking",
      },
      {
        title: "Reviews",
        icon: "star-outline",
        to: "/reviews",
      },
      {
        title: "Contact",
        icon: "call-chat-linear",
        to: "/contact",
      },
      {
        title: "Pricing",
        icon: "dollar-linear",
        to: "/pricing",
      },
      {
        title: "Ads",
        icon: "card-search-line-duotone",
        to: "/ads",
      },
      {
        title: "Content",
        icon: "letter-linear",
        to: "/content",
      },
      {
        title: "Settlements",
        icon: "clipboard-text-outline",
        to: "/",
        children: [
          {
            title: "Settlement1",
            to: "/settlements/settlement1",
          },
          {
            title: "Settlement2",
            to: "/settlements/settlement2",
          },
          {
            title: "Settlement3",
            to: "/settlements/settlement3",
          },
        ],
      },
      {
        title: "Reports",
        icon: "checklist-minimalistic-linear",
        to: "/reports",
      },
      {
        title: "Permissions",
        icon: "shield-keyhole-minimalistic-outline",
        to: "/",
        children: [
          {
            title: "Permissions1",
            to: "/permissions/permissions1",
          },
          {
            title: "Permissions2",
            to: "/permissions/permissions2",
          },
        ],
      },
      {
        title: "Setting",
        icon: "settings-linear",
        to: "/setting",
      },
      {
        title: "Calender",
        icon: "calendar-minimalistic-linear",
        to: "/calender",
      },
    ],
  },
];

export default sidebarItem;
