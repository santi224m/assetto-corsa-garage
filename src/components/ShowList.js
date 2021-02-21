import React from 'react';
import axios from 'axios';

class ShowList extends React.Component {
    // componentDidMount() {
    //     const getCars = async () => {
    //         const result = await axios.get('../json/cars.json');

    //         console.log(result);
    //     }

    //     getCars();
    // }

    render() {
        return (
        <div>
            Cars lists
            <a href="../json/cars.json">Click me</a>
        </div>
        );
    }
}

export default ShowList;