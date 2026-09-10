export const GET_CONTACT_OFFICES_QUERY = `
  query GetContactOffices {
    contactOffices(first: 20, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        contactOfficeFieldss {
          city
          address
          phone
          email
          latitude
          longitude
          isMainOffice
        }
      }
    }
  }
`;

export const GET_CONTACT_PAGE_QUERY = `
  query GetContactPageContent {
    contactPage(id: "iletisim-detay", idType: SLUG) {
      contactPageFields {
        heroTitle
        heroDescription
        locationsTitle
        locationsDescription
        formTitle
        formDescription
        nameLabel
        namePlaceholder
        companyLabel
        companyPlaceholder
        emailLabel
        emailPlaceholder
        phoneLabel
        phonePlaceholder
        serviceLabel
        serviceDefault
        messageLabel
        messagePlaceholder
        submitButtonText
      }
    }
  }
`;