var json={
          "colaboradores":[{"id"                 : "SR001",
                            "Nombres"            : "Juan Carlos",
                            "Apellidos"          : "Gamarra Gonzales",
                            "Dni"                : "71462940",
                            "Cargo"              : "Obrero",
                            "Fecha"              : "08/12/87",
                            "Telefono"           : "969317058"},
                            {"id"                : "SR002",
                             "Nombres"           : "Mario Julio",
                             "Apellidos"         : "Quispe Aliaga",
                             "Dni"               : "71462977",
                             "Cargo"             : "Supervisor",
                             "Fecha"             : "11/01/84",
                             "Telefono"          : "982368392"}
           ],
           "esposas":[{      "id"                 : "SR001",
                             "Nombres"            : "Marlene Esther",
                             "Apellidos"          : "Contreras Maqui",
                             "Dni"                : "71332340",
                             "Fecha"              : "14/02/84",
                             "Telefono"           : "982368392",
                             "Hijos"              : "2"},
                             {"id"                : "SR002",
                              "Nombres"           : "Mirtha Arlene",
                              "Apellidos"         : "Abad Gutierrez",
                              "Dni"               : "71461117",
                              "Fecha"             : "01/12/82",
                              "Telefono"          : "982368392",
                              "Hijos"             : "5"}
            ],
            "padres":[
                      { "padre" :
                            [{"id"                 : "SR001",
                              "Nombres"            : "Gregorio Bernabe",
                              "Apellidos"          : "Huayta Mendoza",
                              "Dni"                : "72425676",
                              "Fecha"              : "07/11/57",
                              "Telefono"           : "982368392"},
                            {"id"                 : "SR002",
                              "Nombres"            : "Gerson Jesus",
                              "Apellidos"          : "Perez Aguilar",
                              "Dni"                : "79892345",
                              "Fecha"              : "12/10/55",
                              "Telefono"           : "982368392"}
                          ]},
                      { "madre"  :
                            [{"id"                 : "SR001",
                              "Nombres"            : "Betty Cristina",
                              "Apellidos"          : "Torres Campos",
                              "Dni"                : "78457732",
                              "Fecha"              : "24/08/52",
                              "Telefono"           : "982368392"},
                            {"id"                 : "SR002",
                              "Nombres"            : "Ingrid Victoria",
                              "Apellidos"          : "Valdivia del Pomar",
                              "Dni"                : "72723344",
                              "Fecha"              : "15/05/50",
                              "Telefono"           : "982368392"}
                            ]}]
};

$("#id1").text(json.colaboradores[0].id);
$("#nombres1").text(json.colaboradores[0].Nombres);
$("#apellidos1").text(json.colaboradores[0].Apellidos);
$("#dni1").text(json.colaboradores[0].Dni);
$("#cargo1").text(json.colaboradores[0].Cargo);
$("#fecha1").text(json.colaboradores[0].Fecha);
$("#telefono1").text(json.colaboradores[0].Telefono);

$("#id2").text(json.colaboradores[1].id);
$("#nombres2").text(json.colaboradores[1].Nombres);
$("#apellidos2").text(json.colaboradores[1].Apellidos);
$("#dni2").text(json.colaboradores[1].Dni);
$("#cargo2").text(json.colaboradores[1].Cargo);
$("#fecha2").text(json.colaboradores[1].Fecha);
$("#telefono2").text(json.colaboradores[1].Telefono);
/*json.padres[0].padre[1].id*/
