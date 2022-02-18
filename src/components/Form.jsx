import React from 'react'
import {useNavigate} from 'react-router-dom';
export const Form = () => {
let navigate = useNavigate();
const [data, setData] = useState({
    title: "",
    section: "",
    subcategory: "",
    abstract: ""
});
const handleInputChange = (event) => {
    setData({
        ...data,
        [event.target.name] : event.target.value
    });
};
const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Enviando datos... "+data.title+" " + data.section + " " + data.subcategory + " " + data.abstract);
    setTimeout(()=>{
        navigate("/");
    }, 1000);
    let db  = JSON.parse(localStorage.getitem('myForm'))||[];
    let title = data.title;
    let section = data.section;
    let subcategory = data.subcategory;
    let abstract = data.abstract;
    const info = {title, section,subcategory,abstract};
    db.push(info);
    localStorage.setItem('myForm', JSON.stringify(db))
    }
    return(
        <div className="form_container">
            <form id="myform" onSubmit={handleSubmit}>
               <input type="text" onChange={handleInputChange} name="title" id="title" placeholder="titulo"/>
               <input type="text" onChange={handleInputChange} name="section" id="section"/>
               <input type="text" onChange={handleInputChange} name="subsection" id="subsection"/>
               <input type="text" onChange={handleInputChange} name="abstract" id="abstract"/> 
               <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Form;