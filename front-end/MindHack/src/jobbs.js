import React from "react"
import Card from 'react-bootstrap/Card';
import JobOffer from "./components/JobOffer";


import Search from './components/search';

// export default function Jobs(props) {
//
//     return (
//
//         <div className="input-group">
//             <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
//                    aria-describedby="search-addon"/>
//             <button type="button" className="btn btn-outline-primary">search</button>
//
//             <JobOffer title={"Software Engineering Intern"} subtitle={"Summer 2023"} text={"Web design experience required"}></JobOffer>
//             <JobOffer title={"Computer Engineering Intern"} subtitle={"Fall 2023"} text={"Arduino coding and building experience required"}></JobOffer>
//             <JobOffer title={"Software Engineering Intern"} subtitle={"Summer 2023"} text={"Web design experience required"}></JobOffer>
//             <JobOffer title={"Computer Engineering Intern"} subtitle={"Fall 2023"} text={"Arduino coding and building experience required"}></JobOffer>
//             <JobOffer title={"Software Engineering Intern"} subtitle={"Summer 2023"} text={"Web design experience required"}></JobOffer>
//             <JobOffer title={"Computer Engineering Intern"} subtitle={"Fall 2023"} text={"Arduino coding and building experience required"}></JobOffer>
//             <JobOffer title={"Software Engineering Intern"} subtitle={"Summer 2023"} text={"Web design experience required"}></JobOffer>
//             <JobOffer title={"Computer Engineering Intern"} subtitle={"Fall 2023"} text={"Arduino coding and building experience required"}></JobOffer>
//
//         </div>
//     )
//
// }

const Look = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filteredPosts = filterPosts(posts, query);

    return (
        <div>
            <Search />
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.key}>{post.name}</li>
                ))}
            </ul>
        </div>
    );
}

const { search } = window.location;
const query = new URLSearchParams(search).get('s');

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};

export default Look;

const posts  = [

    { id: '1', name: 'Software Engineering Intern' },
    { id: '2', name: 'Software Engineering Intern' },
    { id: '3', name: 'Computer Engineering Intern' },
    { id: '4', name: 'Computer Engineering Intern' },

];



