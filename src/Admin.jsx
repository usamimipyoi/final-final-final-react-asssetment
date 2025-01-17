import { useEffect, useState } from 'react';
import { mockEmployees } from './Home';
import Home from './Home';

const admin = () => {

    const [members, setMembers] = useState(mockEmployees)
    const [firstname, setFirstname] = useState([]);
    const [lastname, setLastname] = useState([]);
    const [position, setPosition] = useState([]);

    /* useEffect(() => {},[mockEmployees]) */

    const shoutTest = () => {
        console.log({members})
    }

    const addMembers = (firstname,lastname,position) => {
        const addNew = {
            id: members.length,
            name: firstname,
            lastname: lastname,
            position: position,
        }
        console.log(addNew)
        members.push(addNew)
        setMembers(members)
        console.log(members)

        setFirstname('');
        setLastname('');
        setPosition('');
    } 

    const deleteEmployee = (id) => {
        const newArray = members.filter(item => item.id !== id)
        console.log({newArray})
        console.log({members})
    } 

    return (
        <div>
            <div>
                <header>
                    <h1>Generation Thailand <br />React - Admin Sector</h1>
                </header>
                <a href="/User"><button>User Home Sector</button></a>
                <a href="/Admin"><button>Admin Home Sector</button></a>
                <button
                    onClick={() => console.log(sector)}
                >Test sector (check dev log)</button>
            </div>
            <div>
                <h4>Create User Here</h4>
                <form action="">
                    <input 
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstname}
                        placeholder='Name'
                        onChange={(e)=>
                            (setFirstname(e.target.value)
                        )}
                    />
                                        <input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastname}
                        placeholder='Last name'
                        onChange={(e)=>
                            (setLastname(e.target.value)
                        )}
                    />
                    <input 
                        type="text"
                        name="position"
                        id="position"
                        value={position}
                        placeholder='position'
                        onChange={(e)=>
                            (setPosition(e.target.value)
                        )}
                    />
                    <button 
                        type='button' 
                        id='buttonSave'
                        onClick = {
                        () => addMembers(firstname,lastname,position)
                        }>Save</button>
                    <button 
                        type='button' 
                        onClick={
                        () => shoutTest()
                        }>Test</button>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mockEmployees.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                        <td id='deleteButton'>
                        <span 
                            onClick={() =>
                            deleteEmployee(item.id)
                        } >Delete</span></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default admin