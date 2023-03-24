import Button from "@mui/material/Button";
import {useState} from "react";

export default function Upload(){

    const [cv,setCv] = useState(undefined);


    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        setCv(file);
    };

    const uploadCV = async (e) =>{
        e.preventDefault();
        console.log("ON A CLICKE SUR LE BOUTON");

        if (cv){

            const formData = new FormData();

            formData.append("data", cv);
            const options = {
                method : "POST",
                body : formData,
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'}
            }
            const url = "localhost:5000/upload/cv";
            await fetch(url,options);
        }
    }

    return (
        <div>
            <Button>
                <label htmlFor="files" className="btn">
                    <div>Upload CV</div>
                </label>
                <input
                    id={"files"}
                    multiple
                    hidden
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                />
            </Button>

            <Button onClick={uploadCV}>Send</Button>

        </div>
    )
}
