import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            { id: 'id-5', name: 'Wait for me', number: '937-99-92' },
        ],

        filter: '',
    };
    componentDidMount() {
        // console.log('cdm');
        const items = localStorage.getItem('contacts');
        if (items) {
            this.setState({
                contacts: JSON.parse(items),
            });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('cdu');
        if (prevState !== this.state.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts),
            );
        }
    }

    addContact = (name, number) => {
        const { contacts } = this.state;
        let check = contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );

        if (check) {
            alert(`${name} is already in contacts`);
            return;
        }

        const newContact = {
            id: uuidv4(),
            name: name,
            number: number,
        };
        this.setState(() => {
            return {
                contacts: [...contacts, newContact],
            };
        });
    };

    handleChangeFilter = textForFilter => {
        this.setState({
            filter: textForFilter,
        });
    };

    handleRemoveTask = contactID => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(({ id }) => id !== contactID),
        }));
    };

    render() {
        let { contacts, filter } = this.state;

        return (
            <>
                <div className={styles.contactForm}>
                    <h1>Phonebook</h1>
                    <ContactForm
                        addContact={this.addContact}
                        handleChange={this.handleChange}
                    />
                </div>

                <div className={styles.contactForm}>
                    <h1>Contacts</h1>
                    <Filter onChangeFilter={this.handleChangeFilter} />
                    <ContactList
                        filter={filter}
                        contacts={contacts}
                        onHandleRemoveTask={this.handleRemoveTask}
                    />
                </div>
            </>
        );
    }
}
