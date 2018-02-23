import { types } from 'mobx-state-tree';

const random = (): string =>
  Number(1 + Math.floor(Math.random() * 10000)).toString(24);

const Contact = types
  .model('Contact', {
    name: types.optional(types.string, 'Unnamed Contact'),
    telephone: types.optional(types.string, ''),
    address: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    setName (name: string) {
      this.name = name;
    },
    setPhone (phone: string) {
      this.telephone = phone;
    },
    setAddress (addr: string) {
      this.address = addr;
    },
    setEmail (email: string) {
      this.email = email;
    }
  });

const AddressBook = types
  .model('AddressBook', {
    contacts: types.optional(types.map(Contact), {})
  })
  .actions(self => {
    function addContact(contact: object) {
      self.contacts.set(random(), Contact.create(contact));
    }
    return { addContact };
  });

export { AddressBook };
