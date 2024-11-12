const express = require('express');
const app = express();
const PORT = 3000;

const Company = {
    externalLinks: [
        {name: 'Google', url: 'https://www.google.com'},
        {name: 'Facebook', url: 'https://www.facebook.com'},
        {name: 'Twitter', url: 'https://www.twitter.com'},
        {name: 'CuteDog', url:'https://www.thesprucepets.com/thmb/ddtN8SR9bIWajg3IVhXwbOgZuz8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1_BlackPuppy-5ba50070c9e77c0082221c54.jpg'}
        ]
    }


app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
});

app.get('/history', (req, res) => {
    res.render('history.ejs')
});

app.get('/links', (req, res) => {
    res.render('links.ejs')
});


app.get('/past-work', (req, res) => {
    res.render('past-work.ejs')
});

app.get('/staff', (req, res) => {
    res.render('staff.ejs')
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})