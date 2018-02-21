import { types } from 'mobx-state-tree';

const random = (): string =>
  Number(1 + Math.floor(Math.random() * 10000)).toString(24);

const Contact = types
  .model('Contact', {
    name: types.optional(types.string, 'Unnamed Contact'),
    telephones: types.optional(types.array(types.string), []),
    address: types.optional(types.string, ''),
    email: types.optional(types.string, '')
  })
  .views(self => ({
    get phone() {
      return self.telephones.entries();
    }
  }))
  .actions(self => {
    function setName(name: string) {
      self.name = name;
    }

    function setPhones(phones: string[]) {
      self.telephones.splice(0, self.telephones.length, ...phones);
    }

    return { setName, setPhones };
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
