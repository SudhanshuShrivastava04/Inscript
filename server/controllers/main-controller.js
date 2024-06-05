exports.homepage = async (req, res) => {
  const locals = {
    title: "Inscript - Home",
    description: "Node your notes, script your day.",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

exports.about = async (req, res) => {
  const locals = {
    title: "Inscript - About",
    description: "Node your notes, script your day.",
  };

  res.render("about", locals);
};
