// import React from 'react';

// import { nanoid } from 'nanoid';

// import {
//   ContactList,
//   StyledButton,
//   StyledForm,
//   StyledInput,
//   StyledLabel,
//   StyledLi,
//   StyledWrapper,
// } from './App.styled';

// export class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     name: '',
//     number: '',
//   };
//   handleInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number, contacts } = this.state;
//     if (name.trim() === '' || number.trim() === '') {
//       alert('Please enter a valid name and number.');
//       return;
//     }
//     const newContact = {
//       id: nanoid(),
//       name: name.trim(),
//       number: number.trim(),
//     };
//     this.setState({
//       contacts: [...contacts, newContact],
//       name: '',
//       number: '',
//     });
//   };
//   handleFilterChange = e => {
//     this.setState({ filter: e.target.value.toLowerCase() });
//   };
//   render() {
//     const { contacts, name, filter, number } = this.state;
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(filter)
//     );
//     return (
//       <StyledWrapper>
//         <h1>Phone Book</h1>
//         <StyledForm onSubmit={this.handleSubmit}>
//           <StyledLabel>
//             Name:
//             <StyledInput
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleInputChange}
//               required
//             />
//           </StyledLabel>
//           <StyledLabel>
//             Number:
//             <StyledInput
//               type="number"
//               name="number"
//               value={number}
//               onChange={this.handleInputChange}
//               required
//             />
//           </StyledLabel>
//           <StyledButton type="submit">Add Contact</StyledButton>
//         </StyledForm>
//         <h2>Contacts</h2>
//         <StyledLabel>
//           Find contacts by name:
//           <StyledInput
//             type="text"
//             name="filter"
//             value={filter}
//             onChange={this.handleFilterChange}
//           />
//         </StyledLabel>
//         <ContactList>
//           {filteredContacts.map(contact => (
//             <StyledLi key={contact.id}>
//               {contact.name} - {contact.number}
//             </StyledLi>
//           ))}
//         </ContactList>
//       </StyledWrapper>
//     );
//   }
// }
