import React, { useState } from 'react';

function ContactList() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    country: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { ...formData };
    setContacts([...contacts, newContact]);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      contact: '',
      country: ''
    });
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
    alert('Contact deleted successfully!');
  };

  const updateContact = (index) => {
    setEditingIndex(index);
    setFormData({
      name: contacts[index].name,
      email: contacts[index].email,
      contact: contacts[index].contact,
      country: contacts[index].country
    });
  };

  const saveContact = () => {
    const updatedContacts = [...contacts];
    updatedContacts[editingIndex] = { ...formData };
    setContacts(updatedContacts);
    setEditingIndex(null);
    alert('Contact updated successfully!');
  };

  const displayContactDetails = (index) => {
    const contact = contacts[index];
    setFormData({
      name: contact.name,
      email: contact.email,
      contact: contact.contact,
      country: contact.country
    });
    setEditingIndex(index);
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="contact"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="country"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
        >
          Add new
        </button>
      </form>

      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="text-green-600 dark:text-green-400">
              Contact added successfully!
            </div>
            <button
              className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div  className="md:-mt-[17rem] gap-5  flex justify-startmx-auto sm:mt-24 max-w-md p-4 bg-blue-100 rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Saved Contacts</h2>
        
        {contacts.length > 0 ? (
          <ul className="mt-4">
            {contacts.map((contact, index) => (
              <li key={index} className="mb-2">
                <div
                  className="cursor-pointer font-medium text-gray-900 dark:text-white border border-gray-300 rounded-md p-3"
                  onClick={() => displayContactDetails(index)}
                >
                  {contact.name}
                </div>
                {editingIndex === index && (
                  <div className="mt-2 border border-gray-300 rounded-md p-3">
                    <div><strong>Email:</strong> {contact.email}</div>
                    <div><strong>Contact:</strong> {contact.contact}</div>
                    <div><strong>Country:</strong> {contact.country}</div>
                    <div className="mt-2 flex gap-3">
                      <button
                        className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                        onClick={saveContact}
                      >
                        update
                      </button>
                      <button
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                        onClick={() => deleteContact(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className='flex justify-start items-start mt-7 -ml-[7.5rem]'>No contacts found.</p>
        )}
      </div>
    </div>
  );
}

export default ContactList;
