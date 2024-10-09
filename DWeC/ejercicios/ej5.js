let usuaris = [{ "nom":"Joana", "llinatges":"Que Ferrer", "sexe":"D", "categoria":"Platinum", "hotel":"GH Emili Darder", "entrada":"07/02/2023", "sortida":"09/03/2023", "encarregat":"Marino Darder"},
    { "nom":"Marina", "llinatges":"Gabri Ques", "sexe":"D", "categoria":"Silver", "hotel":"GH Palma", "entrada":"07/03/2023", "sortida":"09/03/2023", "encarregat":"Pere Darder"},
    { "nom":"Josep", "llinatges":"Castell Miranda", "sexe":"H", "categoria":"", "hotel":"Hotel Wonder", "entrada":"17/02/2023", "sortida":"19/02/2023", "encarregat":"Marina Darder"}];

    function personalizar(usuaris) {
        for (const user of users){
            const inici = user.sexe == "H"? "Benvolgut":"Benvolguda";
            if (user.sexe ="H") {
                var category = user.categoria?`Com usuari ${user.categoria} es`:"Es";
            }
            else{
                var category = user.categoria?`Com usuaria ${user.categoria} es`:"Es";
            }
        }
    }

    /*

    users.forEach(user=>{}

    */