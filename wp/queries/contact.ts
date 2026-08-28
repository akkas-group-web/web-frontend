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
