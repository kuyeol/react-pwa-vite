import {useState} from "react";
import Box from "@mui/material/Box";


interface TextBox {
    contents:string
}


function In (text : TextBox){


    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const handleSubmit = () => {
        // 기본 제출 동작 방지


        fetch('./api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(text),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // 성공 시 처리 로직 추가 (예: 폼 초기화, 메시지 표시 등)
                setName('');
                setAge('');
            })
            .catch((error) => {
                console.error('Error:', error);
                // 에러 시 처리 로직 추가 (예: 에러 메시지 표시 등)
            });
    };

    return (
        <Box>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Age:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
            </label>

            <button type="submit">Submit</button>
        </form>
            </Box>
    );

}


export default function MainContainer(text: TextBox) {

    const textVar = "5시 30분 도착 ㅎㅎ";
    return (
        <><Box>

            <h1>{textVar}</h1>
            {text.contents}
            <In contents="5시 30분 도착 ㅎㅎ"/>
            <In contents={textVar}></In>
        </Box>

        </>
    );
}