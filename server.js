const express = require('express');
const app = express();
const PORT = 3000;

const Company = {
    externalLinks: [
        {name: 'Google', url: 'https://www.google.com'},
        {name: 'Facebook', url: 'https://www.facebook.com'},
        {name: 'Twitter', url: 'https://www.twitter.com'},
        {name: 'CuteDog', url:'https://www.thesprucepets.com/thmb/ddtN8SR9bIWajg3IVhXwbOgZuz8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1_BlackPuppy-5ba50070c9e77c0082221c54.jpg'}
      ],
    pastWork: [
        {name:'Thing 3', date: "1/3/1920", description: "Blah Blah Blah, this doesn't really matter. This project is awesome, hire me." },
        {name:'Thing 1', date: "1/1/1900", description: "Blah Blah Blah, this doesn't really matter. This project is awesome, hire me." },
        {name:'Thing 2', date: "1/2/1910", description: "Blah Blah Blah, this doesn't really matter. This project is awesome, hire me." },
        {name:'Thing 4', date: "1/4/1930", description: "Blah Blah Blah, this doesn't really matter. This project is awesome, hire me." }
    ],
    staff: [
        {name: 'John', title: 'CEO', description: 'John is a great guy, he is the best CEO in the world', email: 'test@gmail.com', phone: '123-456-7890'},
        {name: 'Jane', title: 'CTO', description: 'Jane is a great gal, she is the best CTO in the world', email: 'test@gmail.com', phone: '123-456-7890'},
        {name: 'Jim', title: 'CFO', description: 'Jim is a great guy, he is the best CFO in the world', email: 'test@gmail.com', phone: '123-456-7890'},
        {name: 'Jill', title: 'COO', description: 'Jill is a great gal, she is the best COO in the world', email: 'test@gmail.com', phone: '123-456-7890'}
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