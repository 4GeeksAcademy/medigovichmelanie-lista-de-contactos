const URL = 'https://playground.4geeks.com/contact/agendas/melanie/contacts';

export const getContactList = async () => {
    try {

        const response = await fetch(URL);
        const data = await response.json();
        return data.contacts;
    } catch (err) {
        console.log(`ERROR GET CONTACT LIST`, err);

    }
}
export const deleteContactById = async (id) => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        });
        if (response.status === 204) {
            return true;
        }

    } catch (err) {
        console.log(`ERROR DELETE CONTACT`, err);
    }
}


export const addContact = async (contact) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(contact),
        });
        console.log(response);
        if (response.status === 201) {
            return 'Contact create';

        }


    } catch (err) {
        console.log('ERROR IN CREATE CONTACT', err);

    }
}

export const putContact = async (contact) => {
    try {
        const response = await fetch(`${URL}/${contact.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(contact),
        });
        console.log(response);
        if (response.status === 200) {
            return 'Contact edit';

        }


    } catch (err) {
        console.log('ERROR IN EDIT CONTACT', err);

    }
}