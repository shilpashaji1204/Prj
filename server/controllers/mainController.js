// Homepage

exports.homepage = async (req, res) => {
    const locals = {

        title: "Notes",
        description: "Notes App",

    }

    res.render('index', locals);
}

// About 

exports.about = async (req, res) => {
    const locals = {

        title: "About- Notes",
        description: "Notes App",

    }

    res.render('about', {
        locals,
        layout: '../views/layouts/front-page'
    
    });
}