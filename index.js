
const express= require('express');
const bodyParser= require('body-parser');

const app= express();

app.use(bodyParser.urlencoded({extended:false}));

//whatsapp webhook

app.post('/whatsapp',(req,res)=>{
    const incomingMssg= req.body.Body;
    const from= req.body.From;

    console.log('Message received:',incomingMssg, 'from: ', from);

    res.set('Content-Type','text/xml');
    res.send(`
        <Response>
             
            <Message>
            We got your message!

            Received from:
            "${incomingMssg}"

            We are working!

            </Message>
        
        </Response>

        
        `);

});

app.get('/',(req,res)=>{
    res.send('we are up and running');
});

const PORT= 3000;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT} 🔥`)
});

