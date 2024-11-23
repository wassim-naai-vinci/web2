import { useState,SyntheticEvent } from "react";
import Movie from "../type";


interface MovieFormAddProps {
    MovieAdded : (movie : Movie) => void;
}

const MovieFormAdd = ({MovieAdded} : MovieFormAddProps) => {

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [during, setDuring] = useState(0);
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(0);

    const handleSubmit = (e : SyntheticEvent) => {
        e.preventDefault();
        MovieAdded({
            title,
            director,
            during,
            url,
            description,
            budget
        });
        setTitle("");
        setDirector("");
        setDuring(0);
        setUrl("");
        setDescription("");
        setBudget(0);
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <div>
                <label > Titre : </label>
                <input
                type="text"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                required />
            </div>  
            <div>
                <label > Réalisateur : </label>
                <input
                type="text"
                value={director} 
                onChange={(e) => setDirector(e.target.value)}
                required />
            </div>
            <div>
                <label > Durée : </label>
                <input
                type="number"
                value={during} 
                onChange={(e) => setDuring(parseInt(e.target.value))}
                required />
            </div>
            <div>
                <label > Url : </label>
                <input
                type="text"
                value={url} 
                onChange={(e) => setUrl(e.target.value)}
                 />
            </div>
            <div>
                <label > Description : </label>
                <input 
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
            <label > Budget : </label>
                <input
                type="number"
                value={budget} 
                onChange={(e) => setDuring(parseInt(e.target.value))}
                 />
            </div>
            <button type="submit">Ajouter</button>
        </form>
    );
};


export default MovieFormAdd;