const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static("public"));

// Serve static files from the "public" folder
app.use('/static', express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});


app.set('view engine', 'ejs');
const Company = {
    externalLinks: [
        {name: 'Google', url: 'https://www.google.com'},
        {name: 'Facebook', url: 'https://www.facebook.com'},
        {name: 'Twitter', url: 'https://www.twitter.com'},
        {name: 'CuteDog', url:'https://www.thesprucepets.com/thmb/ddtN8SR9bIWajg3IVhXwbOgZuz8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1_BlackPuppy-5ba50070c9e77c0082221c54.jpg'}
      ],
    pastWork: [
        {name:'The First Project', date: "1/3/1920", description: "Our first Project working together.  This were rough.  Especially Jen.  but this doesn't really matter. This project is awesome, hire me." },
        {name:'The Second Project', date: "1/1/1900", description: "Our second Project working together.  This was better.  Jen started to pick up the slack a little.   this doesn't really matter. This project is awesome, hire me." },
        {name:'Even Better Projct ', date: "1/2/1910", description: "Our third projct working together.  Way Better!  Jen Got Fired., this doesn't really matter. This project is awesome, hire me." },
        {name:'This Current and BEST Project', date: "1/4/1930", description: "Our BEST project working together.  Jen WHO>>???? , this doesn't really matter. This project is awesome, hire me." }
    ],
    staff: [
        {name: 'Chris', title: 'CEO', description: 'John is a great guy, he is the best CEO in the world', email: 'test@gmail.com', phone: '123-456-7890'},
        {name: 'Zaki', title: 'CTO', description: 'Jane is a great gal, she is the best CTO in the world', email: 'test@gmail.com', phone: '123-456-7890'},
        {name: 'Jen', title: 'CFO', description: 'Jim is a great guy, he is the best CFO in the world', email: 'test@gmail.com', phone: '123-456-7890'},
        {name: 'Jens-Replacement', title: 'COO', description: 'Jill is a great gal, she is the best COO in the world', email: 'test@gmail.com', phone: '123-456-7890'}
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
    // console.log(Company.externalLinks);

    res.render('links.ejs', {
        links: Company.externalLinks
    })
});


app.get('/past-work', (req, res) => {

    res.render('past-work.ejs', {
        works: Company.pastWork

    })
});

app.get('/past-work/:id', (req, res) => {
    console.log('Hello')
    console.log(req.params);
    const index= req.params.id
    res.render('work.ejs', {
        item: Company.pastWork[index]
    })


});

app.get('/staff', (req, res) => {
res.render('staff.ejs',{
    staff: Company.staff
})
});

app.get('/staff/:id', (req, res) => {
    res.render('person.ejs' ,{
    person: Company.staff[req.params.id]
    })
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})