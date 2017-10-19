import React, { Component } from 'react';
import GuestList from './GuestList';

class App extends Component {

  state = {
    guests: [
      {
        name: "Pearl",
        isConfirmed: true
      },
      {
        name: "Gracie",
        isConfirmed: true
      },
      {
        name: "Lizi",
        isConfirmed: true
      }
    ]
  }

  getTotalInviteds = () => this.state.guests.length;

  // getAttendingGuest = () =>
  // getUnfonfirmedGuest = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <form>
              <input type="text" placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven{`'`}t responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>

          <GuestList guests={this.state.guests}/>

        </div>
      </div>
    );
  }
}

export default App;
