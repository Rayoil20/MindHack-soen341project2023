export const getTest = async () => {
    try{
        const res = await fetch('http://localhost:5000/',{  // i dont know what is the currect url is yet futher testing and reaserch is needed
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        });
        return await res.json();
}catch(err){}
};