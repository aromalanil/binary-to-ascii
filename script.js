function binaryToAscii()
{
    let binaryData=document.getElementById('binary-input').value;

    let regex=/^[0-1| ]{1,}$/g;

    if(regex.test(binaryData))
    {
        let ascii=binaryData.split(/ +/g).map(b => String.fromCharCode(parseInt(b,2))).join('');

        document.getElementById('ascii').innerText=ascii;

        
    }
    else
    {
        document.getElementById('message-title').innerText='ERROR';
        document.getElementById('ascii').innerText='Enter a proper binary string.';
    }
     
    
}