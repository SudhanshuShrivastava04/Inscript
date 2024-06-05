exports.dashboard = async (req, res) => {
    const locals = {
      title: "Inscript - Dashboard",
      description: "Node your notes, script your day.",
    };
  
    res.render("dashboard", {
      locals,
      layout: "../views/layouts/dashboard",
    });
  };