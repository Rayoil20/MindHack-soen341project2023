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
        if (cv){
            const formData = new FormData();

            formData.append("data", cv);

            const url = "http://localhost:5000/upload/cv";

            await fetch(url, {
                    method: 'POST',
                    headers: {'Access-Control-Allow-Origin':'*', 'authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbG82OUB0b25wZXJlLmNvbSIsInBhc3N3b3JkIjoibGFsYWxhIiwiaWF0IjoxNjc5ODYzNTYzfQ.DX8MIeXTTZGkqluzk8RW-oszJr07px0n8Yba-ITiK5k'},
                    body: formData,
                }
            );
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
