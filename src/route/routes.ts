
import { AddressBookDetails } from "../components/addressBook/details/AddressBookDetails.view";
import { AddressBookList } from "../components/addressBook/list/AddressBookList.view";


export const componentRoutes = [
  {
    path: '/details', component: AddressBookDetails, exact: true, nav: false
  },
  {
    path: '/', component: AddressBookList, exact: true, nav: false,
  }
]