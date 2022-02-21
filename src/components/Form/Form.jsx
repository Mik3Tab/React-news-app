import React, {useState} from 'react'
import "./Form.scss";
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
    console.log("Enviando datos... "+data.title+" " + data.section + " " + data.subsection + " " + data.abstract);
    setTimeout(()=>{
        navigate("/News");
    }, 1000);
    let title = data.title;
    let section = data.section;
    let subsection = data.subsection;
    let abstract = data.abstract;
    const info = {title, section,subsection,abstract};
    localStorage.setItem('myForm', JSON.stringify(info))
    }
    return(
        <div className="form_container">
            <form id="myform" onSubmit={handleSubmit}>
                <h2>Crea tu post</h2>
                <label>Titulo</label>
               <input type="text" onChange={handleInputChange} name="title" id="title"/>
               <label>Sección</label>
               <input type="text" onChange={handleInputChange} name="section" id="section"/>
               <label>Subsección</label>
               <input type="text" onChange={handleInputChange} name="subsection" id="subsection"/>
               <label>Contenido de la noticia</label>
               <input type="text" onChange={handleInputChange} name="abstract" id="abstract"/> 
               <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Form;